# SnapView Website Release Runbook

Last verified: 2026-04-12
Scope: `/Users/youngchangjo/Development/SnapView-site`

## 1. Current deployment shape

- Website source lives under `website/`
- Git remote: `origin -> git@github.com:youngchangjo/SnapView.git`
- Production deploy target: `https://snapview.snapworkslab.com/`
- Deployment trigger: push to `origin/main`
- Deployment provider: Cloudflare Pages Git integration

Important:

- `origin/website` still exists, but it is a legacy/static snapshot branch, not the active production trigger.
- `old-origin` is not a valid release target anymore.
- For website releases, treat `main -> origin/main` as the only authoritative path unless the deploy pipeline is explicitly changed.
- Apex-domain behavior for `snapworkslab.com` is maintained outside this repo. Use [CLOUDFLARE_APEX_REDIRECT_GUIDE.md](/Users/youngchangjo/Development/SnapView-site/CLOUDFLARE_APEX_REDIRECT_GUIDE.md) when updating the separate Cloudflare Pages root-domain project.

## 2. Preflight

Run from repo root:

```bash
cd /Users/youngchangjo/Development/SnapView-site
git switch main
git fetch origin
git status --short --branch
git config --get branch.main.merge
git status
```

Expected:

- branch is `main`
- upstream is `refs/heads/main`
- no active rebase or merge
- no unmerged paths

If upstream is wrong:

```bash
git branch --set-upstream-to=origin/main main
```

## 3. Safety backup

Always create a backup branch before release work:

```bash
TS=$(date +%Y%m%d-%H%M%S)
git branch "backup/web-release-${TS}"
```

## 4. Scope check

Before commit, confirm the release only includes intended website files:

```bash
git status --short
git diff --name-only
git diff --stat
```

Normal website release scope:

- `website/index.html`
- `website/manual.html`
- `website/release_notes.html`
- `website/styles.css`
- `website/script.js`
- `website/assets/...`
- `website/appcast.xml` when relevant

Do not accidentally include unrelated root-level files unless the release really needs them.

Examples of files to exclude from a normal website release:

- `.gitignore`
- `WEBSITE_RELEASE_RUNBOOK.md`
- `CLOUDFLARE_APEX_REDIRECT_GUIDE.md`
- helper scripts like `parse_and_update.py`
- unrelated app or docs changes outside `website/`

## 5. Local smoke check

Serve the website locally:

```bash
python3 -m http.server 8080 --directory website
```

Then, in another shell:

```bash
curl -s http://127.0.0.1:8080/ | head
curl -s http://127.0.0.1:8080/manual.html | rg -n "KEY_PHRASE_1|KEY_PHRASE_2|KEY_PHRASE_3"
curl -s http://127.0.0.1:8080/release_notes.html | rg -n "KEY_PHRASE_1|KEY_PHRASE_2|KEY_PHRASE_3"
```

Use 2-4 phrases that were introduced by the current release.

Example:

```bash
curl -s http://127.0.0.1:8080/manual.html | rg -n "Finder 태그|Same Photo|Shift \+ Enter|v0\.10\.0"
curl -s http://127.0.0.1:8080/release_notes.html | rg -n "v0\.10\.2|animated GIF|animated WebP|Release Notes"
```

Stop the local server after the check.

## 6. Commit

Stage only the intended files:

```bash
git add website/manual.html
```

Or for broader website releases:

```bash
git add website/index.html website/manual.html website/release_notes.html website/styles.css website/script.js website/assets
```

Commit using the repository Lore protocol. Example:

```text
Document the public manual for the current SnapView workflow

The website manual now reflects the shipped duplicate-review, slideshow,
Finder tag, and Lightroom handoff behavior so the public docs match the
actual app experience.

Constraint: Cloudflare Pages deploys from origin/main, so the release commit stays scoped to website content
Rejected: Include unrelated root cleanup | outside this website release scope
Confidence: high
Scope-risk: narrow
Reversibility: clean
Directive: Keep website release commits limited to website/ files unless the deployment pipeline changes
Tested: Local http.server and curl smoke check
Not-tested: Full browser visual QA
```

## 7. Sync with latest main

If local `main` is behind remote `main`, rebase before push:

```bash
git pull --rebase --autostash origin main
```

This is the preferred non-interactive path when unrelated local modifications still exist outside the staged release scope.

