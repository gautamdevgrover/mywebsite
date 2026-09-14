#!/usr/bin/env bash
# ==============================================================================
# GAUTAM DEV - PRODUCTION DEPLOYMENT SCRIPT
# Safe, non-destructive deployment workflow for Linux server
# ==============================================================================

set -euo pipefail

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${APP_DIR}"

echo "========================================================"
echo " Starting Gautam Dev Production Deployment"
echo " Time: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
echo " Directory: ${APP_DIR}"
echo "========================================================"

# 1. Verify Environment File Exists
if [ ! -f .env ]; then
  echo "[-] ERROR: Production .env file not found in ${APP_DIR}!"
  echo "    Please create .env using .env.example as a template before running deploy.sh."
  exit 1
fi
echo "[+] .env configuration detected."

# 2. Check Git Branch and Pull Latest Code
if [ -d .git ]; then
  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  echo "[+] Current Git branch: ${CURRENT_BRANCH}"
  echo "[+] Pulling latest changes from origin/${CURRENT_BRANCH}..."
  git pull origin "${CURRENT_BRANCH}"
else
  echo "[!] Notice: Not a git checkout, skipping git pull."
fi

# 3. Build Production Docker Images
echo "[+] Building application Docker images..."
docker compose build --no-cache app

# 4. Start Containers in Background
echo "[+] Starting Docker Compose services (PostgreSQL & Next.js App)..."
docker compose up -d

# 5. Wait and Verify Health Check
echo "[+] Waiting for application health check to pass..."
MAX_RETRIES=20
COUNT=0
HEALTHY=false

while [ $COUNT -lt $MAX_RETRIES ]; do
  HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/api/health || echo "000")
  if [ "${HTTP_STATUS}" = "200" ]; then
    HEALTHY=true
    break
  fi
  echo "    Checking http://127.0.0.1:3000/api/health (attempt $((COUNT + 1))/${MAX_RETRIES}, HTTP: ${HTTP_STATUS})..."
  sleep 3
  COUNT=$((COUNT + 1))
done

if [ "${HEALTHY}" = true ]; then
  echo "========================================================"
  echo "[+] DEPLOYMENT SUCCESSFUL!"
  echo "[+] Application is healthy and listening on 127.0.0.1:3000"
  echo "[+] PostgreSQL container is active and persistent"
  echo "========================================================"
else
  echo "[-] WARNING: Health check timed out after $((MAX_RETRIES * 3)) seconds."
  echo "    Inspect container logs with: docker compose logs app"
  exit 1
fi
