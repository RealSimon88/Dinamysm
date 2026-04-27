// GDPR Cookie Manager — Dynamism S.r.l.
(function() {
  var COOKIE_KEY = 'dynamism_cookie_consent';

  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=Lax';
  }

  function getCookie(name) {
    return decodeURIComponent(document.cookie.split('; ').reduce(function(r, v) {
      var parts = v.split('=');
      return parts[0] === name ? parts[1] : r;
    }, ''));
  }

  function hideBanner() {
    var b = document.getElementById('cookieBanner');
    if (b) { b.classList.remove('visible'); }
  }

  function showBanner() {
    var b = document.getElementById('cookieBanner');
    if (b) { setTimeout(function() { b.classList.add('visible'); }, 1500); }
  }

  function applyPrefs(prefs) {
    if (prefs.analytics) {
      // Qui si inizializzano i cookie analytics (es. GA4)
      // window.dataLayer = window.dataLayer || [];
      // function gtag(){dataLayer.push(arguments);}
      // gtag('js', new Date()); gtag('config', 'G-XXXXXXXXXX');
    }
  }

  // Esportate globalmente per i bottoni onclick
  window.cookieAcceptAll = function() {
    var prefs = { technical: true, analytics: true };
    setCookie(COOKIE_KEY, JSON.stringify(prefs), 365);
    applyPrefs(prefs);
    hideBanner();
  };

  window.cookieRejectAll = function() {
    var prefs = { technical: true, analytics: false };
    setCookie(COOKIE_KEY, JSON.stringify(prefs), 365);
    applyPrefs(prefs);
    hideBanner();
  };

  window.cookieSavePrefs = function() {
    var analytics = document.getElementById('cookieAnalytics');
    var prefs = { technical: true, analytics: analytics ? analytics.checked : false };
    setCookie(COOKIE_KEY, JSON.stringify(prefs), 365);
    applyPrefs(prefs);
    hideBanner();
  };

  // Inizializzazione
  var saved = getCookie(COOKIE_KEY);
  if (!saved) {
    showBanner();
  } else {
    try { applyPrefs(JSON.parse(saved)); } catch(e) { showBanner(); }
  }
})();
