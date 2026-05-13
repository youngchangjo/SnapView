# SnapView Release Notes

## v1.7.0 (Current) - 2026-05-14

Language: [🇺🇸 English](#english-170) | [🇰🇷 한국어](#korean-170)

<a id="english-170"></a>

### English

#### What's New
- **More App Languages**: SnapView now includes app UI support for Portuguese (Brazil), Italian, Dutch, Turkish, Polish, and Swedish.
- **Scroll Direction Controls**: Mouse wheel and trackpad navigation are more consistent across Main, Filmstrip, Manage, and Video views. Direction customization can be enabled separately for mouse/trackpad and vertical/horizontal scrolling.
- **Viewer Preference Memory**: SnapView can remember the info overlay state, preserve image zoom while moving between images, and use a pure black dark viewer background.
- **Same-image Return Recovery**: Returning to SnapView from another app or window now preserves the current photo's zoom and pan state even when cross-image zoom preservation is disabled.
- **Photo Info Overlay Flags**: Photo Info Overlay visibility now also controls main-view Pick/Reject badges, so those markers no longer remain on top of the image when the info overlay is off.
- **Rotation Save Reliability**: JPEG rotation saves are confirmed before success is shown, duplicate rotation requests are ignored, thumbnails refresh after original changes, and Current Folder rotation view can save only the current JPG/JPEG image.
- **Original Quality Loading**: Quality-first mode now requests the current image at original quality on network drives. Balanced and Quality modes more reliably upgrade settled preview or resized images to original quality, and show a clear status when original loading fails.
- **Smoother Original Quality Transition**: Original-quality upgrades now crossfade from resized images, use a shorter apply fade, and start sooner after navigation settles.
- **Video Playback Fixes**: Ended videos can be replayed with the playback button or `Space`, and `Option`+Left/Right seeks videos in 5-second steps.
- **Default App Registration Reliability**: SnapView briefly rechecks Launch Services after a successful registration request to avoid false failure alerts.
- **Move To Folder**: Move the current file or explicitly selected files to another folder from inside SnapView.
- **Toolbar Tooltips**: The runtime titlebar tooltip path now provides supported-language help text for top toolbar icon buttons.

#### Improvements
- Navigation arrows and video controls now hide more predictably instead of staying over images or videos while the pointer is idle.
- Fullscreen video presentation uses the available viewer surface more cleanly.
- Compare and Reference Compare now render images opened from ZIP archives correctly instead of showing black panels.
- Copy, delete, and move actions now use the current item or explicit selections more reliably.
- Optional confirmation-free `Delete`/`Backspace` moves files to macOS Trash only and remains disabled by default.

<a id="korean-170"></a>

### 한국어

#### 새로운 점
- **앱 UI 언어 추가**: 포르투갈어(브라질), 이탈리아어, 네덜란드어, 터키어, 폴란드어, 스웨덴어 앱 UI 지원을 추가했습니다.
- **스크롤 방향 설정**: Main, Filmstrip, Manage, Video 뷰에서 마우스 휠과 트랙패드 탐색이 더 일관되게 동작합니다. 필요하면 마우스/트랙패드, 상하/좌우 방향을 따로 사용자화할 수 있습니다.
- **보기 설정 기억**: 정보 오버레이 표시 상태를 기억하고, 이미지 이동 시 확대 비율을 유지하며, 다크 모드에서 완전한 검은 배경을 사용할 수 있습니다.
- **같은 사진 복귀 상태 유지**: 다른 앱이나 다른 창에 갔다가 SnapView로 돌아왔을 때, 이미지 간 확대 유지 옵션이 꺼져 있어도 현재 사진의 확대/이동 상태를 유지합니다.
- **정보 오버레이 플래그**: 정보 오버레이 표시 설정이 메인 보기의 Pick/Reject 배지도 함께 제어해, 정보 오버레이를 끄면 해당 표시가 이미지 위에 남지 않습니다.
- **회전 저장 안정성**: JPEG 회전 저장은 성공 확인 후 완료를 안내하고, 겹치는 키 처리 경로의 중복 회전 명령을 무시하며, 원본 변경 후 썸네일을 새로 고칩니다. 현재 폴더 회전 보기는 현재 JPG/JPEG 이미지 하나만 저장할 수 있습니다.
- **원본 품질 전환 안정화**: 품질 우선 모드에서는 네트워크 드라이브에서도 현재 이미지를 원본 품질로 요청합니다. 보통/품질 우선 모드에서는 탐색이 멈춘 뒤 프리뷰 또는 리사이즈 이미지가 원본 품질로 더 안정적으로 전환되며, 실패 시 상태를 명확하게 표시합니다.
- **원본 품질 전환 체감 개선**: 리사이즈 이미지에서 원본 품질로 전환될 때 자연스럽게 페이드되고, 적용 페이드를 짧게 유지하며, 탐색이 멈춘 뒤 원본 요청을 더 빠르게 시작합니다.
- **동영상 재생 보정**: 끝까지 재생된 동영상은 재생 버튼 또는 `Space`로 처음부터 다시 재생할 수 있고, `Option`+왼쪽/오른쪽으로 5초 단위 탐색을 할 수 있습니다.
- **기본 앱 등록 안정성**: 기본 프로그램 등록 요청이 성공한 뒤 Launch Services 반영을 짧게 재확인해 실제 등록됐는데 실패로 보이는 알림을 줄였습니다.
- **폴더로 이동**: 현재 파일 또는 명시적으로 선택한 파일을 SnapView 안에서 다른 폴더로 이동할 수 있습니다.
- **툴바 툴팁**: 상단 툴바 아이콘 버튼에 런타임 타이틀바 툴팁 경로와 지원 언어 도움말 문구를 적용했습니다.

#### 개선된 점
- 이미지/동영상 좌우 화살표와 동영상 컨트롤이 포인터가 멈춘 상태에서 콘텐츠 위에 계속 남지 않도록 정리했습니다.
- 전체화면 동영상이 보기 영역을 더 깔끔하게 사용하도록 조정했습니다.
- ZIP 내부 이미지를 Compare와 Reference Compare에서 열 때 검은 화면으로 보일 수 있던 문제를 수정했습니다.
- 복사, 삭제, 이동이 현재 항목 또는 명시 선택 항목을 더 정확하게 기준으로 삼습니다.
- 확인 없는 `Delete`/`Backspace`는 선택 옵션이며, 켜도 macOS 휴지통 이동만 수행하고 기본값은 꺼짐입니다.

## v1.6.0 - 2026-05-09

Language: [🇺🇸 English](#english-160) | [🇰🇷 한국어](#korean-160)

<a id="english-160"></a>

### English

#### What's New
- **Rotate And Flip**: Added clockwise rotation and horizontal flip for the current image.
- **JPEG Original Save For Rotation**: Added an option to save current-file rotation directly to the JPEG original. Current-folder rotation remains screen-only.
- **Space Zoom Toggle**: In Main, Filmstrip, and Manage image views, `Space` now toggles between 100% view and the previous zoom level.
- **Repeat Shortcut Clear**: Added an optional setting to clear a rating or Pick by pressing the same rating/Pick shortcut again.
- **Reset Settings**: Added a reset-all-settings button.
- **JPEG Finder Date Alignment**: Added an advanced JPEG option to align Finder creation/modified dates with the edited capture date.

#### Improvements
- Reduced cases where a preview image could remain after fast browsing instead of promoting to the final image display.
- Returning to SnapView now preserves video playback position and image zoom/pan state more reliably.
- Reduced unnecessary state updates during fast browsing through small local images.
- Rating clear now works more reliably from English input and keyboard layouts using the physical `₩`/`\` key.

<a id="korean-160"></a>

### 한국어

#### 새로운 점
- **회전과 좌우 반전**: 현재 이미지 시계 방향 회전과 좌우 반전을 추가했습니다.
- **회전 후 JPEG 원본 저장**: 현재 파일 회전에서 JPEG 원본에 바로 저장할 수 있는 옵션을 추가했습니다. 현재 폴더(전체 파일) 회전은 기존처럼 화면 표시 기준으로 적용됩니다.
- **Space 배율 토글**: Main, Filmstrip, Manage 이미지 보기에서 `Space`로 100% 보기와 이전 배율을 빠르게 오갈 수 있습니다.
- **같은 단축키로 해제**: 같은 별점 또는 Pick 단축키를 한 번 더 눌러 해제할 수 있는 선택 옵션을 추가했습니다.
- **설정 초기화**: 모든 설정을 기본값으로 되돌리는 버튼을 추가했습니다.
- **JPEG Finder 날짜 정렬**: JPEG 원본 메타데이터 저장 시 Finder 생성일/수정일도 편집한 촬영 날짜에 맞출 수 있는 고급 옵션을 추가했습니다.

#### 개선된 점
- 빠른 탐색 중 프리뷰 이미지가 최종 이미지 표시로 전환되지 않고 남는 상황을 줄였습니다.
- SnapView로 다시 돌아왔을 때 동영상 재생 위치와 이미지 확대/이동 상태를 더 안정적으로 유지합니다.
- 작은 로컬 이미지를 빠르게 넘길 때 불필요한 상태 갱신을 줄였습니다.
- 영문 입력/키보드 환경에서도 `₩`/`\` 물리 키 별점 취소가 더 안정적으로 동작합니다.

## v1.5.2 - 2026-05-06

Language: [🇺🇸 English](#english-152) | [🇰🇷 한국어](#korean-152)

<a id="english-152"></a>

### English

#### Improvements

SnapView 1.5.2 focuses on smoother real-world browsing and clearer OCR support.

- Fast browsing through large local folders and network folders is more consistent, with fewer cases where the index advances but the image display falls behind.
- Switching between Images Only and Include Videos now refreshes the current folder list correctly.
- Unchanged folders avoid unnecessary reindexing, and image-only network folders skip slow video merge sorting.
- Quick Check and manual OCR now explicitly support Korean and English text recognition.
- EXIF and Quick Check information timing has been restored so metadata stays useful without getting ahead of image display.

<a id="korean-152"></a>

### 한국어

#### 개선된 점

SnapView 1.5.2에서는 실제 사진 탐색 흐름의 표시 안정성과 OCR 지원 범위를 개선했습니다.

- 대량 로컬 폴더와 네트워크 폴더에서 사진을 빠르게 넘길 때 인덱스만 앞서가고 이미지 표시가 늦는 상황을 줄였습니다.
- 설정에서 `이미지만`/`동영상 포함`을 바꾸면 현재 폴더 목록을 올바르게 다시 구성합니다.
- 실제 미디어 목록이 같을 때는 불필요한 재인덱싱을 줄이고, 이미지 전용 네트워크 폴더에서는 느린 동영상 병합 정렬 경로를 피합니다.
- Quick Check와 수동 OCR의 명시 지원 언어를 한국어와 영어로 정리하고 한글 인식을 보강했습니다.
- EXIF와 Quick Check 정보 표시 타이밍을 이미지 탐색 흐름에 더 자연스럽게 맞췄습니다.

## v1.5.1 - 2026-05-04

Language: [🇺🇸 English](#english-151) | [🇰🇷 한국어](#korean-151)

<a id="english-151"></a>

### English

#### Improvements

Improved browsing performance when moving quickly through photos.

Image transitions now keep up more smoothly during repeated arrow-key navigation, and metadata updates are better balanced so they do not get ahead of the image display.

Also fixed an issue where the decoding mode display could appear incorrect in some screens.

<a id="korean-151"></a>

### 한국어

#### 개선된 점

사진을 빠르게 넘길 때의 체감 성능을 개선했습니다.

특히 방향키를 길게 눌러 연속으로 탐색할 때 이미지 전환이 더 부드럽게 따라오도록 조정했습니다.

또한 일부 화면에서 디코딩 모드 표시가 올바르게 반영되지 않을 수 있던 문제를 수정했습니다.

## v1.5.0 - 2026-05-03

Language: [🇺🇸 English](#english-150) | [🇰🇷 한국어](#korean-150)

<a id="english-150"></a>

### English

#### What's New
- **Photo And Video Together**: SnapView can now browse supported videos alongside photos in the same folder. The first supported video set is `MP4`, `MOV`, and `M4V`.
- **Simple Video Playback**: Main, Filmstrip, and Manage views now support video playback with autoplay, volume control, timeline seeking, and `Space` for play/pause.
- **Image Export**: Create resized copies as `JPEG` or `PNG` with simple presets for Instagram, Threads, X, blogs, or a custom size.
- **Date And Location Edits**: Adjust photo date/time and GPS metadata with a cautious workflow that blocks unsupported write paths.
- **On-device OCR**: Run Korean/English text recognition from Quick Check, copy recognized text, and optionally show yellow text highlights directly on the image.

#### Improvements
- Video metadata is shown in the same spirit as photo metadata, including resolution, file size, codec, FPS, bitrate, HDR, date, and device details when available.
- Video-incompatible actions such as image export and rotation are disabled while a video is selected.
- Export results now summarize created files, file sizes, partial failures, and quick actions to open the file or folder.
- Quick Check OCR automatic execution is optional and remains off by default.
- Localization coverage has been expanded across Settings, intro prompts, Quick Check, Compare, Duplicate Review, image export, video settings, menus, and help surfaces.
- Traditional Chinese, French, and German are included in the broader UI language set.
- Appearance updates after changing color mode in Settings are more reliable.
- Intro, Quick Start, and overlay surfaces are easier to read in both light and dark mode.

<a id="korean-150"></a>

### 한국어

#### 새로운 점
- **사진과 동영상을 함께 탐색**: 같은 폴더 안의 사진과 동영상을 함께 넘겨볼 수 있습니다. 1차 지원 대상은 `MP4`, `MOV`, `M4V`입니다.
- **간단한 동영상 재생**: Main, Filmstrip, Manage 뷰에서 동영상을 재생할 수 있고, 자동재생, 음량 조절, 타임라인 이동, `Space` 재생/일시정지를 지원합니다.
- **이미지 내보내기**: `JPEG` 또는 `PNG` 복사본을 만들 수 있고, Instagram, Threads, X, 블로그, 수동 크기 프리셋을 제공합니다.
- **촬영 시각과 위치 보정**: 사진의 날짜/시간과 GPS 정보를 안전한 흐름으로 수정할 수 있습니다. 지원하지 않는 원본 쓰기 경로는 차단합니다.
- **온디바이스 OCR**: Quick Check에서 사진 속 한국어/영어 문자를 인식하고 복사할 수 있으며, 필요하면 이미지 위에 노란 하이라이트로 인식 영역을 표시합니다.

#### 개선된 점
- 동영상 선택 시 사진 정보와 비슷한 흐름으로 해상도, 파일 크기, 코덱, FPS, 비트레이트, HDR, 날짜, 기기 정보를 표시합니다.
- Quick Check OCR 자동 실행은 선택 옵션이며 기본값은 꺼짐입니다.
- 설정, 인트로 안내, Quick Check, Compare, 중복사진정리, 이미지 내보내기, 동영상 설정, 메뉴, 도움말 등 앱 전반의 다국어 적용 범위를 넓혔습니다.
- 중국어 번체, 프랑스어, 독일어 UI 지원을 추가로 보강했습니다.
- 설정에서 색상 모드를 변경할 때 열린 창에 더 안정적으로 반영되도록 개선했습니다.
- 라이트/다크 모드에서 인트로, 빠른 시작, 정보 오버레이가 더 읽기 좋게 보이도록 개선했습니다.

---

## v1.0.2 - 2026-04-29

Language: [🇺🇸 English](#english-102) | [🇰🇷 한국어](#korean-102)

<a id="english-102"></a>

### English

#### What's New
- **More App Languages**: SnapView now includes Japanese, Simplified Chinese, and Spanish for the main app interface.
- **Trackpad Browsing**: Two-finger trackpad swipes can now move to the previous or next image, with an option to match macOS natural scrolling.
- **Universal Mac Compatibility**: The Mac App Store build now includes both Apple Silicon and Intel-compatible binary slices.

#### Improvements
- Compare and Reference Compare have been polished so reference/candidate labels, rating, Pick, and color label controls behave more consistently.
- Quick Check now shows important EXIF details sooner, remembers collapsed sections, and keeps location information easier to review when GPS data is available.
- Mouse wheel and trackpad behavior is more consistent across Main, Filmstrip, and Manage views. When zoomed in, two-finger scrolling pans the image instead of accidentally changing photos.
- Menus, context menus, settings, and help text now follow the selected app language more consistently, including Japanese, Simplified Chinese, and Spanish.
- File access guidance is clearer in both the direct download version and the Mac App Store version, with App Store permission recovery kept separate from direct-download access errors.
- Intro and overlay surfaces are easier to read on bright images, with a more consistent background style.
- SnapView is more stable when folder contents change while browsing, including cases where images are moved or deleted outside the app.

<a id="korean-102"></a>

### 한국어

#### 새로운 점
- **지원 언어 확대**: 일본어, 중국어(간체), 스페인어 UI 지원을 추가했습니다.
- **트랙패드 탐색**: 두 손가락 스와이프로 이전/다음 사진을 이동할 수 있고, macOS의 자연스러운 스크롤 방향에 맞출 수 있습니다.
- **Universal Mac 호환성**: Mac App Store 빌드에 Apple Silicon과 Intel Mac 호환 바이너리를 함께 포함했습니다.

#### 개선된 점
- Compare와 Reference Compare 화면을 더 일관되게 개선했습니다. 기준/비교 대상 표시, 별점, Pick, 컬러 라벨 조작 흐름을 맞췄습니다.
- Quick Check에서 주요 EXIF 정보가 더 바로 보이고, 접기/펼치기 상태가 다음 실행에도 유지됩니다. GPS 정보가 있는 사진은 위치 정보를 더 쉽게 확인할 수 있습니다.
- Main, Filmstrip, Manage에서 마우스 휠과 트랙패드 동작이 더 일관되게 동작합니다. 확대된 상태에서는 두 손가락 스크롤이 사진 이동보다 화면 이동을 우선합니다.
- 메뉴, 우클릭 메뉴, 설정, 도움말 문구가 선택한 앱 언어를 더 일관되게 따르도록 정리했습니다. 일본어, 중국어(간체), 스페인어에서도 일부 항목이 영어로 남던 문제를 줄였습니다.
- 직접 다운로드 버전과 Mac App Store 버전에서 파일 접근 문제를 더 이해하기 쉽게 안내합니다. App Store 권한 재허용 흐름과 직접 다운로드 버전의 접근 실패 안내도 분리했습니다.
- 밝은 사진 위에서도 인트로와 정보 오버레이가 더 잘 보이도록 배경과 가독성을 개선했습니다.
- 사진을 보는 중 폴더 안의 이미지가 이동되거나 삭제되는 상황에서도 더 안정적으로 동작하도록 보강했습니다.

---

## v1.0.1 - 2026-04-27

Language: [🇺🇸 English](#english-101) | [🇰🇷 한국어](#korean-101)

<a id="english-101"></a>

### English

#### What's New
- **Window Size Shortcuts**: Quickly resize the SnapView window with `Ctrl+1` (default), `Ctrl+2` (1.5×), `Ctrl+3` (2×), `Ctrl+4` (2.5×), or `Ctrl+0` (fill screen). Also available from View > Window Size in the menu bar.
- **Window On Launch Setting**: Choose whether SnapView starts with the system default size, restores your last window size, or opens fullscreen. Find it in Settings > General.

#### Improvements
- Color labels (Red, Orange, Yellow, Green, Blue, Purple, Gray) now display in English when the app language is set to English, and integrate correctly with Finder tags in both languages.
- `Cmd+A` in Grid View now selects only the filtered items (by rating, flag, or label) instead of all photos in the folder.
- Default app registration is more reliable: the app bundle is now pre-registered with Launch Services before setting file associations, and the result is verified after each attempt.
- When default app registration partially fails, a dialog now lists the failed extensions and provides manual registration guidance.
- The sandbox permission dialog (App Store build) now includes a brief explanation of the policy.
- Help menu: a "SnapView Full Manual" and "Release Notes" link are now available in the SnapView menu.
- Light mode: the Quick Start box and intro screen now match the light appearance properly.
<a id="korean-101"></a>

### 한국어

#### 새로운 점
- **창 크기 단축키**: `Ctrl+1`(기본), `Ctrl+2`(1.5배), `Ctrl+3`(2배), `Ctrl+4`(2.5배), `Ctrl+0`(화면 채우기)로 창 크기를 빠르게 전환할 수 있습니다. 메뉴 > View > 창 크기에서도 사용 가능합니다.
- **시작 시 창 설정**: SnapView를 시스템 기본 크기로 시작할지, 마지막 창 크기를 복원할지, 전체 화면으로 시작할지 선택할 수 있습니다. 설정 > 일반에서 변경하세요.

#### 개선 사항
- 컬러 라벨(빨간색, 주황색, 노란색, 초록색, 파란색, 보라색, 회색)이 앱 언어가 영어일 때 영문으로 표시되며, Finder 태그와도 양쪽 언어 모두 올바르게 연동됩니다.
- 그리드 뷰에서 별점/플래그/라벨로 필터 후 `Cmd+A`를 실행하면 전체 폴더가 아닌 필터된 항목만 선택됩니다.
- 기본 앱 등록 안정성 향상: 등록 전 Launch Services에 앱 번들을 먼저 등록하고, 각 확장자별 등록 결과를 검증합니다.
- 기본 앱 등록이 일부 실패하면 실패한 확장자 목록과 수동 등록 방법을 안내 다이얼로그로 표시합니다.
- 샌드박스 권한 요청 다이얼로그(App Store 빌드)에 정책 안내 문구를 추가했습니다.
- SnapView 메뉴에 "전체 매뉴얼" 및 "릴리즈 노트" 링크가 추가되었습니다.
- 라이트 모드: 빠른 시작 박스와 인트로 화면이 라이트 모드에 맞게 개선되었습니다.
---

## v1.0.0 - 2026-04-25

Language: [🇺🇸 English](#english-current) | [🇰🇷 한국어](#korean-current)

<a id="english-current"></a>

### English

#### What's New
- **SnapView 1.0.0 Official Release & Mac App Store**: SnapView is now officially a stable 1.0.0 release! We are also introducing a dedicated Mac App Store build. Both the direct download (DMG) and Mac App Store channels provide a polished, stable experience, and all Beta badges have been removed.
- **Reference Compare Mode**: Compare mode is more powerful with a new `Reference` comparison mode alongside the standard `Selection` mode. Press `R` to toggle between them.
- **File Renaming**: You can now rename files directly within SnapView using `F2` or the context menu.
- **Window Open Policy**: Choose how SnapView opens files from Finder—reuse a `Single Window` or open in `Multiple Windows`.
- **Smarter External App Handoff**: You can now set whether to prioritize the RAW or JPG file when opening a pair in an external app. Use `⌥⌘O` to quickly choose another app.

#### Improvements
- In `Reference` compare mode, you can anchor one photo and move through candidates, using arrow keys and `Tab` to easily shift focus between panels.
- Choose whether to resume your last compare session or start fresh based on your current context when entering Compare mode.
- The photo count overlay is now customizable: show `Current / Total`, just `Current`, or hide it entirely.
- Added a `Resort After Rename` preference to automatically keep your files in order when names change.
- Restyled the title bar for a flatter, cleaner look that matches modern macOS surfaces.
- Greatly improved the visual stability when opening files from Finder in Single Window mode, reducing screen flashes and keyboard focus issues.
- External app selection is simpler with a unified `Open with another app…` flow.

#### Notes
- The Mac App Store build is a sandboxed stable release lane. The DMG lane remains the faster direct-download lane.
- ZIP browsing remains supported in both lanes, with different backends chosen for the distribution channel.

<a id="korean-current"></a>

### 한국어

#### 새로운 점
- **SnapView 1.0.0 정식 출시 및 Mac App Store 지원**: 드디어 SnapView 1.0.0 정식 버전을 선보입니다! 더불어 Mac App Store를 위한 전용 빌드가 추가되었습니다. 이제 직접 다운로드(DMG)와 App Store 채널 모두에서 베타 꼬리표를 뗀 가장 안정적인 버전을 만나보실 수 있습니다.
- **Reference(기준) 비교 모드**: 기존 `Selection(선택)` 모드 외에 기준 사진을 고정하고 비교하는 `Reference(기준)` 모드가 추가되었습니다. `R` 키로 쉽게 전환할 수 있습니다.
- **파일 이름 변경**: SnapView 안에서 바로 파일 이름을 바꿀 수 있습니다 (`F2` 키 또는 우클릭 메뉴 사용).
- **창 열기 정책**: Finder에서 파일을 열 때 기존 창을 재사용할지(단일 창) 새 창을 띄울지(멀티 창) 설정에서 선택할 수 있습니다.
- **똑똑해진 외부 앱 열기**: RAW+JPG 짝 파일 중 어떤 포맷을 먼저 외부 앱으로 넘길지 설정할 수 있고, `⌥⌘O` 단축키로 앱 선택 창을 바로 띄울 수 있습니다.

#### 개선된 점
- `Reference(기준)` 비교 모드에서는 한쪽 패널에 기준 사진을 고정해두고, 다른 패널의 후보 사진만 넘겨보며 비교할 수 있습니다. 방향키와 `Tab`으로 패널 간 포커스 이동을 지원합니다.
- Compare 모드 진입 시 이전 상태를 이어서 할지(Resume Last Session), 새로 시작할지(Current Context) 선택할 수 있습니다.
- 화면 상단의 사진 수 표시를 `현재/전체`, `현재`, `숨김` 중 취향에 맞게 변경할 수 있습니다.
- 이름 변경 후 자동으로 정렬 순서를 맞추는 `이름 변경 후 재정렬` 옵션이 추가되었습니다.
- 타이틀바 영역을 더 깔끔하고 평탄한 톤으로 정리해 화면 전환 시 일관성을 높였습니다.
- 단일 창 모드에서 Finder를 통해 새 파일을 더블클릭으로 열 때, 화면이 깜빡이거나 단축키가 먹지 않던 문제를 대폭 개선했습니다.
- 다른 앱으로 사진을 보낼 때, 한 곳으로 정리된 `다른 앱으로 열기…` 흐름으로 일관성 있게 열 수 있습니다.

#### 참고
- Mac App Store 빌드는 sandbox를 적용한 안정판 배포 lane입니다. DMG lane은 빠른 직접 다운로드 배포 lane으로 유지됩니다.
- ZIP 탐색은 두 lane 모두에서 지원하며, 배포 채널에 맞는 backend를 사용합니다.

## v0.10.4 - 2026-04-19

Language: [🇺🇸 English](#english-0104) | [🇰🇷 한국어](#korean-0104)

<a id="english-0104"></a>

### English

#### What's New
- File browsing now follows Finder-style natural filename order, so numbered files move in the expected sequence.
- Reopening SnapView from Finder or Dock after closing the window is steadier and less likely to show a blank viewer.
- Opening another image while SnapView is already running now switches to the requested photo more directly.
- Grid and Filmstrip navigation feel more immediate during keyboard and mouse selection.

#### Improvements
- Folder and ZIP image lists now sort filenames like `photo-1`, `photo-2`, `photo-10` instead of `photo-1`, `photo-10`, `photo-2`.
- RAW+JPG pairing, normal folder browsing, ZIP browsing, Grid, Filmstrip, and keyboard navigation now share the same natural ordering behavior.
- External file opens after `Cmd+W` avoid reloading the previous image first, reducing the visible “old photo then new photo” flash.
- The visible image canvas is recovered more reliably when a new file is opened while the previous SnapView window is closed or hidden.
- Grid Up/Down keyboard movement now refreshes its column count when entering Grid, so movement follows the current window width instead of an older layout.
- Grid single-click selection now responds immediately instead of waiting to see whether the click becomes a double-click.
- Filmstrip key-repeat navigation now moves the thumbnail focus first and commits the final image after input settles, reducing visible stutter while holding arrow keys.
- Intermittent “file not found” overlays are retried briefly when the file reappears, reducing cases where a valid image stays stuck behind an error dialog.
- Adjusted the app icon footprint so it sits more naturally beside other apps in Finder and the Dock on legacy macOS.

#### Notes
- Natural sorting is now the default behavior. There is no separate setting to enable.
- The sorting change affects browsing order anywhere SnapView uses the current folder or ZIP image list.

<a id="korean-0104"></a>

### 한국어

#### 새로운 점
- 파일 탐색 순서가 Finder식 자연 정렬로 바뀌어, 숫자가 들어간 파일명이 기대한 순서대로 이동합니다.
- 창을 닫은 뒤 Finder나 Dock에서 다시 열 때 빈 화면처럼 보이던 흐름을 더 안정화했습니다.
- SnapView가 이미 실행 중일 때 다른 이미지를 열면 요청한 사진으로 더 직접 전환됩니다.
- Grid와 Filmstrip에서 키보드/마우스 선택 반응을 더 즉각적으로 개선했습니다.

#### 개선된 점
- 폴더와 ZIP 이미지 목록이 이제 `사진-1`, `사진-2`, `사진-10` 순서로 정렬됩니다. 기존처럼 `사진-1`, `사진-10`, `사진-2` 순서로 이동하지 않습니다.
- RAW+JPG 페어링, 일반 폴더 탐색, ZIP 탐색, Grid, Filmstrip, 키보드 이동이 같은 자연 정렬 기준을 사용합니다.
- `Cmd+W` 이후 외부에서 파일을 다시 열 때 이전 이미지를 먼저 다시 그린 뒤 새 이미지로 바뀌는 체감을 줄였습니다.
- 이전 SnapView 창이 닫히거나 숨겨진 상태에서 새 파일을 열어도 보이는 이미지 캔버스가 더 안정적으로 복구됩니다.
- Grid 진입 시 현재 창 너비 기준으로 열 수를 다시 계산해, 위/아래 키 이동이 이전 창 크기 기준으로 어긋나던 문제를 줄였습니다.
- Grid 단일 클릭 선택이 더블클릭 대기 없이 즉시 반응하도록 개선했습니다.
- Filmstrip에서 방향키를 누르고 있을 때 썸네일 포커스를 먼저 움직이고, 마지막 대상 이미지만 입력이 멈춘 뒤 반영해 버벅임을 줄였습니다.
- 파일이 실제로 다시 보이는 경우에도 `파일을 찾을 수 없음` 오류가 남아 있던 간헐 상황을 줄이기 위해 짧은 자동 재시도를 추가했습니다.
- 앱 아이콘의 표시 비율을 조정해 기존 legacy macOS의 Finder와 Dock에서 다른 앱들과 조금 더 자연스럽게 어울리도록 정리했습니다.

#### 참고
- 자연 정렬은 기본 동작입니다. 별도로 켜야 하는 설정은 없습니다.
- 이번 정렬 변경은 현재 폴더 또는 ZIP 이미지 목록을 사용하는 탐색 순서 전반에 적용됩니다.

## v0.10.3 - 2026-04-15

Language: [🇺🇸 English](#english-0103) | [🇰🇷 한국어](#korean-0103)

<a id="english-0103"></a>

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

<a id="korean-0103"></a>

### 한국어

#### 새로운 점
- `Show in Finder`를 추가해 현재 보고 있는 사진 파일을 Finder에서 바로 찾을 수 있게 했습니다.
- 밝은 사진 위에서도 파일명과 정보 오버레이가 더 잘 보이도록 그림자 옵션과 자동 모드를 추가했습니다.
- HEIC와 창 복귀 후 화면 표시 안정성을 더 개선했습니다.

#### 개선된 점
- 메뉴, 컨텍스트 메뉴, `⌘↩`에서 `Show in Finder`를 바로 쓸 수 있습니다.
- 오버레이 텍스트 그림자를 `기본 / 강하게 / 자동`으로 고를 수 있고, 자동은 밝은 화면에서만 더 진하게 적용합니다.
- 별점 UI를 `항상 표시 / 자동 / 숨김`으로 조절할 수 있어, 화면은 더 단순하게 유지하면서도 별점 단축키와 메뉴는 그대로 쓸 수 있습니다.
- 저사양 Mac에서는 주변 precache/warmup/preview 작업 예산을 더 보수적으로 조정해 탐색 체감과 메모리 사용을 개선했습니다.
- 모든 창을 닫는 종료 옵션을 추가하여 사용성을 개선했습니다. 기본값은 macOS 관례에 맞는 OFF입니다.
- 앱 아이콘 모서리를 더 부드럽게 정리해 기존 legacy macOS에서 조금 더 자연스럽게 보이도록 수정했습니다.

#### 참고
- HEIC/HEIF/HIF 지원 자체를 바꾼 릴리즈가 아니라, reopen/restore 상황에서 더 안정적으로 보이도록 개선한 릴리즈입니다.
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
- Quick Check와 파일 열기 흐름의 안정성을 더 개선했습니다.

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

<a id="korean-0101"></a>

### 한국어

#### Highlights
- `화면 모드` 설정을 추가해 `시스템 / 라이트 / 다크` 중 원하는 모양을 직접 고를 수 있게 했습니다.
- Main, Grid, Filmstrip, Manage의 라이트 모드를 더 자연스럽고 읽기 편하게 개선했습니다.
- `Reject` 표시를 더 잘 보이게 하고, 빠른 선별 중 나타나던 몇 가지 거슬리는 동작도 함께 수정했습니다.

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
- 이번 업데이트는 빠른 선별 흐름과 라이트 모드 사용성을 개선하는 데 집중했습니다.

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
- 작은 이미지와 전환 품질을 더 자연스럽게 보여주도록 슬라이드쇼 화면을 수정했습니다.

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
