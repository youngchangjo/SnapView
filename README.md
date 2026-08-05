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

Detailed GitHub release notes from `v0.10.0` onward are available in the separate [Public Release Notes](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md) document.

## Why SnapView

SnapView is built for the part after import: checking sharpness, comparing near-duplicates, rating selects, and moving through folders quickly without waiting for a catalog app.

The key idea is simple: do the fastest first-pass cull in SnapView, then carry the result forward instead of starting over somewhere else.

- Fast folder and ZIP browsing
- App Store ZIP extraction is bounded and cancellable, and cancelled Apple Photos preview/original work releases its in-flight request and temporary resources.
- Apple Photos browsing for Library, Favorites, Videos, Screenshots, and albums, with a Photos-style Favorite heart and optional higher-resolution Photos previews in Photos mode
- Image display comes first, with heavier analysis and cache work kept in the background during browsing
- The thumbnail disk cache drains admitted work before closing and coordinates lookup with cleanup across its worker handles.
- Cold source-dimension checks and original JPEG/Finder metadata writes stay off the browsing UI path
- HDR-aware main display for supported sources, with a compact HDR badge whose HDR region toggles HDR/SDR display, returns SDR to original-quality display, and whose expand control opens detailed inspection
- Quick Check for quality diagnosis with reasons, not just EXIF fields
- Map Overlay for GPS-backed photo location review
- Compare mode for picking the best frame from similar shots
- Duplicate workspace for exact-file cleanup
- Comic Reading Mode for opened folders or ZIP archives, with a focused black reader, HUD-local left-to-right/right-to-left controls, same-source last page restore, and next folder/ZIP handoff
- Keyboard-first rating, pick, reject, and Finder tag workflow
- Q/W/E/R/T + Tab viewer policy: Q=Grid, W=Main View, E=Horizontal Filmstrip, R=Vertical Filmstrip, T=Navigator toggle, Tab=Pro Layout View
- Horizontal and vertical Filmstrip thumbnail work stays bounded to the visible viewport and releases offscreen image state as you browse or leave the mode
- Quick Organize presets for repeated copy/move sorting, with up to three visible presets and auto rules limited to Pick and 5-star
- Batch Actions for previewed JPEG/PNG export and copy/move recipes, with up to three visible recipes in SnapView 2.0
- Print images or save PDFs with `Command-P` through the native macOS print panel. The `SnapView Images` section controls image range, arrangement, scaling, and filename captions.
- Intro Supporter Pass is optional support for SnapView in supported App Store builds. Founding Supporter runs from 2026-07-01 through 2026-09-30 UTC, regular Supporter Pass is available from 2026-10-01 UTC, and the App Store shows the purchase price before checkout.
- Namespace-aware XMP interoperability for ratings and Adobe color labels, with SnapView Pick/Reject stored separately and unrelated sidecar metadata preserved
- Finder tag interoperability so file and folder status remain visible outside the app
- Decoding modes that let you choose between speed, balanced review, and quality-first inspection

## Typical Workflow

1. Open a folder, image, ZIP archive, or Apple Photos collection.
2. Move quickly in Main, Grid, horizontal/vertical Filmstrip, and Navigator.
3. Mark keepers with rating, Pick, Reject, or color labels for local files, or the Photos Favorite heart for Apple Photos items.
4. Run Quick Organize presets or Batch Actions when repeated sorting or export is needed.
5. Open Quick Check or Compare when you need a closer call.
6. Continue with XMP-backed ratings and compatible Adobe labels in Lightroom or Capture One; SnapView Pick/Reject stays separate from Adobe's collection-label field.
7. Print or save a PDF from `Command-P` when you need a current-image print, selected-image pages, or a contact sheet.
8. Use Duplicate mode to clean up exact duplicates.

## Views And Tools

