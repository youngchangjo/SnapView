# SnapView Release Notes

Language: [🇺🇸 English](#english-current) | [🇰🇷 한국어](#korean-current)

## v0.10.1 (Current) - 2026-04-11

<a id="english-current"></a>

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