If rebase reports conflicts:

- stop
- inspect conflicted files
- do not use `--skip` blindly
- resolve only after confirming the path mapping is correct

## 8. Push and trigger deploy

```bash
git push origin main
```

Successful push to `origin/main` triggers Cloudflare Pages production deployment.

If push is rejected with `fetch first`:

```bash
git pull --rebase --autostash origin main
git push origin main
```

This happened in a real release on 2026-04-12 and rebasing onto the new remote `main` was the correct recovery path.

## 9. Production verification

First confirm local and remote commit alignment:

```bash
git rev-parse HEAD
git rev-parse origin/main
```

Both SHAs must match.

Then poll production until new content appears.

For manual-only releases, checking `/manual` is enough:

```bash
for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  echo "--- check $i"
  HTML=$(curl -sL https://snapview.snapworkslab.com/manual || true)
  printf '%s' "$HTML" | rg -n "KEY_PHRASE_1|KEY_PHRASE_2|KEY_PHRASE_3" && break
  sleep 10
done
```

For homepage or release-notes releases, verify both the homepage and the release notes page together:

```bash
for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  echo "--- check $i"
  HOME=$(curl -sL https://snapview.snapworkslab.com/ || true)
  NOTES=$(curl -sL https://snapview.snapworkslab.com/release_notes.html || true)
  if printf '%s' "$HOME" | rg -q "release_notes\.html|지원 사양 및 기능|Specifications & Features" && \
     printf '%s' "$NOTES" | rg -q "v0\.10\.2|animated GIF|Release Notes"; then
    printf '%s\n' "$HOME" | rg -n "release_notes\.html|지원 사양 및 기능|Specifications & Features"
    printf '\n---\n'
    printf '%s\n' "$NOTES" | rg -n "v0\.10\.2|animated GIF|Release Notes"
    break
  fi
  sleep 10
done
```

Manual-release example:

```bash
for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  echo "--- check $i"
  HTML=$(curl -sL https://snapview.snapworkslab.com/manual || true)
  printf '%s' "$HTML" | rg -n "Finder 태그|Same Photo|Shift \+ Enter|v0\.10\.0" && break
  sleep 10
done
```

Optional asset check:

```bash
curl -I https://snapview.snapworkslab.com/
curl -I https://snapview.snapworkslab.com/manual
curl -I https://snapview.snapworkslab.com/release_notes.html
```

## 10. Normal release flow summary

```bash
cd /Users/youngchangjo/Development/SnapView-site
git switch main
git fetch origin
git branch "backup/web-release-$(date +%Y%m%d-%H%M%S)"
git status --short --branch
git add website/...
git commit
git pull --rebase --autostash origin main
git push origin main
git rev-parse HEAD
git rev-parse origin/main
```

Then verify production with `curl` plus fresh release phrases.

Recent verified example:

- 2026-04-10: manual-only release
- 2026-04-12: homepage + manual nav + new `release_notes.html` page

## 11. Recovery notes

### Restore a deleted tracked website file from `HEAD`

```bash
git restore --source=HEAD -- website/path/to/file
```

Example:

```bash
git restore --source=HEAD -- website/assets/images/snapview-icon.png
```

### Inspect history for a website file

```bash
git log --oneline -- website/path/to/file
git show <commit>:website/path/to/file | head
```

### Preserve the current state before risky recovery work

```bash
git branch "backup/recovery-$(date +%Y%m%d-%H%M%S)"
```

## 12. Do not do this

- Do not push website changes to `origin/website` expecting production deploy.
- Do not assume `old-origin` is valid.
- Do not include unrelated root files in a normal website release.
- Do not include `WEBSITE_RELEASE_RUNBOOK.md` in a normal website release commit unless you intentionally want to ship runbook changes in that same commit.
- Do not run `git rebase --skip` without understanding what is being skipped.
- Do not use force-push on `main` for website releases.
- Do not declare release complete before production content is verified from the live URL.

## 13. Quick checklist

```text
[ ] On main
[ ] origin/main is the upstream
[ ] No rebase/merge in progress
[ ] Backup branch created
[ ] Only intended website files staged
[ ] Local smoke check passed
[ ] Commit created
[ ] pull --rebase --autostash origin main completed cleanly
[ ] push to origin main succeeded
[ ] HEAD == origin/main
[ ] Production URL shows new content
```
