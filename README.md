<a id="english"></a>

<p align="center">
  <img src="https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-icon.png" alt="SnapView app icon" width="128">
</p>

# SnapView

Fast macOS image viewer for real photo culling work.

Current Version: `v2.7.0`

SnapView 2.7.0 improves fast photo review, long browsing sessions, and photo deletion from SD cards and other removable storage. See the release notes for the full history.

Language: [🇺🇸 English](#english) | [🇰🇷 한국어](#korean)

Release Notes: [Public Release Notes](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) | [GitHub Releases](https://github.com/youngchangjo/SnapView/releases)

Official Website: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

Mac App Store: [SnapView on the App Store](https://apps.apple.com/us/app/snapview-fast-image-viewer/id6762974261)

## Download

- Latest release: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- Install package: open the latest release page and download the versioned `SnapView-X.Y.Z.dmg` shown there
- Homebrew: `brew tap youngchangjo/snapview` then `brew install --cask snapview` (run `brew trust youngchangjo/snapview` first if Homebrew asks)
- Official website: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

## Screenshots

![SnapView Pro Layout photo review](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-pro-layout.png)

| Pro Layout View | Main View |
| --- | --- |
| ![SnapView Pro Layout View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-pro-layout.png) | ![SnapView Main View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-main-speed.png) |

| Grid View | Quick Check |
| --- | --- |
| ![SnapView Grid View](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-grid.png) | ![SnapView Quick Check](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-quickcheck.png) |

| Quick Organize | ZIP Browsing |
| --- | --- |
| ![SnapView Quick Organize](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-quick-organize.png) | ![SnapView ZIP Browsing](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-zip.png) |

| Map Overlay | Batch Actions |
| --- | --- |
| ![SnapView Map Overlay](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-map.png) | ![SnapView Batch Actions](https://raw.githubusercontent.com/youngchangjo/SnapView/main/website/assets/images/snapview-2-0-batch.png) |

## Why SnapView

SnapView is built for the part after import: checking sharpness, comparing near-duplicates, rating selects, and moving through folders quickly without waiting for a catalog app.

The key idea is simple: do the fastest first-pass cull in SnapView, then carry the result forward instead of starting over somewhere else.

- Fast folder and ZIP browsing
- Apple Photos browsing for Library, Favorites, Videos, Screenshots, and albums, with a Photos-style Favorite heart and optional higher-resolution Photos previews in Photos mode
- HDR-aware display for supported sources with a compact HDR badge
- Quick Check for quality diagnosis with reasons, not just EXIF fields
- Map Overlay for GPS-backed photo location review
- Compare mode for picking the best frame from similar shots
- Duplicate workspace for exact-file cleanup
- Comic Reading Mode for opened folders and ZIP archives with a focused black reader
- Keyboard-first rating, pick, reject, and Finder tag workflow
- Q/W/E/R/T + Tab viewer policy: Q=Grid, W=Main View, E=Horizontal Filmstrip, R=Vertical Filmstrip, T=Navigator toggle, Tab=Pro Layout View
- Quick Organize presets for repeated copy/move sorting
- Batch Actions for previewed JPEG/PNG export and copy/move recipes
- Print images or save PDFs with `Command-P`
- Supporter Pass is optional support in supported App Store builds; the App Store shows the purchase price before checkout.
- XMP interoperability for ratings and Adobe color labels
- Finder tag interoperability so file and folder status remain visible outside the app
- Decoding modes that let you choose between speed, balanced review, and quality-first inspection

## Typical Workflow

1. Open a folder, image, ZIP archive, or Apple Photos collection.
2. Move quickly in Main, Grid, horizontal/vertical Filmstrip, and Navigator.
3. Mark keepers with rating, Pick, Reject, or color labels, or the Favorite heart for Apple Photos items.
4. Run Quick Organize presets or Batch Actions for repeated sorting or export, or print a PDF with `Command-P`.
5. Use Quick Check or Compare for closer calls, and Duplicate mode to clean up exact duplicates.
6. Continue with XMP-backed ratings and compatible Adobe labels in Lightroom or Capture One.

## Views And Tools

- `Main View`: single-image browsing with zoom, fit, rotate, and overlay tools
- `Grid View`: thumbnail selection for fast triage
- `Filmstrip View`: main image plus horizontal or vertical strip for quick pass review
- `Apple Photos`: Navigator source for Library, Favorites, Videos, Screenshots, and albums; Photos items use a Photos-style Favorite heart instead of file-based rating/Pick/color controls
- `File Transfer`: drag, copy, and move selected images with thumbnail previews and selected-count feedback
- `Pro Layout View`: `Tab` turns on the Action Strip, Info Strip, and Select Tray over the current viewer surface; Navigator and Filmstrip stay independent
- `Quick Check`: score, warnings, and supporting reasons, plus histogram and detailed EXIF in one review set
- `Map Overlay`: `M` shows the current photo GPS location in a Histogram-sized overlay
- `Compare`: side-by-side review and best-shot recommendation
- `Duplicate`: exact duplicate grouping and cleanup workflow
- `Comic Reading Mode`: switch an opened folder or ZIP into a black reading surface with left-to-right or right-to-left two-page spreads
- `Quick Organize`: preset-based copy/move sorting
- `Batch Actions`: previewed export/copy/move recipes for repeatable delivery tasks
- `Supporter Pass`: optional support in supported App Store builds while keeping the Basic viewer generous
- `Decoding Modes`: speed-first, balanced, and quality-first viewing behavior

## Good Fit For

- photographers doing first-pass culling
- users who browse directly from folders instead of importing into a catalog first
- mixed libraries with JPG, HEIF/HIF, RAW, and ZIP archives
- keyboard-heavy review workflows
- Lightroom users who want a faster culling stage before editing
- macOS users who want color labels to stay visible in Finder after review

## Supported Formats

- Still images: `astc`, `avci`, `avif`, `bmp`, `dcm`, `dds`, `dib`, `dicom`, `exr`, `gif`, `hdr`, `heic`, `heics`, `heif`, `hif`, `icns`, `ico`, `j2c`, `j2k`, `jp2`, `jpe`, `jpeg`, `jpf`, `jpg`, `jpx`, `jxl`, `ktx`, `mpo`, `pbm`, `pct`, `pfm`, `pgm`, `pic`, `pict`, `png`, `ppm`, `psd`, `pvr`, `sgi`, `tga`, `tif`, `tiff`, `webp`
- RAW: `3fr`, `arw`, `axr`, `cr2`, `cr3`, `crw`, `dcr`, `dng`, `dxo`, `erf`, `fff`, `iiq`, `mos`, `mrw`, `nef`, `nefx`, `nrw`, `orf`, `ori`, `pef`, `raf`, `raw`, `rw2`, `rwl`, `sr2`, `srf`, `srw`
- Video: `mp4`, `mov`, `m4v` from v1.5.0
- Container: `zip` for supported images inside archives
- Excluded: `ai`, `svg`

## Install

1. Download the latest DMG from [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest).
2. Open the downloaded versioned `SnapView-X.Y.Z.dmg`.
3. Drag `SnapView.app` into `Applications`.
4. Launch SnapView from `Applications`.

## Requirements

- macOS `14.0` or later

## Security And Privacy

- Release builds are signed with Apple Developer ID and notarized for the standard macOS installation flow.
- SnapView works with files you open locally; Apple Photos access is requested only when you open Apple Photos features.
- Without a recorded choice, crash and app-improvement data start off. You can enable anonymized crash and app-usage data together at launch or Skip, and each setting stays independently changeable later. Photos, file contents, and personally identifying information are not sent.

## Notes

- ZIP browsing can be slower than normal folders because archive contents must be read before display.
- Animated `gif` and `webp` play in Main View only. Other views currently show a still first frame.
- Local deletes move files to macOS Trash and can be undone during the current app session. SnapView does not maintain a next-launch delete recovery mode.
- Some formats depend on the decoder support available in the running macOS version.
- Supporter Pass is optional support, not a feature lock.
- DMG releases are shipped as one universal download for Apple silicon and Intel Macs.

---

<a id="korean"></a>

# SnapView

실사용 사진 선별 작업에 맞춘 macOS용 고속 이미지 뷰어입니다.

현재 버전: `v2.7.0`

SnapView 2.7.0은 빠른 사진 탐색, 장시간 사용, SD 카드와 외장 저장장치에서의 사진 삭제 안정성을 개선한 릴리즈입니다. 자세한 변경 이력은 릴리즈 노트를 참고하세요.

언어: [🇺🇸 English](#english) | [🇰🇷 한국어](#korean)

릴리즈 노트: [공개 릴리즈 노트](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) | [GitHub Releases](https://github.com/youngchangjo/SnapView/releases)

공식 홈페이지: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

Mac App Store: [App Store에서 SnapView 보기](https://apps.apple.com/us/app/snapview-fast-image-viewer/id6762974261)

## 다운로드

- 최신 릴리즈: [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)
- 설치 파일: 최신 릴리즈 페이지에 표시된 버전의 `SnapView-X.Y.Z.dmg`를 다운로드해 설치합니다
- Homebrew: `brew tap youngchangjo/snapview` 후 `brew install --cask snapview` (Homebrew가 요구하면 먼저 `brew trust youngchangjo/snapview`)
- 공식 사이트: [snapview.snapworkslab.com](https://snapview.snapworkslab.com)

스크린샷은 위 `Screenshots` 섹션에서 바로 확인할 수 있습니다.

## 왜 SnapView인가요

SnapView는 사진을 가져온 뒤 실제로 하는 작업, 즉 빠르게 넘겨 보기, 초점 확인, 비슷한 컷 비교, 별점 선별, 중복 정리에 맞춰 설계되어 있습니다. 카탈로그를 먼저 만드는 방식보다 폴더 기반 검토 흐름에 더 가깝습니다.

핵심은 간단합니다. 가장 시간이 많이 드는 1차 선별은 SnapView에서 빠르게 끝내고, 그 결과를 Lightroom이나 Finder에서 그대로 이어서 쓰는 것입니다.

- 폴더와 ZIP 이미지를 빠르게 탐색
- Apple Photos의 Library, Favorites, Videos, Screenshots, 앨범을 SnapView 안에서 탐색하고, Photos 모드에서는 사진 앱과 같은 좋아요 하트로 선별
- 지원되는 HDR 사진의 기본 표시와 작은 HDR 배지
- EXIF 나열이 아니라 점수와 근거를 보여주는 Quick Check
- GPS가 있는 사진을 확인하기 위한 지도 오버레이
- 비슷한 컷에서 베스트샷을 고르기 위한 Compare
- 동일 파일 정리를 위한 Duplicate 워크스페이스
- 열린 폴더나 ZIP을 검은 독서 화면으로 전환하는 만화책 보기
- `Q/W/E/R/T + Tab` 기준 탐색: Grid, Main, 가로 Filmstrip, 세로 Filmstrip, Navigator, 프로 레이아웃 뷰를 분리
- 빠른 정리 프리셋과 Batch Actions로 반복 복사/이동/내보내기 작업 정리
- `Command-P`로 macOS 기본 인쇄 패널에서 현재 이미지, 선택 이미지, 현재 폴더, 콘택트 시트를 인쇄하거나 PDF로 저장
- 별점, Pick, Reject, Finder 태그 중심의 키보드 선별
- XMP 연동으로 별점과 Adobe 컬러 라벨 이어가기
- Finder 태그 연동으로 macOS 파일/폴더 정리 단계까지 상태 유지
- 속도 우선 / 보통 / 화질 최우선 디코딩 모드로 작업 성격에 맞게 조절

## 대표 사용 흐름

1. 폴더, 이미지, ZIP 파일 또는 Apple Photos 컬렉션을 엽니다.
2. Main, Grid, 가로/세로 Filmstrip, Navigator를 오가며 빠르게 검토합니다.
3. 로컬 파일은 별점, Pick, Reject, 컬러 라벨로, Apple Photos 항목은 좋아요 하트로 선별합니다.
4. 반복 정리나 출력이 필요하면 빠른 정리 프리셋, Batch Actions, `Command-P` PDF 저장을 사용합니다.
5. 애매한 컷은 Quick Check 또는 Compare로 판단하고, Duplicate 모드로 정확한 중복 파일을 정리합니다.
6. XMP 별점과 호환되는 Adobe 라벨은 Lightroom 또는 Capture One에서 이어 씁니다.

## 뷰와 도구

- `Main View`: 단일 이미지 중심 탐색, 확대, 맞춤, 회전, 오버레이
- `Grid View`: 다량 썸네일 선별
- `Filmstrip View`: 메인 이미지와 가로/세로 스트립 기반 빠른 검토
- `Apple Photos`: Library, Favorites, Videos, Screenshots, 앨범을 Navigator 소스로 열며, Photos 항목은 별점/Pick/컬러 대신 좋아요 하트를 사용
- `파일 전송`: 선택 이미지를 드래그, 복사, 이동할 때 썸네일 프리뷰와 선택 장수 표시
- `Pro Layout View`: `Tab`으로 현재 보기 위에 액션 스트립, 정보 스트립, 셀렉트레이를 켭니다. Navigator와 Filmstrip은 독립 표면으로 유지됩니다.
- `Quick Check`: 점수, 경고, 근거 기반 촬영 품질 진단과 히스토그램/상세 EXIF 점검 세트
- `지도 오버레이`: `M`으로 현재 사진의 GPS 위치를 히스토그램 크기 오버레이에 표시
- `Compare`: 나란히 비교하며 베스트샷 선택
- `Duplicate`: 동일 파일 그룹 정리 워크플로우
- `만화책 보기`: 열린 폴더나 ZIP을 검은 독서 화면으로 전환하고 좌->우/우->좌 2페이지 펼침을 지원
- `빠른 정리`: 반복 복사/이동 선별을 프리셋으로 실행
- `Batch Actions`: JPEG/PNG 내보내기, 복사, 이동 레시피를 프리뷰 후 실행
- `디코딩 모드`: 속도 우선, 보통, 화질 최우선

## 이런 경우에 잘 맞습니다

- 대량 촬영본을 빠르게 1차 선별해야 할 때
- 카탈로그보다 폴더 기반 탐색을 선호할 때
- JPG, HEIF/HIF, RAW, ZIP이 섞인 라이브러리를 다룰 때
- 키보드 중심으로 빠르게 검토하고 싶을 때
- Lightroom 편집 전 선별 단계가 너무 무겁게 느껴질 때
- Finder에서도 분류 상태를 바로 유지하고 싶을 때

## 지원 포맷

- 정지 이미지: `astc`, `avci`, `avif`, `bmp`, `dcm`, `dds`, `dib`, `dicom`, `exr`, `gif`, `hdr`, `heic`, `heics`, `heif`, `hif`, `icns`, `ico`, `j2c`, `j2k`, `jp2`, `jpe`, `jpeg`, `jpf`, `jpg`, `jpx`, `jxl`, `ktx`, `mpo`, `pbm`, `pct`, `pfm`, `pgm`, `pic`, `pict`, `png`, `ppm`, `psd`, `pvr`, `sgi`, `tga`, `tif`, `tiff`, `webp`
- RAW: `3fr`, `arw`, `axr`, `cr2`, `cr3`, `crw`, `dcr`, `dng`, `dxo`, `erf`, `fff`, `iiq`, `mos`, `mrw`, `nef`, `nefx`, `nrw`, `orf`, `ori`, `pef`, `raf`, `raw`, `rw2`, `rwl`, `sr2`, `srf`, `srw`
- 동영상: `mp4`, `mov`, `m4v`는 v1.5.0부터 지원
- 컨테이너: `zip` 내부 지원 이미지
- 제외: `ai`, `svg`

## 설치 방법

1. [GitHub Releases](https://github.com/youngchangjo/SnapView/releases/latest)에서 최신 DMG를 다운로드합니다.
2. 다운로드한 버전의 `SnapView-X.Y.Z.dmg`를 엽니다.
3. `SnapView.app`을 `Applications`로 드래그합니다.
4. `Applications`에서 SnapView를 실행합니다.

## 시스템 요구사항

- macOS `14.0` 이상

## 보안 및 개인정보

- 릴리즈 빌드는 Apple Developer ID 서명과 notarization을 거쳐 일반적인 macOS 설치 흐름을 따릅니다.
- SnapView는 사용자가 연 로컬 파일을 기준으로 동작하며, Apple Photos 권한은 해당 기능을 열 때만 요청합니다.
- 선택 기록이 없으면 비정상 종료·앱 사용 데이터는 꺼진 상태입니다. 실행 직후 함께 켜거나 `건너뛰기`로 둘 다 끌 수 있고, 이후 설정에서 각각 변경할 수 있습니다. 사진이나 파일 내용 등 개인을 식별할 수 있는 정보는 전송하지 않습니다.

## 참고 사항

- ZIP 탐색은 일반 폴더보다 구조적으로 느릴 수 있습니다.
- animated `gif` / `webp`는 Main View에서만 재생되고, 다른 뷰에서는 첫 프레임 정지 이미지로 표시됩니다.
- 로컬 삭제는 macOS 휴지통으로 이동하며 현재 앱 실행 중에는 되돌릴 수 있습니다. 다음 실행 삭제 복구 모드는 사용하지 않습니다.
- 일부 포맷은 실행 중인 macOS 버전의 디코더 지원 범위에 따라 달라질 수 있습니다.
- DMG 릴리즈는 Apple Silicon과 Intel Mac을 함께 지원하는 단일 universal 다운로드로 제공합니다.
