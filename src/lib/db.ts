import pg from "pg";
import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  service: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  created_at: string;
  updated_at: string;
}

export interface SubmissionStats {
  total: number;
  new: number;
  read: number;
  replied: number;
  archived: number;
}

// Global cache to persist connections across hot reloads
declare global {
  var __dbInstance: DatabaseSync | undefined;
  var __pgPool: pg.Pool | undefined;
  var __pgInitialized: boolean | undefined;
}

function isPostgresConfigured(): boolean {
  const url = process.env.DATABASE_URL?.trim();
  return Boolean(url && (url.startsWith("postgres://") || url.startsWith("postgresql://")));
}

function getPgPool(): pg.Pool {
  if (global.__pgPool) return global.__pgPool;
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
  });
  global.__pgPool = pool;
  return pool;
}

async function ensurePgSchema(pool: pg.Pool): Promise<void> {
  if (global.__pgInitialized) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      service TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_submissions_status ON contact_submissions(status);
    CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON contact_submissions(created_at DESC);
  `);
  global.__pgInitialized = true;
}

function getDatabase(): DatabaseSync {
  if (global.__dbInstance) {
    return global.__dbInstance;
  }

  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const dbPath = path.join(dataDir, "devops.db");
  const db = new DatabaseSync(dbPath);

  // Enable WAL mode for better concurrency and performance
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec("PRAGMA synchronous = NORMAL;");

  // Initialize schema
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      service TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_submissions_status ON contact_submissions(status);
    CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON contact_submissions(created_at DESC);
  `);

  global.__dbInstance = db;
  return db;
}

export async function createSubmission(data: {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}): Promise<ContactSubmission> {
  if (isPostgresConfigured()) {
    const pool = getPgPool();
    await ensurePgSchema(pool);
    const id = crypto.randomUUID();
    const query = `
      INSERT INTO contact_submissions (id, name, email, company, service, message, status, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, 'new', NOW(), NOW())
      RETURNING id, name, email, company, service, message, status, created_at, updated_at
    `;
    const res = await pool.query(query, [
      id,
      data.name.trim(),
      data.email.trim().toLowerCase(),
      data.company ? data.company.trim() : null,
      data.service.trim(),
      data.message.trim(),
    ]);
    const row = res.rows[0];
    return {
      id: row.id,
      name: row.name,
      email: row.email,
      company: row.company,
      service: row.service,
      message: row.message,
      status: row.status,
      created_at: new Date(row.created_at).toISOString(),
      updated_at: new Date(row.updated_at).toISOString(),
    };
  }

  const db = getDatabase();
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  const stmt = db.prepare(`
    INSERT INTO contact_submissions (id, name, email, company, service, message, status, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, 'new', ?, ?)
  `);

  stmt.run(
    id,
    data.name.trim(),
    data.email.trim().toLowerCase(),
    data.company ? data.company.trim() : null,
    data.service.trim(),
    data.message.trim(),
    now,
    now
  );

  return {
    id,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    company: data.company ? data.company.trim() : null,
    service: data.service.trim(),
    message: data.message.trim(),
    status: "new",
    created_at: now,
    updated_at: now,
  };
}