- `Main View`: single-image browsing with zoom, fit, rotate, and overlay tools
- `Grid View`: thumbnail selection for fast triage
- `Filmstrip View`: main image plus horizontal or vertical strip for quick pass review
- `Apple Photos`: Navigator source for Library, Favorites, Videos, Screenshots, and albums; SnapView shows Photos previews first, can request higher-resolution previews with Supporter Pass, promotes originals when ready, and uses a Photos-style Favorite heart instead of file-based rating/Pick/color controls
- `File Transfer`: drag, copy, and move selected images with compact thumbnail previews, selected-count feedback, Finder/external-app friendly file payloads, and destination-aware completion messages
- `Pro Layout View`: `Tab` turns on the Action Strip, Info Strip, and Select Tray over the current viewer surface. Navigator (`T`) and horizontal/vertical Filmstrip (`E`/`R`) are independent surfaces, not Pro Layout. The Main View `I` info overlay stays out of the way while Pro Layout View is on.
- `Quick Check`: score, warnings, and supporting reasons, plus histogram and detailed EXIF in one review set
- `Map Overlay`: `M` shows the current photo GPS location in a Histogram-sized overlay
- `Compare`: side-by-side review and best-shot recommendation
- `Duplicate`: exact duplicate grouping and cleanup workflow
- `Comic Reading Mode`: switch an opened folder or ZIP into a black reading surface; choose left-to-right or right-to-left two-page spreads from the HUD, advance spreads as `1-2 -> 3-4`, restore the last page for that same source, and confirm moving to the next folder/ZIP at the end
- `Quick Organize`: preset-based copy/move sorting, with up to three visible presets and auto rules limited to Pick and 5-star
- `Batch Actions`: previewed export/copy/move recipes for repeatable delivery tasks, with up to three visible recipes in SnapView 2.0
- `Supporter Pass`: optional support for SnapView in supported App Store builds, with Founding Supporter and regular Supporter Pass purchase periods while keeping the Basic viewer generous
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

- The DMG and Mac App Store channels use the same opt-in privacy defaults and saved-choice behavior: without a recorded choice both controls start off, and a launch decision is reused by the privacy page.
- Release builds are signed with Apple Developer ID.
- Release builds are notarized for standard macOS installation flow.
- SnapView works with files you open locally. It is designed around local browsing, review, and cleanup workflows.
- Apple Photos access is requested only when you open Apple Photos features, and Photos items stay in explicit browse/import/add/favorite workflows.
- Users without a recorded privacy decision can enable anonymized crash and app-usage data together at launch or Skip with both disabled. Each setting remains independently changeable later. If SnapView retained an unexpected-termination report, its existing send-once, always-send, or don't-send alert appears first. Photos, file contents, and personally identifying information are not sent.

## Notes

- ZIP browsing can be slower than normal folders because archive contents must be read before display.
- ZIP items are not normal filesystem files, so some save/interoperability features are limited there.
- Animated `gif` and `webp` play in Main View only. Other views currently show a still first frame.
- Finder interoperability is centered on color labels.
- XMP interoperability reads compact and element-form RDF, treats Adobe `Rating=-1` as Reject, and keeps SnapView Pick/Reject separate from Adobe `Label`, while large-folder refresh protects first display and immediate previous/next navigation.
- RAW+JPG pairing supports 3FR, DNG, CR3, RW2, ARW, DXO, and other common RAW extensions plus unambiguous case/canonical-Unicode stem variants while keeping folded-name collisions separate. XMP companion lookup supports canonical, extension-case, and image-double-extension names and rejects ambiguous folded matches.
- Local deletes move files to macOS Trash and can be undone during the current app session. SnapView does not maintain a next-launch delete recovery mode.
- Some formats depend on the decoder support available in the running macOS version.
- Supporter Pass is optional support, not a feature lock.
- App UI languages: Korean, English, Japanese, Simplified Chinese, Traditional Chinese, Spanish, French, German, Portuguese (Brazil), Italian, Dutch, Turkish, Polish, Swedish.
- App Store metadata also covers Indonesian, Malay, Thai, Vietnamese, Danish, Norwegian, Finnish, Czech, Hungarian, Romanian, and Greek.
- DMG releases are shipped as one universal download for Apple silicon and Intel Macs.
- Standard signed and notarized DMG or Mac App Store releases should install without a manual macOS security override. If macOS still warns, reinstall from the latest DMG or Mac App Store build.

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

