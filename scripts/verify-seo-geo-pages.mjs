import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const siteRoot = path.join(root, 'website');
const domain = 'https://snapview.snapworkslab.com';

const pages = [
  {
    file: 'website/mac-image-viewer/index.html',
    url: `${domain}/mac-image-viewer/`,
    alternates: {
      en: `${domain}/mac-image-viewer/`,
      ko: `${domain}/ko/mac-image-viewer/`,
      'x-default': `${domain}/mac-image-viewer/`,
    },
  },
  {
    file: 'website/preview-alternative-for-mac/index.html',
    url: `${domain}/preview-alternative-for-mac/`,
    alternates: {
      en: `${domain}/preview-alternative-for-mac/`,
      ko: `${domain}/ko/preview-alternative/`,
      'x-default': `${domain}/preview-alternative-for-mac/`,
    },
  },
  {
    file: 'website/faststone-alternative-for-mac/index.html',
    url: `${domain}/faststone-alternative-for-mac/`,
    alternates: {
      en: `${domain}/faststone-alternative-for-mac/`,
      ko: `${domain}/ko/faststone-for-mac/`,
      'x-default': `${domain}/faststone-alternative-for-mac/`,
    },
    mustContain: ['not affiliated with FastStone', 'not FastStone'],
  },
  {
    file: 'website/webp-heic-gif-viewer-for-mac/index.html',
    url: `${domain}/webp-heic-gif-viewer-for-mac/`,
    alternates: {
      en: `${domain}/webp-heic-gif-viewer-for-mac/`,
      ko: `${domain}/ko/webp-heic-gif-viewer/`,
      'x-default': `${domain}/webp-heic-gif-viewer-for-mac/`,
    },
    mustContain: ['Animated GIF and WebP playback is available in Main View'],
  },
  {
    file: 'website/ko/mac-image-viewer/index.html',
    url: `${domain}/ko/mac-image-viewer/`,
    alternates: {
      en: `${domain}/mac-image-viewer/`,
      ko: `${domain}/ko/mac-image-viewer/`,
      'x-default': `${domain}/mac-image-viewer/`,
    },
  },
  {
    file: 'website/ko/preview-alternative/index.html',
    url: `${domain}/ko/preview-alternative/`,
    alternates: {
      en: `${domain}/preview-alternative-for-mac/`,
      ko: `${domain}/ko/preview-alternative/`,
      'x-default': `${domain}/preview-alternative-for-mac/`,
    },
  },
  {
    file: 'website/ko/faststone-for-mac/index.html',
    url: `${domain}/ko/faststone-for-mac/`,
    alternates: {
      en: `${domain}/faststone-alternative-for-mac/`,
      ko: `${domain}/ko/faststone-for-mac/`,
      'x-default': `${domain}/faststone-alternative-for-mac/`,
    },
    mustContain: ['제휴 관계가 없습니다', 'FastStone의 Mac 버전이 아닙니다'],
  },
  {
    file: 'website/ko/webp-heic-gif-viewer/index.html',
    url: `${domain}/ko/webp-heic-gif-viewer/`,
    alternates: {
      en: `${domain}/webp-heic-gif-viewer-for-mac/`,
      ko: `${domain}/ko/webp-heic-gif-viewer/`,
      'x-default': `${domain}/webp-heic-gif-viewer-for-mac/`,
    },
    mustContain: ['Animated GIF와 WebP는 Main View'],
  },
];

const failures = [];

function read(relPath) {
  return readFileSync(path.join(root, relPath), 'utf8');
}

function fail(label, message) {
  failures.push(`${label}: ${message}`);
}

function countMatches(source, pattern) {
  return Array.from(source.matchAll(pattern)).length;
}

function assertNoForbiddenClaims(label, html) {
  const forbidden = [
    /\bfastest\b/i,
    /#1/i,
    /\bnumber one\b/i,
    /\bworldwide\b/i,
    /\ball stores\b/i,
    /\bthousands\b/i,
    /\bmillions\b/i,
    /\bofficial FastStone\b/i,
  ];

  for (const pattern of forbidden) {
    if (pattern.test(html)) {
      fail(label, `forbidden claim matched ${pattern}`);
    }
  }

  if (/\bbest\b/i.test(html)) {
    fail(label, 'forbidden broad claim matched /best/i');
  }
}

