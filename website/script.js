const GA_MEASUREMENT_ID = 'G-25D1QQCTY8';
const GA_ENABLED_HOSTNAMES = new Set([
  'snapview.snapworkslab.com',
]);

if (GA_ENABLED_HOSTNAMES.has(window.location.hostname)) {
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Animations (Intersection Observer)
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  // 2. Language Toggle Logic
  const langButtons = document.querySelectorAll('[data-set-lang]');
  const localePayloads = new Map();

  // Set initial language based on saved preference or default to EN
  let currentLang = localStorage.getItem('snapview_lang') || 'en';
  applyLanguage(currentLang);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-set-lang');
      applyLanguage(lang);
    });
  });

  async function loadLocalePayload(lang) {
    if (lang !== 'ko') {
      return {};
    }

    if (window.location.protocol === 'file:') {
      return {};
    }

    if (!localePayloads.has(lang)) {
      const localeURL = new URL('locales/home.ko.json', document.baseURI);
      localePayloads.set(lang, fetch(localeURL, { cache: 'no-cache' }).then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load Korean homepage locale: ${response.status}`);
        }
        return response.json();
      }));
    }

    return localePayloads.get(lang);
  }

  async function hydrateLanguage(lang) {
    const localizedNodes = document.querySelectorAll(`[data-lang="${lang}"][data-i18n]`);
    if (localizedNodes.length > 0) {
      const payload = await loadLocalePayload(lang);
      if (Object.keys(payload).length === 0) {
        return;
      }

      localizedNodes.forEach(el => {
        if (el.dataset.langHydrated === 'true') {
          return;
        }

        const key = el.getAttribute('data-i18n');
        if (!Object.prototype.hasOwnProperty.call(payload, key)) {
          console.warn(`Missing SnapView locale key: ${key}`);
          return;
        }

        el.innerHTML = payload[key];
        el.dataset.langHydrated = 'true';
      });
    }

    const remoteNodes = document.querySelectorAll(`[data-lang="${lang}"][data-lang-src]`);
    await Promise.all(Array.from(remoteNodes).map(async el => {
      if (el.dataset.langHydrated === 'true') {
        return;
      }

      const response = await fetch(el.getAttribute('data-lang-src'), { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Failed to load ${el.getAttribute('data-lang-src')}: ${response.status}`);
      }

      el.innerHTML = await response.text();
      el.dataset.langHydrated = 'true';
    }));
  }

  async function applyLanguage(lang) {
    document.documentElement.lang = lang;

    try {
      await hydrateLanguage(lang);
    } catch (error) {
      console.warn('SnapView language content could not be loaded.', error);
    }

    // Update active state of buttons
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-set-lang') === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Toggle visibility of content
    document.querySelectorAll('[data-lang]').forEach(el => {
      if (el.getAttribute('data-lang') === lang) {
        el.removeAttribute('hidden');
        el.style.display = '';
      } else {
        el.setAttribute('hidden', '');
        el.style.display = 'none';
      }
    });

    // Save preference
    localStorage.setItem('snapview_lang', lang);
    currentLang = lang;
  }
});
