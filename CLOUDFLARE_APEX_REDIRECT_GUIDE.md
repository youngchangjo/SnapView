# Cloudflare apex-domain redirect guide for `snapworkslab.com`

최종 검증일: 2026-04-13  
대상: `snapworkslab.com` 를 서빙하는 **별도 Cloudflare Pages 프로젝트**

## 1. 왜 이 문서가 필요한가

현재 `https://snapworkslab.com` 는 실제 HTTP redirect가 아니라:

- `200 OK`
- `meta refresh`
- JavaScript `window.location.href`

조합으로 `https://snapview.snapworkslab.com` 로 보내고 있습니다.

이 방식의 문제:

- Google이 루트 도메인과 서브도메인의 대표 호스트를 더 헷갈리게 볼 수 있습니다.
- canonical 신호가 약해집니다.
- 나중에 `snapworkslab.com` 을 완전히 다른 사이트로 바꿀 때 정리 비용이 커집니다.

중요:

- SnapView 웹사이트 저장소는 `snapview.snapworkslab.com` 용입니다.
- `snapworkslab.com` 동작은 이 저장소가 아니라 **루트 도메인용 별도 Cloudflare Pages 프로젝트**에서 관리해야 합니다.

## 2. 임시 권장 상태

루트 도메인이 아직 SnapView 서브도메인으로 보내져야 한다면, 권장 방식은 아래 둘 중 하나입니다.

### 우선 권장: Cloudflare 레이어의 실제 HTTP redirect

- `snapworkslab.com/*` -> `https://snapview.snapworkslab.com/$1`
- 상태 코드는 `308 Permanent Redirect` 권장

`308` 을 권장하는 이유:

- Google과 브라우저에 더 강한 영구 이동 신호를 줍니다.
- 같은 요청 메서드를 보존합니다.
- SEO/호스트 정리 관점에서 `200 + meta refresh` 보다 훨씬 명확합니다.

`302` 는 아래 경우에만 고려합니다.

- 정말 짧은 기간의 임시 연결
- 아주 가까운 시점에 루트 도메인의 별도 사이트 오픈이 확정되어 있고, 검색엔진에 영구 이동 신호를 주고 싶지 않을 때

## 3. 구현 방법 A: Cloudflare Redirect Rules 사용

Cloudflare Dashboard 기준:

1. `snapworkslab.com` 이 연결된 zone으로 이동
2. `Rules`
3. `Redirect Rules`
4. `Create rule`
5. 아래처럼 설정

### 추천 규칙

- Rule name: `apex-to-snapview-subdomain`
- If incoming requests match:
  - Hostname equals `snapworkslab.com`
- Action:
  - Static redirect
  - Destination URL:
    - `https://snapview.snapworkslab.com${uri}`
  - Status code:
    - `308`

주의:

- `www.snapworkslab.com` 도 쓰고 있다면 별도 규칙을 추가하거나 hostname 조건을 확장해야 합니다.
- root path만 보내지 말고 `${uri}` 를 붙여 기존 경로를 유지하는 쪽이 낫습니다.

## 4. 구현 방법 B: 루트 Pages 프로젝트에서 `_redirects` 사용

루트 도메인용 Pages 프로젝트의 배포 소스가 정적 파일 기반이라면 `_redirects` 파일이 더 단순할 수 있습니다.

루트 프로젝트의 배포 디렉터리에 `_redirects` 파일을 추가합니다.

예시:

```text
https://snapworkslab.com/* https://snapview.snapworkslab.com/:splat 308
```

또는 같은 의미로 상대 패턴 기반으로 쓸 수 있습니다.

```text
/* https://snapview.snapworkslab.com/:splat 308
```

권장:

- 루트 도메인 전용 프로젝트라면 `/*` 패턴도 괜찮습니다.
- 여러 커스텀 도메인을 같은 프로젝트가 받는다면 절대 URL 패턴으로 더 명확하게 작성하세요.

배포 절차:

1. 루트 프로젝트 저장소에 `_redirects` 추가
2. main 브랜치에 커밋
3. Cloudflare Pages 재배포 완료 대기
4. `curl -I` 로 실제 상태 코드 확인

## 5. 무엇을 하지 말아야 하나

아래는 임시 땜질로는 동작해도 SEO/호스트 정리 관점에서는 권장하지 않습니다.

- `200 OK` + `meta refresh`
- `200 OK` + JavaScript redirect만 사용
- canonical만 넣고 실제 redirect는 하지 않기
- 루트 도메인 페이지가 SnapView 내용을 그대로 복제해서 중복 페이지로 남는 구성

## 6. HTML fallback 이 꼭 필요한 경우

원칙적으로는 **실제 HTTP redirect** 가 정답입니다.

