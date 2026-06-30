<a id="english"></a>

<p align="center">
  <img src="https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-icon.png" alt="SnapView app icon" width="128">
</p>

# SnapView

Fast macOS image viewer for real photo culling work.

Current Version: `v2.5.0`

Language: [English](#english) | [한국어](#korean)

Release Notes: [Public Release Notes](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) | [GitHub Releases](https://github.com/youngchangjo/SnapView/releases)

Official Website: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

Mac App Store: [SnapView on the App Store](https://apps.apple.com/us/app/snapview-fast-image-viewer/id6762974261)

## Download

- Latest release: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- Direct DMG: [SnapView-2.5.0.dmg](https://github.com/youngchangjo/SnapView/releases/download/v2.5.0/SnapView-2.5.0.dmg)
- Homebrew: `brew tap youngchangjo/snapview` then `brew install --cask snapview`
- Official website: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

## Screenshots

| Pro Layout View | Main View |
| --- | --- |
| ![SnapView Pro Layout View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-pro-layout.png) | ![SnapView Main View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-main-speed.png) |

| Grid View | Quick Check |
| --- | --- |
| ![SnapView Grid View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-grid.png) | ![SnapView Quick Check](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-quickcheck.png) |

## What SnapView Is Good At

SnapView is built for the part after import: checking sharpness, comparing near-duplicates, rating selects, and moving through folders quickly without waiting for a catalog app.

- Fast folder, ZIP, and Apple Photos browsing
- Main, Grid, horizontal Filmstrip, vertical Filmstrip, Navigator, and Pro Layout View
- Keyboard-first rating, Pick, Reject, and Finder tag workflow
- Quick Check for quality diagnosis with reasons, histogram, and EXIF
- Map Overlay for GPS-backed photo location review
- Compare mode for picking the best frame from similar shots
- Duplicate workspace for exact-file cleanup
- Apple Photos Library, Favorites, Videos, Screenshots, and albums, with a Photos-style Favorite heart
- HDR-aware display for supported photos, with a compact HDR/SDR toggle
- Non-AI upscaling options for low-resolution images
- Print images or save PDFs with `Command-P`
- Quick Organize presets and Batch Actions for repeated copy, move, and export tasks
- Persistent thumbnail disk cache for repeat Grid, Filmstrip, and Navigator browsing
- Lightroom-style XMP interoperability for rating, Pick, and Reject
- RAW+JPG pairing for common camera workflows
- Comic Reading Mode for folders or ZIP archives

## Typical Workflow

1. Open a folder, image, ZIP archive, or Apple Photos collection.
2. Move quickly in Main, Grid, Filmstrip, and Navigator.
3. Mark keepers with rating, Pick, Reject, Finder tags, or the Photos Favorite heart.
4. Use Quick Check, Map Overlay, Compare, or Duplicate when the decision needs more context.
5. Run Quick Organize, Batch Actions, drag, copy, move, print, or PDF export for handoff.
6. Continue in Lightroom with XMP-backed ratings and flags, or keep organizing in Finder.

## Views And Tools

- `Main View`: single-image browsing with zoom, fit, rotate, and overlay tools
- `Grid View`: thumbnail selection for fast triage
- `Filmstrip View`: main image plus horizontal or vertical strip
- `Navigator`: local folders and Apple Photos sources in one side panel
- `Pro Layout View`: `Tab` shows the Action Strip, Info Strip, and Select Tray over the current viewer surface
- `Quick Check`: score, warnings, supporting reasons, histogram, and detailed EXIF
- `Map Overlay`: `M` shows the current photo's GPS location
- `Compare`: side-by-side review and best-shot recommendation
- `Duplicate`: exact duplicate grouping and cleanup workflow
- `Quick Organize`: preset-based copy and move sorting
- `Batch Actions`: previewed export, copy, and move recipes
- `Disk Cache`: persistent thumbnail cache for repeat Grid, Filmstrip, and Navigator browsing
- `Comic Reading Mode`: black reading surface for folders and ZIP archives

## Supported Formats

- Still images: `astc`, `avci`, `avif`, `bmp`, `dcm`, `dds`, `dib`, `dicom`, `exr`, `gif`, `hdr`, `heic`, `heics`, `heif`, `hif`, `icns`, `ico`, `j2c`, `j2k`, `jp2`, `jpe`, `jpeg`, `jpf`, `jpg`, `jpx`, `jxl`, `ktx`, `mpo`, `pbm`, `pct`, `pfm`, `pgm`, `pic`, `pict`, `png`, `ppm`, `psd`, `pvr`, `sgi`, `tga`, `tif`, `tiff`, `webp`
- RAW: `3fr`, `arw`, `axr`, `cr2`, `cr3`, `crw`, `dcr`, `dng`, `dxo`, `erf`, `fff`, `iiq`, `mos`, `mrw`, `nef`, `nefx`, `nrw`, `orf`, `ori`, `pef`, `raf`, `raw`, `rw2`, `rwl`, `sr2`, `srf`, `srw`
- Video: `mp4`, `mov`, `m4v`
- Container: `zip` for supported images inside archives
- Excluded: `ai`, `svg`

## Install

1. Download the latest DMG from [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest).
2. Open `SnapView-2.5.0.dmg`.
3. Drag `SnapView.app` into `Applications`.
4. Launch SnapView from `Applications`.

## Requirements

- macOS `15.5` or later

## Security And Privacy

- Release builds are signed with Apple Developer ID and notarized.
- SnapView works with files and Photos items you choose to open.
- Apple Photos access is requested only when you open Apple Photos features.
- Standard signed DMG and Mac App Store releases should install without a manual macOS security override.

## Notes

- ZIP browsing can be slower than normal folders because archive contents must be read before display.
- ZIP items are not normal filesystem files, so some save and interoperability features are limited there.
- Animated `gif` and `webp` play in Main View only. Other views show a still first frame.
- Some format support can vary by macOS version.

---

<a id="korean"></a>

# SnapView

실사용 사진 선별 작업에 맞춘 macOS용 고속 이미지 뷰어입니다.

현재 버전: `v2.5.0`

언어: [English](#english) | [한국어](#korean)

릴리즈 노트: [공개 릴리즈 노트](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) | [GitHub Releases](https://github.com/youngchangjo/SnapView/releases)

공식 홈페이지: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

Mac App Store: [App Store에서 SnapView 보기](https://apps.apple.com/us/app/snapview-fast-image-viewer/id6762974261)

## 다운로드

- 최신 릴리즈: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- 직접 다운로드: [SnapView-2.5.0.dmg](https://github.com/youngchangjo/SnapView/releases/download/v2.5.0/SnapView-2.5.0.dmg)
- Homebrew: `brew tap youngchangjo/snapview` 후 `brew install --cask snapview`
- 공식 사이트: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

스크린샷은 위 `Screenshots` 섹션에서 확인할 수 있습니다.

## SnapView가 잘하는 일

SnapView는 사진을 가져온 뒤 실제로 하는 작업, 즉 빠르게 넘겨 보기, 초점 확인, 비슷한 컷 비교, 별점 선별, 중복 정리에 맞춰 설계되어 있습니다.

- 폴더, ZIP, Apple Photos 탐색
- Main, Grid, 가로 Filmstrip, 세로 Filmstrip, Navigator, Pro Layout View
- 별점, Pick, Reject, Finder 태그 중심의 키보드 선별
- 점수, 근거, 히스토그램, EXIF를 함께 보여주는 Quick Check
- GPS 사진 위치 확인을 위한 Map Overlay
- 비슷한 컷에서 베스트샷을 고르는 Compare
- 동일 파일을 정리하는 Duplicate 워크스페이스
- Apple Photos Library, Favorites, Videos, Screenshots, 앨범 탐색과 사진 앱 스타일 Favorite 하트
- 지원되는 HDR 사진 표시와 작은 HDR/SDR 전환 배지
- 저해상도 이미지를 위한 non-AI 업스케일링 옵션
- `Command-P` 인쇄와 PDF 저장
- 반복 복사, 이동, 내보내기를 위한 Quick Organize와 Batch Actions
- Grid, Filmstrip, Navigator 재방문 흐름을 돕는 지속 썸네일 디스크 캐시
- Lightroom 스타일 XMP 별점, Pick, Reject 연동
- 주요 카메라 워크플로를 위한 RAW+JPG 페어링
- 폴더와 ZIP을 위한 Comic Reading Mode

## 대표 사용 흐름

1. 폴더, 이미지, ZIP 파일 또는 Apple Photos 컬렉션을 엽니다.
2. Main, Grid, Filmstrip, Navigator를 오가며 빠르게 검토합니다.
3. 별점, Pick, Reject, Finder 태그 또는 Photos Favorite 하트로 선별합니다.
4. 더 판단이 필요하면 Quick Check, Map Overlay, Compare, Duplicate를 사용합니다.
5. Quick Organize, Batch Actions, 드래그, 복사, 이동, 인쇄, PDF 저장으로 결과를 넘깁니다.
6. 별점/Pick/Reject 결과는 Lightroom에서, 태그는 Finder에서 이어서 활용합니다.

## 뷰와 도구

- `Main View`: 단일 이미지 중심 탐색, 확대, 맞춤, 회전, 오버레이
- `Grid View`: 다량 썸네일 선별
- `Filmstrip View`: 메인 이미지와 가로/세로 스트립
- `Navigator`: 로컬 폴더와 Apple Photos 소스를 한 곳에서 탐색
- `Pro Layout View`: `Tab`으로 현재 보기 위에 Action Strip, Info Strip, Select Tray 표시
- `Quick Check`: 점수, 경고, 근거, 히스토그램, 상세 EXIF
- `Map Overlay`: `M`으로 현재 사진의 GPS 위치 표시
- `Compare`: 나란히 비교하며 베스트샷 선택
- `Duplicate`: 동일 파일 그룹 정리 워크플로우
- `Quick Organize`: 프리셋 기반 복사와 이동 정리
- `Batch Actions`: 미리보기 기반 내보내기, 복사, 이동 레시피
- `Disk Cache`: Grid, Filmstrip, Navigator 재방문용 지속 썸네일 캐시
- `Comic Reading Mode`: 폴더와 ZIP을 검은 독서 화면으로 보기

## 지원 포맷

- 정지 이미지: `astc`, `avci`, `avif`, `bmp`, `dcm`, `dds`, `dib`, `dicom`, `exr`, `gif`, `hdr`, `heic`, `heics`, `heif`, `hif`, `icns`, `ico`, `j2c`, `j2k`, `jp2`, `jpe`, `jpeg`, `jpf`, `jpg`, `jpx`, `jxl`, `ktx`, `mpo`, `pbm`, `pct`, `pfm`, `pgm`, `pic`, `pict`, `png`, `ppm`, `psd`, `pvr`, `sgi`, `tga`, `tif`, `tiff`, `webp`
- RAW: `3fr`, `arw`, `axr`, `cr2`, `cr3`, `crw`, `dcr`, `dng`, `dxo`, `erf`, `fff`, `iiq`, `mos`, `mrw`, `nef`, `nefx`, `nrw`, `orf`, `ori`, `pef`, `raf`, `raw`, `rw2`, `rwl`, `sr2`, `srf`, `srw`
- 동영상: `mp4`, `mov`, `m4v`
- 컨테이너: `zip` 내부 지원 이미지
- 제외: `ai`, `svg`

## 설치 방법

1. [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)에서 최신 DMG를 다운로드합니다.
2. `SnapView-2.5.0.dmg`를 엽니다.
3. `SnapView.app`을 `Applications`로 드래그합니다.
4. `Applications`에서 SnapView를 실행합니다.

## 시스템 요구사항

- macOS `15.5` 이상

## 보안 및 개인정보

- 릴리즈 빌드는 Apple Developer ID 서명과 공증을 거칩니다.
- SnapView는 사용자가 선택해 연 파일과 Photos 항목을 중심으로 동작합니다.
- Apple Photos 권한은 Apple Photos 기능을 열 때만 요청합니다.
- 최신 서명 DMG 또는 Mac App Store 릴리즈는 별도 macOS 보안 우회 없이 설치되는 것이 정상입니다.

## 참고 사항

- ZIP 탐색은 일반 폴더보다 구조적으로 느릴 수 있습니다.
- ZIP 내부 항목은 실제 파일이 아니므로 일부 저장과 연동 기능이 제한됩니다.
- animated `gif` / `webp`는 Main View에서만 재생되고, 다른 뷰에서는 첫 프레임 정지 이미지로 표시됩니다.
- 일부 포맷 지원은 실행 중인 macOS 버전에 따라 달라질 수 있습니다.
