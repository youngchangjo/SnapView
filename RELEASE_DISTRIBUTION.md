# Release Distribution (GitHub Assets Only)

소스코드 공개 없이 GitHub Releases에 DMG 파일만 배포하는 운영 가이드입니다.

## 준비

1. GitHub repo 생성: `youngchangjo/SnapView`
2. GitHub CLI 로그인:
   - `gh auth login`
3. 로컬 DMG 준비:
   - 예: `../dist/SnapView-0.9.10.dmg`

## 자동 퍼블리시

```bash
scripts/publish_github_release.sh --version 0.9.10
```

기본 동작:
- Release tag `v0.9.10` 생성/업데이트
- DMG asset 업로드
- 공개 repo의 `README.md`를 템플릿 기준으로 갱신

## 주요 옵션

```bash
# 다른 저장소로 배포
scripts/publish_github_release.sh --version 0.9.10 --repo owner/repo

# DMG 경로 지정
scripts/publish_github_release.sh --version 0.9.10 --dmg /path/SnapView-0.9.10.dmg

# README 업데이트 없이 릴리즈 파일만
scripts/publish_github_release.sh --version 0.9.10 --skip-readme

# 실제 업로드 없이 실행 계획 확인
scripts/publish_github_release.sh --version 0.9.10 --dry-run
```

## 홈페이지 링크 권장

- 고정 버전: `https://github.com/youngchangjo/SnapView/releases/download/vX.Y.Z/SnapView-X.Y.Z.dmg`
- 최신 버전 유도: `https://github.com/youngchangjo/SnapView/releases/latest`

---

# Website Release (Cloudflare Pages)

앱 DMG 릴리즈와 별개로, 웹사이트(`website/`)는 Cloudflare Pages로 분리 배포합니다.

## 1) GitHub Actions 자동 배포

추가된 워크플로우:

- `.github/workflows/website_release.yml`

동작:

- `main`/`master`에 `website/**` 변경이 push되면 자동 배포
- 수동 실행(`workflow_dispatch`)으로 preview/production 배포 가능

필수 GitHub Secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CF_PAGES_PROJECT_NAME` (예: `snapview-site`)

## 2) 로컬 수동 배포

```bash
scripts/publish_website_release.sh --project <cloudflare_pages_project>
```

예시:

```bash
# 프로덕션 배포 (기본 branch=main)
scripts/publish_website_release.sh --project snapview-site

# 프리뷰 배포
scripts/publish_website_release.sh --project snapview-site --env preview --branch codex/ui-copy
```

필수 환경변수:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## 운영 원칙

- **앱 배포**: GitHub Releases (`scripts/publish_github_release.sh`)
- **웹 배포**: Cloudflare Pages (`website_release.yml` 또는 `scripts/publish_website_release.sh`)

서로 독립 배포로 운영합니다.
