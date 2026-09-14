# Gautam Dev — DevOps & Cloud Engineering Platform

Production-grade personal DevOps & Cloud Engineering website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and PostgreSQL.

---

## 1. Project Overview & Architecture

The website communicates independent DevOps and Cloud engineering services with a modern, dark startup aesthetic. It features an interactive **"From Code to Production"** CI/CD pipeline showcase, genuine **Certified Kubernetes Administrator (CKA)** Linux Foundation verification, authentic technology telemetry, and a PostgreSQL-backed client inquiry portal.

```
Internet (Port 80 / 443)
       │
       ▼
Nginx Reverse Proxy (SSL / TLS 1.3 Termination)
       │
       ▼ (127.0.0.1:3000)
Next.js Application Container (Docker, Non-Root User)
       │
       ▼ (Private Internal Network)
PostgreSQL Database Container (Persistent Volume)
```

---

## 2. Technology Stack

- **Framework**: Next.js 16 (App Router, Webpack build mode)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion (subtle, purposeful scroll telemetry)
- **Icons**: Lucide React & Simple Icons (authentic brand logos)
- **Database**: PostgreSQL 16 (production) with built-in SQLite fallback (local offline development)
- **Containerization**: Multi-stage Alpine Docker & Docker Compose
- **Web Server / Proxy**: Nginx with Let's Encrypt SSL/TLS

---

## 3. Local Development

### Prerequisites
- Node.js 20+ (Node 20 or 22 LTS recommended)
- npm

### Installation & Run
```bash
# 1. Clone repository
git clone https://github.com/gautamdevgrover/mywebsite.git
cd mywebsite

# 2. Install dependencies
npm install

# 3. Create local environment file
cp .env.example .env.local

# 4. Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

> [!NOTE]
> In local development, if `DATABASE_URL` is omitted, the application automatically uses a local persistent SQLite database (`./data/devops.db`). No external database daemon is needed to test locally.

---

## 4. Environment Variables

All environment configuration should be placed in `.env` (on production server) or `.env.local` (local machine). Never commit `.env` files into Git.

| Variable | Description | Example |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://<db_user>:<db_pass>@<db_host>:5432/<db_name>` |
| `ADMIN_EMAIL` | Email used to log in to `/admin` portal | `admin@gautamdevgrover.online` |
| `ADMIN_PASSWORD` | Password used for admin authentication | Strong production password |
| `AUTH_SECRET` | 32+ character key for session HMAC signing | `openssl rand -base64 32` |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for metadata & sitemaps | `https://gautamdevgrover.online` |
| `CONTACT_RATE_LIMIT_PER_HOUR` | Submissions allowed per hour per IP (optional) | `5` |

---

## 5. Build & Test Commands

```bash
# Run ESLint validation
npm run lint

# Compile production build
npm run build

# Start production server locally
npm run start
```

---

## 6. Docker & Production Deployment (Server)

### 1. Server Setup
Clone the repository on your Linux server (recommended path: `/opt/gautamdev`):

```bash
sudo mkdir -p /opt/gautamdev
sudo chown -R $USER:$USER /opt/gautamdev
git clone https://github.com/gautamdevgrover/mywebsite.git /opt/gautamdev
cd /opt/gautamdev
```

### 2. Configure Production `.env`
Create your production `.env` file from the template:

```bash
cp .env.example .env
nano .env
```

Generate a secure authentication secret:
```bash
openssl rand -base64 32
```
And populate `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `AUTH_SECRET`.

### 3. Deploy via Docker Compose
Run the automated deployment script:
```bash
./deploy.sh
```

Or run Docker Compose manually:
```bash
# Build and start services in background
docker compose up -d --build

# Verify container status
docker compose ps

# Inspect logs
docker compose logs -f app
```

---

## 7. Nginx Reverse Proxy & HTTPS Configuration

### 1. Copy Nginx Configuration
```bash
sudo cp nginx/gautamdev.conf /etc/nginx/sites-available/gautamdevgrover.online
sudo ln -s /etc/nginx/sites-available/gautamdevgrover.online /etc/nginx/sites-enabled/

# Test Nginx syntax
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### 2. Configure SSL via Certbot (Let's Encrypt)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d gautamdevgrover.online -d www.gautamdevgrover.online
```

---

## 8. Admin Portal & Inquiries

- **Admin URL**: `https://gautamdevgrover.online/admin/login`
- **Authentication**: HTTP-only signed session cookie with timing-safe credential verification.
- **Features**:
  - View all client project submissions and inquiries
  - Filter inquiries by status (`new`, `read`, `replied`, `archived`)
  - Full-text search across companies, names, and requirements
  - Update enquiry status with 1-click controls
  - Real-time SLA response metrics

---

## 9. Health & Telemetry Check

The application exposes a zero-leakage health check endpoint:

```bash
curl http://127.0.0.1:3000/api/health
```

Response:
```json
{
  "status": "ok",
  "service": "gautamdev-platform",
  "timestamp": "2026-09-14T12:00:00.000Z"
}
```

---

## 10. License

&copy; 2026 Gautam Dev. All rights reserved.