다만 아래 상황이면 잠시 정적 holding page가 필요할 수 있습니다.

- 루트 도메인용 별도 사이트 준비 중
- Cloudflare 규칙을 바로 바꾸기 어려움
- 사용자에게 잠시 공지성 안내를 보여주고 싶음

이 경우에도:

- `meta refresh` 와 JavaScript redirect를 기본 동작으로 쓰지 말고
- `noindex`
- 명시적 canonical
- 눈에 보이는 링크

를 넣은 정적 페이지로 처리하세요.

아래 샘플은 **fallback 전용**입니다.  
이 방식은 최종 SEO 해법이 아닙니다.

### fallback `index.html` 샘플

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Snapworks Lab</title>
  <meta name="robots" content="noindex, follow">
  <meta name="description" content="SnapView now lives at snapview.snapworkslab.com.">
  <link rel="canonical" href="https://snapview.snapworkslab.com/">
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #050507;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      padding: 24px;
    }
    .card {
      width: min(720px, 100%);
      padding: 40px;
      border-radius: 24px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
    }
    h1 { margin-top: 0; font-size: 40px; }
    p { color: rgba(255,255,255,0.8); line-height: 1.7; }
    a {
      color: #64D2FF;
      text-decoration: none;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <main class="card">
    <h1>SnapView has moved</h1>
    <p>
      The SnapView product site now lives at
      <a href="https://snapview.snapworkslab.com/">snapview.snapworkslab.com</a>.
    </p>
    <p>
      This apex domain is being prepared for a separate site. Until then,
      use the product site link above.
    </p>
    <p>
      한국어 안내: SnapView 사이트는 현재
      <a href="https://snapview.snapworkslab.com/">snapview.snapworkslab.com</a>
      에서 운영됩니다.
    </p>
  </main>
</body>
</html>
```

## 7. 나중에 `snapworkslab.com` 을 별도 사이트로 분리할 때

루트 도메인이 별도 사이트가 되면 아래 순서로 분리합니다.

1. 기존 redirect rule 또는 `_redirects` 제거
2. redirect-only fallback HTML 제거
3. 루트 사이트에 자체 canonical 설정
4. 루트 사이트에 자체 title / description / `og:*` / `twitter:*` 추가
5. 루트 사이트에 자체 구조화 데이터 추가
   - `WebSite`
   - 필요 시 `Organization`
6. Search Console에 `https://snapworkslab.com` 를 독립 property로 운영
7. 루트 사이트의 자체 `robots.txt`, `sitemap.xml` 제공
8. `snapview.snapworkslab.com` 쪽 sitemap/canonical과 섞이지 않게 유지

중요:

- 루트와 서브도메인은 별도 사이트로 생각하고 운영해야 합니다.
- 서로의 canonical을 가리키게 두지 마세요.
- Search Console property도 분리해 두는 것이 안전합니다.

## 8. 배포 후 검증 체크리스트

### 8.1 상태 코드 확인

루트 도메인이 실제 redirect인지 먼저 확인:

```bash
curl -I https://snapworkslab.com
curl -I https://snapworkslab.com/some/path
```

정상 예시:

- `HTTP/2 308`
- `location: https://snapview.snapworkslab.com/...`

### 8.2 브라우저 확인

- 주소창에 `https://snapworkslab.com` 입력
- 즉시 `https://snapview.snapworkslab.com` 로 이동하는지 확인
- 중간에 빈 페이지나 깜빡임이 없는지 확인

### 8.3 Search Console 확인

루트 property가 있다면:

- URL Inspection에 `https://snapworkslab.com/` 입력
- 실제 페이지가 redirect로 인식되는지 확인

SnapView property에서는:

- `https://snapview.snapworkslab.com/` 검사
- Google이 선택한 canonical이 subdomain 쪽으로 잡히는지 확인

### 8.4 fallback 페이지를 잠시 쓰는 경우

- `meta refresh` / JS redirect가 기본 동작이 아닌지 확인
- `noindex` 가 들어있는지 확인
- canonical 이 `https://snapview.snapworkslab.com/` 인지 확인
- 사용자가 클릭할 수 있는 명시적 링크가 있는지 확인

## 9. 추천 결론

현재 상황의 추천 순서는 아래입니다.

1. 가장 먼저 `200 + meta refresh + JS redirect` 를 중단
2. Cloudflare Redirect Rule 또는 `_redirects` 로 `308` 실제 redirect 구성
3. 루트 도메인이 별도 사이트로 오픈되는 시점에 redirect 제거
4. 루트와 SnapView 서브도메인을 완전히 분리 운영

실무적으로는:

- 지금은 `308` redirect
- 나중에는 독립 사이트

가 가장 안전한 경로입니다.