`v0.10.0`부터의 GitHub용 상세 변경 이력은 별도 문서인 [공개 릴리즈 노트](https://github.com/youngchangjo/SnapView/blob/main/RELEASE_NOTES.md)에서 확인할 수 있습니다.

## 왜 SnapView인가요

SnapView는 사진을 가져온 뒤 실제로 하는 작업, 즉 빠르게 넘겨 보기, 초점 확인, 비슷한 컷 비교, 별점 선별, 중복 정리에 맞춰 설계되어 있습니다. 카탈로그를 먼저 만드는 방식보다 폴더 기반 검토 흐름에 더 가깝습니다.

핵심은 간단합니다. 가장 시간이 많이 드는 1차 선별은 SnapView에서 빠르게 끝내고, 그 결과를 Lightroom이나 Finder에서 그대로 이어서 쓰는 것입니다.

- 폴더와 ZIP 이미지를 빠르게 탐색
- App Store ZIP 해제는 크기 상한과 취소 경계를 지키며, 취소된 Apple Photos 프리뷰·원본 작업은 진행 중 요청과 임시 리소스를 정리합니다.
- 썸네일 디스크 캐시는 이미 시작한 작업을 마친 뒤 닫고, 여러 작업 핸들의 조회와 정리를 충돌 없이 조정합니다.
- 처음 읽는 원본 크기 확인과 JPEG/Finder 메타데이터 쓰기는 탐색 UI 밖의 백그라운드 경로에서 처리
- Apple Photos의 Library, Favorites, Videos, Screenshots, 앨범을 SnapView 안에서 탐색하고, Photos 모드에서는 사진 앱과 같은 좋아요 하트로 선별
- 현재 이미지 표시를 먼저 처리하고, 무거운 분석과 캐시 작업은 탐색 중 백그라운드로 분리
- 지원되는 HDR 사진의 기본 표시와 작은 HDR 배지. `HDR` 영역으로 HDR/SDR 표시를 전환하고, SDR은 원본 품질 표시로 돌아가며, 펼치기 버튼으로 자세한 정보 확인
- EXIF 나열이 아니라 점수와 근거를 보여주는 Quick Check
- GPS가 있는 사진을 확인하기 위한 지도 오버레이
- 비슷한 컷에서 베스트샷을 고르기 위한 Compare
- 동일 파일 정리를 위한 Duplicate 워크스페이스
- 열린 폴더나 ZIP을 검은 독서 화면으로 전환하는 만화책 보기
- `Q/W/E/R/T + Tab` 기준 탐색: Grid, Main, 가로 Filmstrip, 세로 Filmstrip, Navigator, 프로 레이아웃 뷰를 분리
- 가로·세로 Filmstrip 썸네일 작업은 실제 보이는 영역으로 제한하고, 화면 밖 이미지 상태는 탐색하거나 모드를 나갈 때 해제
- 빠른 정리 프리셋과 Batch Actions로 반복 복사/이동/내보내기 작업 정리. SnapView 2.0에서는 보이는 빠른 정리 프리셋과 Batch Actions 레시피를 각각 3개까지 제공하고, 빠른 정리 자동 규칙은 Pick과 별점 5만 노출
- `Command-P`로 macOS 기본 인쇄 패널에서 현재 이미지, 선택 이미지, 현재 폴더, 콘택트 시트를 인쇄하거나 PDF로 저장
- 별점, Pick, Reject, Finder 태그 중심의 키보드 선별
- compact 속성형과 element형을 함께 읽는 XMP 연동으로 별점과 Adobe 컬러 라벨을 이어가고, SnapView Pick/Reject는 Adobe `Label`과 분리해 저장하면서 기존 sidecar 메타데이터 보존
- Finder 태그 연동으로 macOS 파일/폴더 정리 단계까지 상태 유지
- 속도 우선 / 보통 / 화질 최우선 디코딩 모드로 작업 성격에 맞게 조절

## 대표 사용 흐름

1. 폴더, 이미지, ZIP 파일 또는 Apple Photos 컬렉션을 엽니다.
2. Main, Grid, 가로/세로 Filmstrip, Navigator를 오가며 빠르게 검토합니다.
3. 로컬 파일은 별점, Pick, Reject, 컬러 라벨로 선별하고, Apple Photos 항목은 좋아요 하트로 표시합니다.
4. 반복 정리가 필요하면 빠른 정리 프리셋이나 Batch Actions를 실행합니다.
5. 애매한 컷은 Quick Check 또는 Compare로 판단합니다.
6. XMP 별점과 호환되는 Adobe 라벨은 Lightroom 또는 Capture One에서 이어 쓰고, SnapView Pick/Reject는 Adobe의 컬렉션 라벨 필드와 분리해 유지합니다.
7. 출력이나 공유용 PDF가 필요하면 `Command-P`로 현재 이미지, 선택 이미지, 콘택트 시트를 인쇄하거나 PDF로 저장합니다.
8. 마지막에 Duplicate 모드로 정확한 중복 파일을 정리합니다.

## 뷰와 도구

- `Main View`: 단일 이미지 중심 탐색, 확대, 맞춤, 회전, 오버레이
- `Grid View`: 다량 썸네일 선별
- `Filmstrip View`: 메인 이미지와 가로/세로 스트립 기반 빠른 검토
- `Apple Photos`: Library, Favorites, Videos, Screenshots, 앨범을 Navigator 소스로 열고 빠른 프리뷰 후 원본을 준비하며, Photos 항목은 별점/Pick/컬러 대신 좋아요 하트를 사용
- `파일 전송`: 선택 이미지를 드래그, 복사, 이동할 때 작은 썸네일 프리뷰, 선택 장수 표시, Finder/외부 앱 친화 파일 전달, 목적지 기반 완료 피드백 제공
- `Pro Layout View`: `Tab`으로 현재 보기 위에 액션 스트립, 정보 스트립, 셀렉트레이를 켭니다. Navigator(`T`)와 가로/세로 Filmstrip(`E`/`R`)은 독립 표면이며 프로레이아웃이 아닙니다. Main View의 `I` 정보 오버레이가 켜져 있어도 Pro Layout View 동안에는 숨기고, 정보 스트립 메타데이터는 첫 화면 표시 뒤 갱신합니다.
- `Quick Check`: 점수, 경고, 근거 기반 촬영 품질 진단과 히스토그램/상세 EXIF 점검 세트
- `지도 오버레이`: `M`으로 현재 사진의 GPS 위치를 히스토그램 크기 오버레이에 표시
- `Compare`: 나란히 비교하며 베스트샷 선택
- `Duplicate`: 동일 파일 그룹 정리 워크플로우
- `만화책 보기`: 열린 폴더나 ZIP을 검은 독서 화면으로 전환하고 HUD에서 좌->우/우->좌 2페이지 펼침을 선택하며, 같은 소스의 마지막 페이지 복원과 다음 폴더/ZIP 이동 확인을 지원
- `빠른 정리`: 반복 복사/이동 선별을 최대 3개의 보이는 프리셋으로 실행하며, 빠른 정리 자동 규칙은 Pick과 별점 5만 노출
- `Batch Actions`: 최대 3개의 보이는 JPEG/PNG 내보내기, 복사, 이동 레시피를 프리뷰 후 실행
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

- 릴리즈 빌드는 Apple Developer ID 서명 상태입니다.
- 릴리즈 빌드는 notarization을 거쳐 일반적인 macOS 설치 흐름을 따릅니다.
- SnapView는 사용자가 연 로컬 파일을 기준으로 탐색, 검토, 정리하는 워크플로우를 중심으로 동작합니다.
- Apple Photos 권한은 Apple Photos 기능을 열 때만 요청하며, Photos 항목은 명시적인 탐색/가져오기/추가/좋아요 흐름 안에서만 처리합니다.
- DMG와 Mac App Store는 동일한 opt-in 개인정보 기본값과 저장 동작을 사용합니다. 선택 기록이 없으면 두 항목 모두 꺼져 있고, 실행 직후 선택은 시작하기 개인정보 화면의 체크 상태에 그대로 반영됩니다.
- 개인정보 선택 기록이 없는 사용자는 실행 직후 익명화된 비정상 종료·앱 사용 데이터를 함께 켜거나 `건너뛰기`로 둘 다 끌 수 있습니다. 두 항목은 이후 설정에서 각각 변경할 수 있습니다. 보류 중인 비정상 종료 보고서가 있으면 기존의 이번만 보내기·항상 자동 전송·보내지 않기 알림을 먼저 표시합니다. 사진이나 파일 내용 등 개인을 식별할 수 있는 정보는 전송하지 않습니다.

## 참고 사항

- ZIP 탐색은 일반 폴더보다 구조적으로 느릴 수 있습니다.
- ZIP 내부 항목은 실제 파일이 아니므로 일부 저장/연동 기능이 제한됩니다.
- animated `gif` / `webp`는 Main View에서만 재생되고, 다른 뷰에서는 첫 프레임 정지 이미지로 표시됩니다.
- Finder 연동은 컬러 라벨 중심입니다.
- XMP 연동은 compact 속성형과 element형 RDF를 모두 읽고 Adobe `Rating=-1`을 Reject로 해석하며, SnapView Pick/Reject는 Adobe `Label`과 분리합니다. 대용량 폴더에서는 첫 표시와 즉시 전/후 탐색을 먼저 보호합니다.
- 로컬 삭제는 macOS 휴지통으로 이동하며 현재 앱 실행 중에는 되돌릴 수 있습니다. 다음 실행 삭제 복구 모드는 사용하지 않습니다.
- RAW+JPG 페어링은 3FR, DNG, CR3, RW2, ARW, DXO 등 주요 RAW 확장자와 case/canonical-Unicode stem 차이를 지원하되 folded 이름 충돌은 분리합니다. XMP companion은 canonical·확장자 case·이미지 이중 확장자 이름을 지원하고 모호한 folded match는 선택하지 않습니다.
- 일부 포맷은 실행 중인 macOS 버전의 디코더 지원 범위에 따라 달라질 수 있습니다.
- 앱 UI 언어는 한국어, 영어, 일본어, 중국어 간체, 중국어 번체, 스페인어, 프랑스어, 독일어, 포르투갈어(브라질), 이탈리아어, 네덜란드어, 터키어, 폴란드어, 스웨덴어입니다.
- App Store 메타데이터는 인도네시아어, 말레이어, 태국어, 베트남어, 덴마크어, 노르웨이어, 핀란드어, 체코어, 헝가리어, 루마니아어, 그리스어도 포함합니다.
- DMG 릴리즈는 Apple Silicon과 Intel Mac을 함께 지원하는 단일 universal 다운로드로 제공합니다.
- 최신 서명/공증 DMG 또는 Mac App Store 릴리즈는 별도 macOS 보안 우회 없이 설치되는 것이 정상입니다. 보안 경고가 계속 보이면 최신 DMG를 다시 설치하거나 Mac App Store 버전을 사용해 주세요.
