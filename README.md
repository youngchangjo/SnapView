# SnapView

Fast macOS image viewer for real photo culling work.

Current Version: `v0.9.18`

## Download

- Latest release: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- Install package: open the latest release page and download the matching `SnapView-<version>.dmg`

## Why SnapView

SnapView is built for the part after import: checking sharpness, comparing near-duplicates, rating selects, and moving through folders quickly without waiting for a catalog app.

- Fast folder and ZIP browsing
- Quick Check for quality diagnosis with reasons, not just EXIF fields
- Compare mode for picking the best frame from similar shots
- Duplicate workspace for exact-file cleanup
- Keyboard-first rating, pick, reject, and color-label workflow

## Typical Workflow

1. Open a folder, image, or ZIP archive.
2. Move quickly in Main, Grid, Filmstrip, or Manage view.
3. Mark keepers with rating, Pick, Reject, or color labels.
4. Open Quick Check or Compare when you need a closer call.
5. Use Duplicate mode to clean up exact duplicates.

## Views And Tools

- `Main View`: single-image browsing with zoom, fit, rotate, and overlay tools
- `Grid View`: thumbnail selection for fast triage
- `Filmstrip View`: main image plus strip for quick pass review
- `Manage View`: folder navigation, filters, and filmstrip in one workspace
- `Quick Check`: score, warnings, and supporting reasons
- `Compare`: side-by-side review and best-shot recommendation
- `Duplicate`: exact duplicate grouping and cleanup workflow

## Good Fit For

- photographers doing first-pass culling
- users who browse directly from folders instead of importing into a catalog first
- mixed libraries with JPG, HEIF/HIF, RAW, and ZIP archives
- keyboard-heavy review workflows

## Supported Formats

- Standard images: `jpg`, `jpeg`, `png`, `gif`, `bmp`, `webp`, `heic`, `heif`, `hif`, `tif`, `tiff`
- RAW: `arw`, `cr2`, `cr3`, `nef`, `nrw`, `dng`, `raf`, `orf`, `rw2`, `pef`, `srw`
- Container: `zip` for supported images inside archives
- Conditional: `avif`, `jxl` when macOS decoder support is available

## Install

1. Download the latest DMG from [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest).
2. Open `SnapView-<version>.dmg`.
3. Drag `SnapView.app` into `Applications`.
4. Launch SnapView from `Applications`.

## Requirements

- macOS `15.5` or later

## Security And Privacy

- Release builds are signed with Apple Developer ID.
- Release builds are notarized for standard macOS installation flow.
- SnapView works with files you open locally. It is designed around local browsing, review, and cleanup workflows.

## Notes

- ZIP browsing can be slower than normal folders because archive contents must be read before display.
- Conditional formats such as AVIF or JXL depend on macOS decoder availability.
- If Gatekeeper blocks the app on first launch, open it from `Applications` again after confirming in macOS security settings.

---

# SnapView

실사용 사진 선별 작업에 맞춘 macOS용 고속 이미지 뷰어입니다.

현재 버전: `v0.9.18`

## 다운로드

- 최신 릴리즈: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- 설치 파일: 최신 릴리즈 페이지에서 `SnapView-<version>.dmg`를 다운로드해 설치합니다

## 왜 SnapView인가요

SnapView는 사진을 가져온 뒤 실제로 하는 작업, 즉 빠르게 넘겨 보기, 초점 확인, 비슷한 컷 비교, 별점 선별, 중복 정리에 맞춰 설계되어 있습니다. 카탈로그를 먼저 만드는 방식보다 폴더 기반 검토 흐름에 더 가깝습니다.

- 폴더와 ZIP 이미지를 빠르게 탐색
- EXIF 나열이 아니라 점수와 근거를 보여주는 Quick Check
- 비슷한 컷에서 베스트샷을 고르기 위한 Compare
- 동일 파일 정리를 위한 Duplicate 워크스페이스
- 별점, Pick, Reject, 컬러 라벨 중심의 키보드 선별

## 대표 사용 흐름

1. 폴더, 이미지, ZIP 파일을 엽니다.
2. Main, Grid, Filmstrip, Manage 뷰를 오가며 빠르게 검토합니다.
3. 별점, Pick, Reject, 컬러 라벨로 선별합니다.
4. 애매한 컷은 Quick Check 또는 Compare로 판단합니다.
5. 마지막에 Duplicate 모드로 정확한 중복 파일을 정리합니다.

## 뷰와 도구

- `Main View`: 단일 이미지 중심 탐색, 확대, 맞춤, 회전, 오버레이
- `Grid View`: 다량 썸네일 선별
- `Filmstrip View`: 메인 이미지와 스트립 기반 빠른 검토
- `Manage View`: 폴더 탐색, 필터, 필름스트립을 함께 쓰는 관리 작업 공간
- `Quick Check`: 점수, 경고, 근거 기반 촬영 품질 진단
- `Compare`: 나란히 비교하며 베스트샷 선택
- `Duplicate`: 동일 파일 그룹 정리 워크플로우

## 이런 경우에 잘 맞습니다

- 대량 촬영본을 빠르게 1차 선별해야 할 때
- 카탈로그보다 폴더 기반 탐색을 선호할 때
- JPG, HEIF/HIF, RAW, ZIP이 섞인 라이브러리를 다룰 때
- 키보드 중심으로 빠르게 검토하고 싶을 때

## 지원 포맷

- 일반 이미지: `jpg`, `jpeg`, `png`, `gif`, `bmp`, `webp`, `heic`, `heif`, `hif`, `tif`, `tiff`
- RAW: `arw`, `cr2`, `cr3`, `nef`, `nrw`, `dng`, `raf`, `orf`, `rw2`, `pef`, `srw`
- 컨테이너: `zip` 내부 지원 이미지
- 조건부: `avif`, `jxl`은 macOS 디코더 지원 시 활성화

## 설치 방법

1. [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)에서 최신 DMG를 다운로드합니다.
2. `SnapView-<version>.dmg`를 엽니다.
3. `SnapView.app`을 `Applications`로 드래그합니다.
4. `Applications`에서 SnapView를 실행합니다.

## 시스템 요구사항

- macOS `15.5` 이상

## 보안 및 개인정보

- 릴리즈 빌드는 Apple Developer ID 서명 상태입니다.
- 릴리즈 빌드는 notarization을 거쳐 일반적인 macOS 설치 흐름을 따릅니다.
- SnapView는 사용자가 연 로컬 파일을 기준으로 탐색, 검토, 정리하는 워크플로우를 중심으로 동작합니다.

## 참고 사항

- ZIP 탐색은 일반 폴더보다 구조적으로 느릴 수 있습니다.
- AVIF, JXL 같은 조건부 포맷은 macOS 디코더 지원 여부에 따라 달라집니다.
- 첫 실행 시 Gatekeeper 경고가 나오면 macOS 보안 설정에서 허용 후 다시 실행해 주십시오.