export async function listSubmissions(options?: {
  status?: string;
  search?: string;
  limit?: number;
  offset?: number;
}): Promise<ContactSubmission[]> {
  const limit = options?.limit ?? 100;
  const offset = options?.offset ?? 0;

  if (isPostgresConfigured()) {
    const pool = getPgPool();
    await ensurePgSchema(pool);
    let query = "SELECT * FROM contact_submissions";
    const conditions: string[] = [];
    const params: unknown[] = [];
    let paramIdx = 1;

    if (options?.status && options.status !== "all") {
      conditions.push(`status = $${paramIdx++}`);
      params.push(options.status);
    }

    if (options?.search && options.search.trim() !== "") {
      const searchPattern = `%${options.search.trim().toLowerCase()}%`;
      conditions.push(
        `(LOWER(name) LIKE $${paramIdx} OR LOWER(email) LIKE $${paramIdx} OR LOWER(company) LIKE $${paramIdx} OR LOWER(service) LIKE $${paramIdx} OR LOWER(message) LIKE $${paramIdx})`
      );
      params.push(searchPattern);
      paramIdx++;
    }

    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(" AND ")}`;
    }

    query += ` ORDER BY created_at DESC LIMIT $${paramIdx++} OFFSET $${paramIdx++}`;
    params.push(limit, offset);

    const res = await pool.query(query, params);
    return res.rows.map((row) => ({
      ...row,
      created_at: new Date(row.created_at).toISOString(),
      updated_at: new Date(row.updated_at).toISOString(),
    }));
  }

  const db = getDatabase();
  let query = "SELECT * FROM contact_submissions";
  const conditions: string[] = [];
  const params: unknown[] = [];

  if (options?.status && options.status !== "all") {
    conditions.push("status = ?");
    params.push(options.status);
  }

  if (options?.search && options.search.trim() !== "") {
    const searchPattern = `%${options.search.trim().toLowerCase()}%`;
    conditions.push(
      "(LOWER(name) LIKE ? OR LOWER(email) LIKE ? OR LOWER(company) LIKE ? OR LOWER(service) LIKE ? OR LOWER(message) LIKE ?)"
    );
    params.push(searchPattern, searchPattern, searchPattern, searchPattern, searchPattern);
  }

  if (conditions.length > 0) {
    query += ` WHERE ${conditions.join(" AND ")}`;
  }

  query += ` ORDER BY created_at DESC LIMIT ? OFFSET ?`;
  params.push(limit, offset);

  const stmt = db.prepare(query);
  const rows = stmt.all(...params) as unknown as ContactSubmission[];
  return rows;
}

export async function getSubmissionById(id: string): Promise<ContactSubmission | null> {
  if (isPostgresConfigured()) {
    const pool = getPgPool();
    await ensurePgSchema(pool);
    const res = await pool.query("SELECT * FROM contact_submissions WHERE id = $1", [id]);
    if (res.rows.length === 0) return null;
    const row = res.rows[0];
    return {
      ...row,
      created_at: new Date(row.created_at).toISOString(),
      updated_at: new Date(row.updated_at).toISOString(),
    };
  }

  const db = getDatabase();
  const stmt = db.prepare("SELECT * FROM contact_submissions WHERE id = ?");
  const row = stmt.get(id) as unknown as ContactSubmission | undefined;
  return row || null;
}

export async function updateSubmissionStatus(
  id: string,
  status: "new" | "read" | "replied" | "archived"
): Promise<ContactSubmission | null> {
  if (isPostgresConfigured()) {
    const pool = getPgPool();
    await ensurePgSchema(pool);
    const res = await pool.query(
      "UPDATE contact_submissions SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *",
      [status, id]
    );
    if (res.rows.length === 0) return null;
    const row = res.rows[0];
    return {
      ...row,
      created_at: new Date(row.created_at).toISOString(),
      updated_at: new Date(row.updated_at).toISOString(),
    };
  }

  const db = getDatabase();
  const now = new Date().toISOString();
  const stmt = db.prepare(
    "UPDATE contact_submissions SET status = ?, updated_at = ? WHERE id = ?"
  );
  stmt.run(status, now, id);

  return getSubmissionById(id);
}

export async function deleteSubmission(id: string): Promise<boolean> {
  if (isPostgresConfigured()) {
    const pool = getPgPool();
    await ensurePgSchema(pool);
    await pool.query("DELETE FROM contact_submissions WHERE id = $1", [id]);
    return true;
  }

  const db = getDatabase();
  const stmt = db.prepare("DELETE FROM contact_submissions WHERE id = ?");
  stmt.run(id);
  return true;
}

export async function getSubmissionStats(): Promise<SubmissionStats> {
  if (isPostgresConfigured()) {
    const pool = getPgPool();
    await ensurePgSchema(pool);
    const [totalRes, newRes, readRes, repliedRes, archivedRes] = await Promise.all([
      pool.query("SELECT COUNT(*) as count FROM contact_submissions"),
      pool.query("SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'new'"),
      pool.query("SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'read'"),
      pool.query("SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'replied'"),
      pool.query("SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'archived'"),
    ]);

    return {
      total: Number(totalRes.rows[0]?.count || 0),
      new: Number(newRes.rows[0]?.count || 0),
      read: Number(readRes.rows[0]?.count || 0),
      replied: Number(repliedRes.rows[0]?.count || 0),
      archived: Number(archivedRes.rows[0]?.count || 0),
    };
  }

  const db = getDatabase();
  const totalStmt = db.prepare("SELECT COUNT(*) as count FROM contact_submissions");
  const newStmt = db.prepare("SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'new'");
  const readStmt = db.prepare("SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'read'");
  const repliedStmt = db.prepare("SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'replied'");
  const archivedStmt = db.prepare("SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'archived'");

  const total = ((totalStmt.get() as { count: number | bigint })?.count ?? 0);
  const newCount = ((newStmt.get() as { count: number | bigint })?.count ?? 0);
  const read = ((readStmt.get() as { count: number | bigint })?.count ?? 0);
  const replied = ((repliedStmt.get() as { count: number | bigint })?.count ?? 0);
  const archived = ((archivedStmt.get() as { count: number | bigint })?.count ?? 0);

  return {
    total: Number(total),
    new: Number(newCount),
    read: Number(read),
    replied: Number(replied),
    archived: Number(archived),
  };
}
