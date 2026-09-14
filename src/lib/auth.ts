import crypto from "node:crypto";
import { cookies } from "next/headers";

const SESSION_COOKIE_NAME = "devops_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecretKey(): string {
  return (
    process.env.AUTH_SECRET ||
    process.env.ADMIN_SESSION_SECRET ||
    "devops-engineering-default-secure-key-4912984128"
  );
}

export function signToken(payload: { email: string; timestamp: number }): string {
  const secret = getSecretKey();
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto.createHmac("sha256", secret).update(data).digest("base64url");
  return `${data}.${signature}`;
}

export function verifyToken(token: string): { email: string; timestamp: number } | null {
  try {
    const [data, signature] = token.split(".");
    if (!data || !signature) return null;

    const secret = getSecretKey();
    const expectedSignature = crypto.createHmac("sha256", secret).update(data).digest("base64url");

    const sigBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expectedSignature);

    if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(data, "base64url").toString("utf8")) as {
      email: string;
      timestamp: number;
    };

    // Check expiration (7 days)
    if (Date.now() - payload.timestamp > SESSION_MAX_AGE_SECONDS * 1000) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function verifyAdminCredentials(email: string, password: string): boolean {
  const configuredEmail = (process.env.ADMIN_EMAIL || "gautam@devops.local").trim().toLowerCase();
  const configuredPassword = process.env.ADMIN_PASSWORD || "admin12345";

  if (email.trim().toLowerCase() !== configuredEmail) {
    return false;
  }

  // Timing-safe password compare
  const p1 = Buffer.from(password);
  const p2 = Buffer.from(configuredPassword);

  if (p1.length !== p2.length) {
    // Constant time dummy compare to prevent timing leaks
    crypto.timingSafeEqual(p1, p1);
    return false;
  }

  return crypto.timingSafeEqual(p1, p2);
}

export async function setAdminSession(email: string) {
  const cookieStore = await cookies();
  const token = signToken({ email, timestamp: Date.now() });

  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function getAdminSession(): Promise<{ email: string } | null> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(SESSION_COOKIE_NAME);
  if (!cookie?.value) return null;

  const payload = verifyToken(cookie.value);
  if (!payload) return null;

  return { email: payload.email };
}
