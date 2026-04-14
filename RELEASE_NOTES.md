# SnapView Release Notes

## v0.10.3 (Current) - 2026-04-15

Language: [🇺🇸 English](#english-current) | [🇰🇷 한국어](#korean-current)

<a id="english-current"></a>

### English

#### What's New
- `Show in Finder` lets you jump from the current photo straight to its file in Finder.
- Overlay text is easier to read on bright photos with new shadow controls and smarter automatic contrast.
- HEIC and long-idle window restore behavior feel more reliable during real browsing.

#### Improvements
- Added `Show in Finder` to menus, context menus, and `⌘↩` for faster handoff to Finder.
- Added overlay text shadow controls with `Normal`, `Strong`, and `Auto` modes so filenames and compact EXIF stay readable on bright images.
- Added rating UI options so you can keep rating controls always visible, show them only on rated items, or hide them while preserving keyboard and menu rating actions.
- Added an optional `Quit when all windows are closed` preference. It stays off by default.
- Refined the app icon shape so it feels more natural in recent macOS icon presentation.

#### Notes
- HEIC/HEIF/HIF browsing remains supported and this release focuses on making restore/reopen behavior steadier, not changing the supported-format list.
- Animated playback is still limited to Main View.
- AVIF and JPEG XL remain dependent on macOS decoder support.

<a id="korean-current"></a>

### 한국어

#### 새로운 점
- `Show in Finder`를 추가해 현재 보고 있는 사진 파일을 Finder에서 바로 찾을 수 있게 했습니다.
- 밝은 사진 위에서도 파일명과 정보 오버레이가 더 잘 보이도록 그림자 옵션과 자동 모드를 추가했습니다.
- HEIC와 창 복귀 후 화면 표시 안정성을 더 다듬었습니다.

#### 개선된 점
- 메뉴, 컨텍스트 메뉴, `⌘↩`에서 `Show in Finder`를 바로 쓸 수 있습니다.
- 오버레이 텍스트 그림자를 `기본 / 강하게 / 자동`으로 고를 수 있고, 자동은 밝은 화면에서만 더 진하게 적용합니다.
- 별점 UI를 `항상 표시 / 자동 / 숨김`으로 조절할 수 있어, 화면은 더 단순하게 유지하면서도 별점 단축키와 메뉴는 그대로 쓸 수 있습니다.
- `모든 창을 닫으면 종료` 옵션을 추가했지만, 기본값은 macOS 관례에 맞게 꺼져 있습니다.
- 앱 아이콘 모서리를 더 부드럽게 다듬어 최신 macOS에서 조금 더 자연스럽게 보이도록 정리했습니다.

#### 참고
- HEIC/HEIF/HIF 지원 자체를 바꾼 릴리즈가 아니라, reopen/restore 상황에서 더 안정적으로 보이도록 다듬은 릴리즈입니다.
- animated 재생은 이번 버전에서도 Main View만 지원합니다.
- AVIF와 JPEG XL은 macOS 디코더 지원 여부에 따라 동작합니다.

## v0.10.2 - 2026-04-12

### English

#### What's New
- Animated GIF and animated WebP now play directly in Main View.
- Default app setup is easier with a simpler `Major Formats` option first, plus better visibility in Finder's `Open With` recommendations.
- Quick Check and file-opening behavior feel steadier during real photo review.

#### Improvements
- Main View can now play animated GIF and WebP without leaving your normal review flow.
- You can register common image formats first, then choose a broader registration only if you want it.
- Unsupported files now stop earlier with a clear message instead of feeling stuck or inconsistent.
- Reduced a Quick Check crash path that could happen while detailed review data was updating.
- Improved how the main window behaves while the file-open panel is on screen.
- Improved recovery when the currently open image's parent folder path changes.

#### Notes
- Animated playback is limited to Main View in this release. Other views still show a still frame.
- AVIF and JPEG XL remain dependent on macOS decoder support.

### 한국어

#### 새로운 점
- Main View에서 animated GIF와 animated WebP를 바로 재생할 수 있게 했습니다.
- 기본앱 등록은 `주요 포맷`부터 먼저 적용할 수 있게 단순화했고, Finder `이 앱으로 열기` 추천 목록 대응도 보강했습니다.
- Quick Check와 파일 열기 흐름의 안정성을 더 다듬었습니다.

#### 개선된 점
- Main View에서 animated GIF / WebP를 일반 선별 흐름 안에서 바로 볼 수 있습니다.
- 자주 쓰는 포맷만 먼저 기본앱으로 등록한 뒤, 원할 때만 더 넓게 등록할 수 있습니다.
- 지원하지 않는 파일은 멈춘 것처럼 보이기보다 바로 안내 메시지로 정리됩니다.
- 상세 Quick Check 갱신 중 발생할 수 있던 종료 경로를 줄였습니다.
- 파일 열기 패널이 떠 있는 동안 메인 창이 어색하게 보이던 부분을 보정했습니다.
- 현재 열려 있는 이미지의 상위 폴더 경로가 바뀐 경우 복구 흐름을 보강했습니다.

#### 참고
- animated 재생은 이번 버전에서 Main View만 지원합니다. 다른 보기에서는 정지 이미지로 보입니다.
- AVIF와 JPEG XL은 macOS 디코더 지원 여부에 따라 동작합니다.

## v0.10.1 - 2026-04-11

### English

#### Highlights
- Added a new `Appearance Mode` setting so you can choose `System`, `Light`, or `Dark` and keep the app on the look you prefer.
- Improved light mode so Main, Grid, Filmstrip, and Manage feel more balanced and easier to read.
- Made `Reject` marks easier to notice and improved a few rough edges around fast review and image-open warnings.

#### UX / UI
- Light mode now uses a softer desktop-style surface instead of looking too dark or too bright.
- Manage view text and status summaries are easier to read, especially in light mode and inactive windows.
- `Pick` and `Reject` markings are easier to spot while reviewing in the main view, Grid, and Filmstrip.

#### Performance
- Moving quickly after `Cmd+Delete` is more reliable, with the next image updating more consistently.
- Opening or reattaching images is more stable during fast browsing.
- Light mode surfaces now behave more consistently across the app.

#### Fixes
- Fixed cases where `Reject` was too easy to miss during review.
- Fixed cases where the next image did not refresh correctly after rapid deletes.
- Reduced a crash path that could happen while reopening or attaching images.
- Added `Close` and `Esc` support to the `Could not open image` warning so it can be dismissed more easily.
- Improved Manage view readability in light mode.

#### Known Issues
- ZIP browsing can still be slower than normal folders.
- Some very large or unusual files may still open in a more compatible display mode.

#### Install / Update
1. Download `SnapView-0.10.1.dmg`.
2. Drag `SnapView.app` into `Applications`.
3. Replace the previous version if needed.
4. Future updates are checked automatically and shown with a user confirmation prompt.

#### Notes
- This update is mainly focused on making everyday review work feel steadier and easier to read.

<a id="korean-current"></a>

### 한국어

#### Highlights
- `화면 모드` 설정을 추가해 `시스템 / 라이트 / 다크` 중 원하는 모양을 직접 고를 수 있게 했습니다.
- Main, Grid, Filmstrip, Manage의 라이트 모드를 더 자연스럽고 읽기 편하게 다듬었습니다.
- `Reject` 표시를 더 잘 보이게 하고, 빠른 선별 중 나타나던 몇 가지 거슬리는 동작도 함께 다듬었습니다.

#### UX / UI
- 라이트 모드가 너무 어둡거나 지나치게 밝게 보이지 않도록 화면 톤을 다시 맞췄습니다.
- Manage 뷰의 상태 요약과 텍스트 가독성을 높였습니다.
- 메인 보기, Grid, Filmstrip에서 `Pick`과 `Reject` 상태를 더 빨리 알아볼 수 있게 했습니다.

#### Performance
- `Cmd+Delete` 뒤 다음 사진이 더 안정적으로 바로 보이도록 했습니다.
- 빠르게 이미지를 열거나 다시 붙는 상황에서 안정성을 높였습니다.
- 라이트 모드 화면들이 더 일관되게 보이도록 정리했습니다.

#### Fixes
- `Reject` 표시가 잘 안 보이던 문제를 수정했습니다.
- 빠르게 삭제를 반복한 뒤 다음 사진이 바로 안 보이던 문제를 줄였습니다.
- 이미지를 다시 열거나 붙이는 과정에서 생길 수 있던 종료 문제를 완화했습니다.
- `이미지를 열지 못했습니다` 안내에 `닫기`와 `Esc` dismiss를 추가했습니다.
- 라이트 모드 Manage 뷰 가독성을 더 보정했습니다.

#### Known Issues
- ZIP 탐색은 일반 폴더보다 구조적으로 느릴 수 있습니다.
- 아주 크거나 특수한 파일은 더 안정적인 표시 방식으로 열릴 수 있습니다.

#### Install / Update
1. `SnapView-0.10.1.dmg` 다운로드
2. `SnapView.app`을 `Applications`로 드래그
3. 기존 버전이 있으면 덮어쓰기 후 실행
4. 이후 새 버전이 배포되면 앱이 자동으로 확인하고 설치 여부를 묻습니다

#### Notes
- 이번 업데이트는 빠른 선별 흐름과 라이트 모드 사용성을 다듬는 데 집중했습니다.

## v0.10.0 - 2026-04-09

### English

#### Highlights
- Introduced fullscreen `Slideshow v1` for hands-off review of the current folder, selection, or browsing context.
- Added slideshow controls for speed, transitions, loop, shuffle, and on-screen playback status.
- Improved slideshow smoothness and fullscreen presentation, including better handling for smaller images.

#### UX / UI
- Slideshow can be started from the titlebar, Tools menu, and major review views.
- The slideshow HUD was simplified so speed and transition choices are easier to read at a glance.
- Added a `Scale Small Images to Fit` option for fuller fullscreen playback.
- Standardized slideshow start and exit around `Shift + Enter`.

#### Performance
- Crossfade playback is more reliable during normal browsing and shuffle playback.
- The next image is prepared more intelligently to reduce rough transitions.
- When a smooth transition is not possible in time, slideshow playback falls back more cleanly.

#### Fixes
- Fixed `Fade to Black` so it feels distinct from `Crossfade`.
- Fixed slideshow start behavior for paused and autoplay entry cases.
- Fixed fullscreen playback for smaller images so they fill the screen more naturally.
- Improved window recovery behavior after closing and reopening the main view.

#### Known Issues
- Large ZIP-based sets can still transition less smoothly than normal folders.
- Very heavy image sets may still look less smooth than normal folders.

#### Install / Update
1. Download `SnapView-0.10.0.dmg`.
2. Drag `SnapView.app` into `Applications`.
3. Replace the previous version if needed.
4. Future updates are checked automatically and shown with a user confirmation prompt.

#### Notes
- This release introduced slideshow as a new fullscreen review mode.

### 한국어

#### Highlights
- 현재 폴더나 선택 상태를 그대로 이어받는 전체화면 `슬라이드쇼 v1`을 추가했습니다.
- 속도, 전환, 루프, 셔플, 재생 상태를 바로 볼 수 있는 슬라이드쇼 HUD를 추가했습니다.
- 작은 이미지와 전환 품질을 더 자연스럽게 보여주도록 슬라이드쇼 화면을 다듬었습니다.

#### UX / UI
- 타이틀바, `도구` 메뉴, 주요 보기 화면에서 같은 방식으로 슬라이드쇼를 시작할 수 있습니다.
- HUD를 값 중심으로 단순화해 속도와 전환 설정을 더 빨리 읽을 수 있게 했습니다.
- `작은 이미지 확대` 옵션을 추가해 전체화면 재생을 더 보기 좋게 만들었습니다.
- 슬라이드쇼 시작/종료 기준을 `Shift + Enter`로 정리했습니다.

#### Performance
- 크로스페이드가 일반 재생과 셔플 재생에서 더 안정적으로 보이도록 했습니다.
- 다음 이미지를 더 똑똑하게 준비해 전환이 거칠게 보이는 경우를 줄였습니다.
- 부드러운 전환이 어려운 경우에도 화면이 덜 튀도록 정리했습니다.

#### Fixes
- `Fade to Black` 전환이 `Crossfade`와 더 분명하게 다르게 보이도록 수정했습니다.
- 자동 재생과 일시정지 시작 흐름을 더 자연스럽게 정리했습니다.
- 전체화면에서 작은 이미지가 너무 작게 보이던 문제를 보완했습니다.
- 창을 닫았다가 다시 열 때 메인 창 복구가 더 일관되게 동작하도록 했습니다.

#### Known Issues
- 대형 ZIP 세트는 일반 폴더보다 전환이 덜 매끄러울 수 있습니다.
- 아주 무거운 이미지 세트는 일반 폴더보다 전환이 덜 매끄러울 수 있습니다.

#### Install / Update
1. `SnapView-0.10.0.dmg` 다운로드
2. `SnapView.app`을 `Applications`로 드래그
3. 기존 버전이 있으면 덮어쓰기 후 실행
4. 이후 새 버전이 배포되면 앱이 자동으로 확인하고 설치 여부를 묻습니다

#### Notes
- 이 릴리즈는 슬라이드쇼를 정식 리뷰 모드로 추가한 첫 버전입니다.
