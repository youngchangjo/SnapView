# SnapView Website Release Runbook

Last updated: 2026-03-03  
Scope: `/Users/youngchangjo/Development/SnapViewWebsite` repository website release

## 1. 배포 구조(현재 기준)

- 웹 소스 경로: `website/`
- Git 원격: `origin -> git@github.com:youngchangjo/SnapView.git`
- 배포 방식: Cloudflare Pages Git Integration
- 프로덕션 URL: `https://snapview.snapworkslab.com/`
- 배포 트리거: `origin/main`에 push된 웹 변경사항

중요: 이 저장소는 과거에 `origin/website` 브랜치를 쓰던 흔적이 있으므로, 릴리즈 전에 반드시 `main -> origin/main` 추적 상태를 확인한다.

---

## 2. 릴리즈 전 필수 점검(Preflight)

### 2.1 기본 상태 점검

```bash
cd /Users/youngchangjo/Development/SnapViewWebsite
git remote -v
git switch main
git fetch origin
git status --short --branch
```

정상 기준:

- `## main...origin/main` 형태
- `rebase in progress` 문구가 없어야 함
- 릴리즈 대상 외 잡파일(`.DS_Store` 등)만 untracked여야 함

### 2.2 upstream 고정 확인

```bash
git config --get branch.main.merge
```

정상 값:

```text
refs/heads/main
```

다르면 즉시 수정:

```bash
git branch --set-upstream-to=origin/main main
```

### 2.3 리베이스/머지 진행 중이면 릴리즈 중단

```bash
git status
```

아래 문구가 보이면 바로 중단:

- `interactive rebase in progress`
- `You are currently rebasing`
- `Unmerged paths`

이 상태에서 릴리즈 커밋/푸시를 진행하면 충돌 정리 과정에서 웹 수정본이 유실될 수 있다.

### 2.4 안전 브랜치 백업(필수)

```bash
TS=$(date +%Y%m%d-%H%M%S)
git branch "backup/web-release-${TS}"
```

---

## 3. 표준 릴리즈 절차(Happy Path)

### 3.1 최신 main 동기화

```bash
git pull --rebase origin main
```

### 3.2 변경 범위 확인

```bash
git diff --name-only
```

릴리즈 기준:

- 웹 릴리즈는 원칙적으로 `website/` 하위만 변경
- `index.html`, `manual.html`, `assets/` 같은 루트 경로 파일이 잡히면 즉시 중단 후 원인 확인

### 3.3 로컬 확인(권장)

```bash
cd /Users/youngchangjo/Development/SnapViewWebsite/website
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080` 확인 후 종료.

### 3.4 커밋

```bash
cd /Users/youngchangjo/Development/SnapViewWebsite
git add website/index.html website/manual.html website/assets/images/*.png
git commit -m "website: <변경 요약>"
```

### 3.5 푸시(배포 트리거)

```bash
git push origin main
```

`[rejected] (fetch first)` 발생 시:

```bash
git pull --rebase origin main
git push origin main
```

---

## 4. 배포 확인(반드시 실행)

배포는 보통 수십 초 내 반영되지만 최대 1~3분까지 대기 가능.

### 4.1 핵심 문구 확인

```bash
for i in 1 2 3 4 5; do
  echo "--- check $i"
  curl -s https://snapview.snapworkslab.com/ | \
    rg -n "Find & Clean Exact Duplicates|duplicatemode.png|Smart Tools to Assist Your Judgment" -i || true
  sleep 10
done
```

### 4.2 주요 에셋 확인

```bash
curl -I https://snapview.snapworkslab.com/assets/images/duplicatemode.png
curl -I https://snapview.snapworkslab.com/manual
```

### 4.3 로컬/원격 커밋 일치 확인

```bash
git rev-parse HEAD
git rev-parse origin/main
```

두 SHA가 동일해야 정상 릴리즈 완료.

---

## 5. 재발 방지 규칙(이번 사고 기반)

1. 작업 트리가 dirty인 상태에서 `rebase`, `pull --rebase`를 실행하지 않는다.
2. 충돌 중 `git rebase --skip`를 의미 확인 없이 사용하지 않는다.
3. 웹 릴리즈에서 루트 경로(`index.html`, `assets/...`) 충돌이 뜨면 즉시 중단하고 경로 매핑을 먼저 확인한다.
4. `main`에 `--force` push하지 않는다.
5. 릴리즈 시작 전에 백업 브랜치를 항상 만든다.
6. 배포 확인(`curl + rg`) 전에 완료 선언하지 않는다.

---

## 6. 사고 대응 절차(변경 유실/되돌림 발생 시)

### 6.1 즉시 멈추고 상태 보존

```bash
git status
git branch "backup/recovery-$(date +%Y%m%d-%H%M%S)"
```

### 6.2 히스토리/유실 객체 탐색

```bash
git reflog --date=iso -n 50
git fsck --lost-found --no-reflogs
```

### 6.3 유실 텍스트 파일 복구

```bash
git cat-file -p <blob_sha> > website/index.html
git cat-file -p <blob_sha> > website/manual.html
```

### 6.4 유실 이미지 복구

```bash
git cat-file -p <blob_sha> > website/assets/images/<file>.png
```

복구 후:

```bash
git status --short
git add website/...
git commit -m "website: recover lost changes"
git push origin main
```

---

## 7. 문제 해결 가이드

### 7.1 푸시 거절(fetch first)

원인: 원격 `main`이 앞서 있음  
해결:

```bash
git pull --rebase origin main
git push origin main
```

### 7.2 사이트에서 변경이 안 보임

1. 30~90초 대기 후 재확인
2. `curl -s`로 HTML 원문 확인(브라우저 캐시 배제)
3. Cloudflare Email Obfuscation 스크립트 삽입으로 일부 diff가 생길 수 있으니 핵심 문구 위주로 확인

### 7.3 추적 브랜치가 `origin/website`로 잡힘

```bash
git branch --set-upstream-to=origin/main main
git status --short --branch
```

---

## 8. 릴리즈 체크리스트(복붙용)

```text
[ ] main 브랜치인지 확인
[ ] rebase/merge 진행 중 아님 확인
[ ] upstream = origin/main 확인
[ ] backup/web-release-YYYYMMDD-HHMMSS 브랜치 생성
[ ] 변경 파일이 website/ 하위인지 확인
[ ] commit 생성
[ ] origin/main push 성공
[ ] production URL에서 핵심 문구/이미지 반영 확인
[ ] HEAD == origin/main SHA 확인
```
