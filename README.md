<a id="english"></a>

<p align="center">
  <img src="https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-icon.png" alt="SnapView app icon" width="128">
</p>

# SnapView

Fast macOS image viewer for real photo culling work.

Current Version: `v1.8.0`


Language: [🇺🇸 English](#english) | [🇰🇷 한국어](#korean)

Release Notes: [Public Release Notes](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) | [GitHub Releases](https://github.com/youngchangjo/SnapView/releases)

Official Website: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

Mac App Store: [SnapView on the App Store](https://apps.apple.com/us/app/snapview-fast-image-viewer/id6762974261)

## Download

- Latest release: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- Install package: open the latest release page and download `SnapView-1.8.0.dmg`
- Official website: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

## Screenshots

![SnapView overview](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/hero.png)

| Main View | Grid View |
| --- | --- |
| ![SnapView Main View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/web_mainview.png) | ![SnapView Grid View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/web_gridview.png) |

| Filmstrip View | Manage View |
| --- | --- |
| ![SnapView Filmstrip View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/web_filmstrip.png) | ![SnapView Manage View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/web_managemode.png) |

| Quick Check | Compare Mode |
| --- | --- |
| ![SnapView Quick Check](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/quickcheck.png) | ![SnapView Compare Mode](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/comparemode.png) |

| Duplicate Mode |
| --- |
| ![SnapView Duplicate Mode](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/duplicatemode.png) |

Detailed release notes from `v0.10.0` onward are available in the separate [Public Release Notes](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) document.

## Why SnapView

SnapView is built for the part after import: checking sharpness, comparing near-duplicates, rating selects, and moving through folders quickly without waiting for a catalog app.

The key idea is simple: do the fastest first-pass cull in SnapView, then carry the result forward instead of starting over somewhere else.

- Fast folder and ZIP browsing
- Quick Check for quality diagnosis with reasons, not just EXIF fields
- Compare mode for picking the best frame from similar shots
- Duplicate workspace for exact-file cleanup
- Keyboard-first rating, pick, reject, and Finder tag workflow
- Lightroom-style XMP interoperability for rating, Pick, and Reject
- Finder tag interoperability so file and folder status remain visible outside the app
- Decoding modes that let you choose between speed, balanced review, and quality-first inspection

## Typical Workflow

1. Open a folder, image, or ZIP archive.
2. Move quickly in Main, Grid, Filmstrip, or Manage view.
3. Mark keepers with rating, Pick, Reject, or color labels.
4. Open Quick Check or Compare when you need a closer call.
5. Continue in Lightroom with XMP-backed ratings and flags, or keep organizing in Finder with color labels.
6. Use Duplicate mode to clean up exact duplicates.

## Views And Tools

- `Main View`: single-image browsing with zoom, fit, rotate, and overlay tools
- `Grid View`: thumbnail selection for fast triage
- `Filmstrip View`: main image plus strip for quick pass review
- `Manage View`: folder navigation, filters, and filmstrip in one workspace
- `Quick Check`: score, warnings, and supporting reasons, plus histogram and detailed EXIF in one review set
- `Compare`: side-by-side review and best-shot recommendation
- `Duplicate`: exact duplicate grouping and cleanup workflow
- `Decoding Modes`: speed-first, balanced, and quality-first viewing behavior

## Good Fit For

- photographers doing first-pass culling
- users who browse directly from folders instead of importing into a catalog first
- mixed libraries with JPG, HEIF/HIF, RAW, and ZIP archives
- keyboard-heavy review workflows
- Lightroom users who want a faster culling stage before editing
- macOS users who want color labels to stay visible in Finder after review

## Supported Formats

- Standard images: `jpg`, `jpeg`, `png`, `gif`, `bmp`, `webp`, `heic`, `heif`, `hif`, `tif`, `tiff`
- RAW: `arw`, `cr2`, `cr3`, `nef`, `nrw`, `dng`, `raf`, `orf`, `rw2`, `pef`, `srw`
- Video: `mp4`, `mov`, `m4v` from v1.5.0
- Container: `zip` for supported images inside archives
- Conditional: `avif`, `jxl` when macOS decoder support is available

## Install

1. Download the latest DMG from [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest).
2. Open `SnapView-1.8.0.dmg`.
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
- ZIP items are not normal filesystem files, so some save/interoperability features are limited there.
- Animated `gif` and `webp` play in Main View only. Other views currently show a still first frame.
- Finder interoperability is centered on color labels.
- Lightroom interoperability is centered on XMP sidecars for rating, Pick, and Reject.
- Conditional formats such as AVIF or JXL depend on macOS decoder availability.
- App UI languages: Korean, English, Japanese, Simplified Chinese, Traditional Chinese, Spanish, French, German, Portuguese (Brazil), Italian, Dutch, Turkish, Polish, Swedish.
- App Store metadata also covers Indonesian, Malay, Thai, Vietnamese, Danish, Norwegian, Finnish, Czech, Hungarian, Romanian, and Greek.
- Release candidates are validated in both lanes (DMG Fast + Mac App Store Stable) before shipment.
- DMG releases are shipped as a single universal download. Do not publish a separate Intel-only DMG or standalone x86_64 app asset.
- If Gatekeeper blocks the app on first launch, open it from `Applications` again after confirming in macOS security settings.

---

<a id="korean"></a>

# SnapView

실사용 사진 선별 작업에 맞춘 macOS용 고속 이미지 뷰어입니다.

현재 버전: `v1.8.0`


언어: [🇺🇸 English](#english) | [🇰🇷 한국어](#korean)

릴리즈 노트: [공개 릴리즈 노트](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) | [GitHub Releases](https://github.com/youngchangjo/SnapView/releases)

공식 홈페이지: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

Mac App Store: [App Store에서 SnapView 보기](https://apps.apple.com/us/app/snapview-fast-image-viewer/id6762974261)

## 다운로드

- 최신 릴리즈: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- 설치 파일: 최신 릴리즈 페이지에서 `SnapView-1.8.0.dmg`를 다운로드해 설치합니다
- 공식 사이트: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

스크린샷은 위 `Screenshots` 섹션에서 바로 확인할 수 있습니다.

`v0.10.0`부터의 상세 변경 이력은 별도 문서인 [공개 릴리즈 노트](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md)에서 확인할 수 있습니다.

## 왜 SnapView인가요

SnapView는 사진을 가져온 뒤 실제로 하는 작업, 즉 빠르게 넘겨 보기, 초점 확인, 비슷한 컷 비교, 별점 선별, 중복 정리에 맞춰 설계되어 있습니다. 카탈로그를 먼저 만드는 방식보다 폴더 기반 검토 흐름에 더 가깝습니다.

핵심은 간단합니다. 가장 시간이 많이 드는 1차 선별은 SnapView에서 빠르게 끝내고, 그 결과를 Lightroom이나 Finder에서 그대로 이어서 쓰는 것입니다.

- 폴더와 ZIP 이미지를 빠르게 탐색
- EXIF 나열이 아니라 점수와 근거를 보여주는 Quick Check
- 비슷한 컷에서 베스트샷을 고르기 위한 Compare
- 동일 파일 정리를 위한 Duplicate 워크스페이스
- 별점, Pick, Reject, Finder 태그 중심의 키보드 선별
- Lightroom 스타일 XMP 연동으로 별점, Pick, Reject 결과를 그대로 이어가기
- Finder 태그 연동으로 macOS 파일/폴더 정리 단계까지 상태 유지
- 속도 우선 / 보통 / 화질 최우선 디코딩 모드로 작업 성격에 맞게 조절

## 대표 사용 흐름

1. 폴더, 이미지, ZIP 파일을 엽니다.
2. Main, Grid, Filmstrip, Manage 뷰를 오가며 빠르게 검토합니다.
3. 별점, Pick, Reject, 컬러 라벨로 선별합니다.
4. 애매한 컷은 Quick Check 또는 Compare로 판단합니다.
5. 별점/Pick/Reject 결과는 Lightroom에서, 컬러 라벨은 Finder에서 그대로 이어서 활용합니다.
6. 마지막에 Duplicate 모드로 정확한 중복 파일을 정리합니다.

## 뷰와 도구

- `Main View`: 단일 이미지 중심 탐색, 확대, 맞춤, 회전, 오버레이
- `Grid View`: 다량 썸네일 선별
- `Filmstrip View`: 메인 이미지와 스트립 기반 빠른 검토
- `Manage View`: 폴더 탐색, 필터, 필름스트립을 함께 쓰는 관리 작업 공간
- `Quick Check`: 점수, 경고, 근거 기반 촬영 품질 진단과 히스토그램/상세 EXIF 점검 세트
- `Compare`: 나란히 비교하며 베스트샷 선택
- `Duplicate`: 동일 파일 그룹 정리 워크플로우
- `디코딩 모드`: 속도 우선, 보통, 화질 최우선

## 이런 경우에 잘 맞습니다

- 대량 촬영본을 빠르게 1차 선별해야 할 때
- 카탈로그보다 폴더 기반 탐색을 선호할 때
- JPG, HEIF/HIF, RAW, ZIP이 섞인 라이브러리를 다룰 때
- 키보드 중심으로 빠르게 검토하고 싶을 때
- Lightroom 편집 전 선별 단계가 너무 무겁게 느껴질 때
- Finder에서도 분류 상태를 바로 유지하고 싶을 때

## 지원 포맷

- 일반 이미지: `jpg`, `jpeg`, `png`, `gif`, `bmp`, `webp`, `heic`, `heif`, `hif`, `tif`, `tiff`
- RAW: `arw`, `cr2`, `cr3`, `nef`, `nrw`, `dng`, `raf`, `orf`, `rw2`, `pef`, `srw`
- 동영상: `mp4`, `mov`, `m4v`는 v1.5.0부터 지원
- 컨테이너: `zip` 내부 지원 이미지
- 조건부: `avif`, `jxl`은 macOS 디코더 지원 시 활성화

## 설치 방법

1. [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)에서 최신 DMG를 다운로드합니다.
2. `SnapView-1.8.0.dmg`를 엽니다.
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
- ZIP 내부 항목은 실제 파일이 아니므로 일부 저장/연동 기능이 제한됩니다.
- animated `gif` / `webp`는 Main View에서만 재생되고, 다른 뷰에서는 첫 프레임 정지 이미지로 표시됩니다.
- Finder 연동은 컬러 라벨 중심입니다.
- Lightroom 연동은 XMP sidecar 기반 별점/Pick/Reject 중심입니다.
- AVIF, JXL 같은 조건부 포맷은 macOS 디코더 지원 여부에 따라 달라집니다.
- 앱 UI 언어는 한국어, 영어, 일본어, 중국어 간체, 중국어 번체, 스페인어, 프랑스어, 독일어, 포르투갈어(브라질), 이탈리아어, 네덜란드어, 터키어, 폴란드어, 스웨덴어입니다.
- App Store 메타데이터는 인도네시아어, 말레이어, 태국어, 베트남어, 덴마크어, 노르웨이어, 핀란드어, 체코어, 헝가리어, 루마니아어, 그리스어도 포함합니다.
- 릴리즈 후보는 출고 전에 DMG Fast + Mac App Store Stable 두 채널 검증을 모두 거칩니다.
- DMG 릴리즈는 단일 universal 다운로드로 제공합니다. 별도 Intel 전용 DMG 또는 x86_64 standalone app 산출물은 공개하지 않습니다.
- 첫 실행 시 Gatekeeper 경고가 나오면 macOS 보안 설정에서 허용 후 다시 실행해 주십시오.
