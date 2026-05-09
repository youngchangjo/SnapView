<a id="english"></a>

<p align="center">
  <img src="https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-icon.png" alt="SnapView app icon" width="128">
</p>

# SnapView

Fast macOS image viewer for real photo culling work.

Current Version: `v1.6.0`


Language: [🇺🇸 English](#english) | [🇰🇷 한국어](#korean)

Release Notes: [Public Release Notes](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) | [GitHub Releases](https://github.com/youngchangjo/SnapView/releases)

Official Website: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

Mac App Store: [SnapView on the App Store](https://apps.apple.com/us/app/snapview-fast-image-viewer/id6762974261)

## Download

- Latest release: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- Install package: open the latest release page and download `SnapView-1.6.0.dmg`
- Official website: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

## v1.6.0 Update

- **Rotate And Flip**: Added clockwise rotation and horizontal flip for the current image.
- **JPEG Original Save For Rotation**: Added an option to save current-file rotation directly to the JPEG original.
- **Space Zoom Toggle**: In image view, `Space` now toggles between 100% view and the previous zoom level.
- **Shortcut Cleanup Options**: Added an option to clear a rating or Pick by pressing the same shortcut again, and improved rating clear on English keyboard layouts.
- **Preview Promotion Reliability**: Reduced cases where a preview image could remain after fast browsing instead of promoting to the final image display.
- **Viewer State Recovery**: Returning to SnapView now preserves video playback position and image zoom/pan state more reliably.
- **Settings And JPEG Metadata**: Added reset-all-settings and Finder date alignment for edited JPEG capture dates.

## What's New In v1.5

- **Photo And Video Browsing**: Browse supported videos together with photos in the same folder. `MP4`, `MOV`, and `M4V` are included in the first supported video set.
- **Simple Video Playback**: Play videos in Main, Filmstrip, and Manage views, with autoplay settings, volume control, and `Space` for play/pause.
- **Image Export**: Create resized copies as `JPEG` or `PNG` using simple presets for Instagram, Threads, X, blogs, or a custom size. JPEG quality can be adjusted when needed.
- **Date And Location Edits**: Adjust photo date/time and GPS metadata with a cautious workflow that keeps unsupported files protected.
- **On-device OCR**: Run OCR from Quick Check, copy recognized Korean and English text, and optionally show detected text highlights directly on the image.
- **Video-aware Tools**: Actions that do not apply to video, such as image export and rotation, are disabled for video assets to keep the workflow predictable.

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
2. Open `SnapView-1.6.0.dmg`.
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
- Release candidates are validated in both lanes (DMG Fast + Mac App Store Stable) before shipment.
- DMG releases are shipped as a single universal download by default. Do not publish a separate Intel-only DMG or standalone x86_64 app asset unless explicitly requested for a special compatibility test.
- If Gatekeeper blocks the app on first launch, open it from `Applications` again after confirming in macOS security settings.

---

<a id="korean"></a>

# SnapView

실사용 사진 선별 작업에 맞춘 macOS용 고속 이미지 뷰어입니다.

현재 버전: `v1.6.0`


언어: [🇺🇸 English](#english) | [🇰🇷 한국어](#korean)

릴리즈 노트: [공개 릴리즈 노트](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) | [GitHub Releases](https://github.com/youngchangjo/SnapView/releases)

공식 홈페이지: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

Mac App Store: [App Store에서 SnapView 보기](https://apps.apple.com/us/app/snapview-fast-image-viewer/id6762974261)

## 다운로드

- 최신 릴리즈: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- 설치 파일: 최신 릴리즈 페이지에서 `SnapView-1.6.0.dmg`를 다운로드해 설치합니다
- 공식 사이트: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

스크린샷은 위 `Screenshots` 섹션에서 바로 확인할 수 있습니다.

`v0.10.0`부터의 상세 변경 이력은 별도 문서인 [공개 릴리즈 노트](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md)에서 확인할 수 있습니다.

## v1.6.0 업데이트

- **회전과 좌우 반전**: 현재 이미지의 시계 방향 회전과 좌우 반전을 추가했습니다.
- **회전 후 JPEG 원본 저장**: 현재 파일 회전에서 JPEG 원본에 바로 저장할 수 있는 옵션을 추가했습니다.
- **Space 배율 토글**: 이미지 보기에서 `Space`로 100% 보기와 이전 배율을 빠르게 오갈 수 있습니다.
- **단축키 해제 옵션**: 같은 별점/Pick 단축키를 한 번 더 눌러 해제하는 옵션을 추가하고, 영문 키보드의 별점 취소 동작을 보강했습니다.
- **프리뷰 전환 안정성**: 빠른 탐색 후 프리뷰 이미지가 최종 표시로 전환되지 않고 남는 상황을 줄였습니다.
- **보기 상태 복원**: SnapView로 다시 돌아왔을 때 동영상 재생 위치와 이미지 확대/이동 상태를 더 안정적으로 유지합니다.
- **설정/JPEG 메타데이터 정리**: 설정 초기화와 JPEG 촬영 날짜 수정 시 Finder 날짜 정렬 옵션을 추가했습니다.

## v1.5 주요 변경

- **사진 + 동영상 탐색**: 같은 폴더 안의 사진과 동영상을 함께 넘겨볼 수 있습니다. 1차 지원 대상은 `MP4`, `MOV`, `M4V`입니다.
- **간단한 동영상 재생**: Main, Filmstrip, Manage 뷰에서 동영상을 재생할 수 있고, 자동재생 설정, 음량 조절, `Space` 재생/일시정지를 지원합니다.
- **이미지 내보내기**: `JPEG` 또는 `PNG` 복사본을 만들 수 있고, Instagram, Threads, X, 블로그, 수동 크기 프리셋을 제공합니다. JPEG 품질도 조절할 수 있습니다.
- **촬영 시각과 위치 보정**: 사진의 날짜/시간과 GPS 정보를 안전한 흐름으로 수정할 수 있습니다. 지원하지 않는 파일은 원본 쓰기를 막아 예기치 않은 손상을 피합니다.
- **온디바이스 OCR**: Quick Check에서 사진 속 한국어/영어 문자를 인식하고 복사할 수 있으며, 필요하면 이미지 위에 인식 영역을 노란 하이라이트로 표시합니다.
- **동영상 대응 도구 정리**: 회전, 이미지 내보내기처럼 동영상에 맞지 않는 기능은 동영상 선택 시 실행되지 않도록 정리했습니다.


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
2. `SnapView-1.6.0.dmg`를 엽니다.
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
- 릴리즈 후보는 출고 전에 DMG Fast + Mac App Store Stable 두 채널 검증을 모두 거칩니다.
- DMG 릴리즈는 기본적으로 단일 universal 다운로드로 제공합니다. 별도 Intel 전용 DMG 또는 x86_64 standalone app 산출물은 명시적으로 요청된 특수 호환성 테스트가 아니면 공개하지 않습니다.
- 첫 실행 시 Gatekeeper 경고가 나오면 macOS 보안 설정에서 허용 후 다시 실행해 주십시오.
