#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WEBSITE_DIR="$ROOT_DIR/website"

PROJECT_NAME="${SNAPVIEW_CF_PAGES_PROJECT:-}"
ENVIRONMENT="production"
BRANCH=""
DRY_RUN="false"

usage() {
  cat <<'USAGE'
Usage:
  scripts/publish_website_release.sh --project <cloudflare_pages_project> [options]

Options:
  --project <name>          Cloudflare Pages project name
  --env <production|preview> Deploy environment (default: production)
  --branch <name>           Git branch name used by Pages deployment
  --dry-run                 Print plan only
  -h, --help                Show help

Examples:
  scripts/publish_website_release.sh --project snapview-site
  scripts/publish_website_release.sh --project snapview-site --env preview --branch codex/ui-copy
  scripts/publish_website_release.sh --project snapview-site --dry-run

Required environment variables for real deploy:
  CLOUDFLARE_API_TOKEN
  CLOUDFLARE_ACCOUNT_ID
USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --project)
      PROJECT_NAME="${2:-}"; shift 2 ;;
    --env)
      ENVIRONMENT="${2:-}"; shift 2 ;;
    --branch)
      BRANCH="${2:-}"; shift 2 ;;
    --dry-run)
      DRY_RUN="true"; shift ;;
    -h|--help)
      usage; exit 0 ;;
    *)
      echo "❌ Unknown argument: $1"
      usage
      exit 1 ;;
  esac
done

if [[ -z "$PROJECT_NAME" ]]; then
  echo "❌ Missing --project (or SNAPVIEW_CF_PAGES_PROJECT)."
  exit 1
fi

if [[ "$ENVIRONMENT" != "production" && "$ENVIRONMENT" != "preview" ]]; then
  echo "❌ --env must be one of: production, preview"
  exit 1
fi

if [[ ! -d "$WEBSITE_DIR" ]]; then
  echo "❌ Website directory not found: $WEBSITE_DIR"
  exit 1
fi

if [[ ! -f "$WEBSITE_DIR/index.html" ]]; then
  echo "❌ Missing website/index.html"
  exit 1
fi

if [[ -z "$BRANCH" ]]; then
  if [[ "$ENVIRONMENT" == "production" ]]; then
    BRANCH="main"
  else
    BRANCH="$(git -C "$ROOT_DIR" rev-parse --abbrev-ref HEAD 2>/dev/null || echo preview)"
  fi
fi

echo "=== Website Release Plan ==="
echo "Project     : $PROJECT_NAME"
echo "Environment : $ENVIRONMENT"
echo "Branch      : $BRANCH"
echo "Directory   : $WEBSITE_DIR"
echo "Dry Run     : $DRY_RUN"
echo

if [[ "$DRY_RUN" == "true" ]]; then
  echo "🔎 Dry run only. No network changes."
  exit 0
fi

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "❌ CLOUDFLARE_API_TOKEN is required."
  exit 1
fi

if [[ -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
  echo "❌ CLOUDFLARE_ACCOUNT_ID is required."
  exit 1
fi

if ! command -v npx >/dev/null 2>&1; then
  echo "❌ npx is required (Node.js)."
  exit 1
fi

npx wrangler@4 pages deploy "$WEBSITE_DIR" \
  --project-name "$PROJECT_NAME" \
  --branch "$BRANCH"

echo "✅ Website deploy completed."
