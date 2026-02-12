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

  // Set initial language based on browser or default to KO
  let currentLang = localStorage.getItem('snapview_lang') || 'ko';
  applyLanguage(currentLang);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-set-lang');
      applyLanguage(lang);
    });
  });

  function applyLanguage(lang) {
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
        el.style.display = ''; // Reset display property if inline
      } else {
        el.setAttribute('hidden', '');
        el.style.display = 'none'; // Force hide
      }
    });

    // Save preference
    localStorage.setItem('snapview_lang', lang);
    currentLang = lang;
  }
});