function parseJsonLd(label, html) {
  const blocks = Array.from(html.matchAll(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g));
  if (blocks.length === 0) {
    fail(label, 'missing JSON-LD block');
    return;
  }

  for (const [, raw] of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (error) {
      fail(label, `invalid JSON-LD: ${error.message}`);
      continue;
    }

    const serialized = JSON.stringify(parsed);
    if (serialized.includes('"FAQPage"')) {
      fail(label, 'FAQPage JSON-LD is not allowed');
    }
    if (serialized.includes('"aggregateRating"')) {
      fail(label, 'aggregateRating JSON-LD is not allowed');
    }
    if (serialized.includes('"SoftwareApplication"')) {
      fail(label, 'SoftwareApplication JSON-LD is not allowed on GEO landing pages');
    }
  }
}

for (const page of pages) {
  const label = page.file;
  statSync(path.join(root, page.file));
  const html = read(page.file);

  const h1Count = countMatches(html, /<h1\b/gi);
  if (h1Count !== 1) {
    fail(label, `expected exactly one h1, found ${h1Count}`);
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/);
  if (!canonical) {
    fail(label, 'missing canonical');
  } else if (canonical[1] !== page.url) {
    fail(label, `canonical mismatch: ${canonical[1]}`);
  } else if (!canonical[1].endsWith('/')) {
    fail(label, 'canonical must use trailing slash');
  }

  for (const [lang, expected] of Object.entries(page.alternates)) {
    const pattern = new RegExp(`<link rel="alternate" hreflang="${lang}" href="${expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">`);
    if (!pattern.test(html)) {
      fail(label, `missing hreflang ${lang} -> ${expected}`);
    }
  }

  for (const required of ['seo-social-proof', 'id="short-answer"', 'seo-final-cta']) {
    if (!html.includes(required)) {
      fail(label, `missing required GEO marker: ${required}`);
    }
  }

  if (!html.includes('Korean Mac App Store') && !html.includes('한국 Mac App Store')) {
    fail(label, 'missing Korean App Store social-proof scope');
  }

  for (const required of page.mustContain ?? []) {
    if (!html.includes(required)) {
      fail(label, `missing required phrase: ${required}`);
    }
  }

  assertNoForbiddenClaims(label, html);
  parseJsonLd(label, html);
}

const sitemap = read('website/sitemap.xml');
for (const page of pages) {
  if (!sitemap.includes(`<loc>${page.url}</loc>`)) {
    fail('website/sitemap.xml', `missing ${page.url}`);
  }
}
if (sitemap.includes('/llms.txt')) {
  fail('website/sitemap.xml', 'llms.txt must not be listed in sitemap');
}

const llmsPath = path.join(siteRoot, 'llms.txt');
statSync(llmsPath);
const llms = read('website/llms.txt');
for (const required of [
  'Official site: https://snapview.snapworkslab.com',
  'not a global rating claim',
  'not FastStone and is not affiliated with FastStone',
]) {
  if (!llms.includes(required)) {
    fail('website/llms.txt', `missing required line: ${required}`);
  }
}

const homepage = read('website/index.html');
const homepageLocale = read('website/locales/home.ko.json');
if (homepage.includes('aggregateRating')) {
  fail('website/index.html', 'homepage aggregateRating was not removed');
}
if (homepage.includes('review-card')) {
  fail('website/index.html', 'review-card quote carousel remains');
}
if (
  homepage.includes('50+ App Store ratings worldwide') ||
  homepage.includes('Every current rating') ||
  homepageLocale.includes('전 국가 기준')
) {
  fail('website/index.html', 'broad worldwide social-proof claim remains');
}
if (!homepage.includes('Korean Mac App Store listing showed 55 ratings and a 5.0 rating')) {
  fail('website/index.html', 'English scoped social proof missing');
}
if (!homepageLocale.includes('2026년 7월 현재 한국 Mac App Store 등록 페이지 기준: 55개 평가, 5.0 평점.')) {
  fail('website/locales/home.ko.json', 'Korean scoped social proof missing');
}

if (failures.length > 0) {
  console.error('SEO/GEO verification failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log(`SEO/GEO verification passed for ${pages.length} landing pages, llms.txt, sitemap, and homepage social proof.`);
