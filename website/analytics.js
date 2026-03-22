/**
 * analytics.js — Privacy-Respecting Page Analytics
 * AI Explorers Curriculum Website
 *
 * Philosophy:
 *   - No cookies, ever
 *   - No cross-site tracking
 *   - No fingerprinting
 *   - No IP storage
 *   - Respects Do Not Track (DNT) and Global Privacy Control (GPC)
 *   - GDPR / CCPA / COPPA compatible — no consent banner needed
 *
 * How it works:
 *   Sends a minimal, anonymous page view event using navigator.sendBeacon
 *   (or fetch fallback). Session identity uses a random in-memory token that
 *   resets on every page load — nothing persists in localStorage, cookies,
 *   or IndexedDB.
 *
 *   By default, events are sent to Plausible's open-source cloud endpoint.
 *   Swap ANALYTICS_ENDPOINT and ANALYTICS_DOMAIN below to self-host.
 *
 * Setup (Plausible):
 *   1. Create a free account at https://plausible.io
 *   2. Add your domain (e.g. aiexplorers.io or clawdawg36-cpu.github.io)
 *   3. Set ANALYTICS_DOMAIN below to match the domain you registered
 *   4. That's it — no API keys, no embed tokens
 *
 * Self-hosting alternative:
 *   Deploy Plausible CE: https://github.com/plausible/community-edition
 *   Then point ANALYTICS_ENDPOINT to your own instance.
 *
 * Local development:
 *   Analytics silently no-ops on localhost / 127.0.0.1 / file:// to keep
 *   local traffic out of your stats.
 */

(function () {
  'use strict';

  // ─── Configuration ──────────────────────────────────────────────────────────

  /** Domain registered in Plausible (must match exactly). */
  var ANALYTICS_DOMAIN = 'aiexplorers.io';

  /**
   * Plausible API endpoint.
   * Swap to your self-hosted instance URL if running Plausible CE.
   * Example self-hosted: 'https://plausible.example.com/api/event'
   */
  var ANALYTICS_ENDPOINT = 'https://plausible.io/api/event';

  // ─── Privacy Guards ──────────────────────────────────────────────────────────

  /** Return true if we should skip tracking for any privacy reason. */
  function shouldSkip() {
    // 1. Do Not Track header
    if (navigator.doNotTrack === '1' || window.doNotTrack === '1') {
      return true;
    }

    // 2. Global Privacy Control (Firefox, Brave, etc.)
    if (navigator.globalPrivacyControl === true) {
      return true;
    }

    // 3. Localhost / file:// — keep dev traffic out of stats
    var host = location.hostname;
    if (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '' ||                        // file://
      host.endsWith('.local') ||
      host.endsWith('.test') ||
      location.protocol === 'file:'
    ) {
      return true;
    }

    // 4. Bot / crawler user agents (basic heuristic)
    var ua = (navigator.userAgent || '').toLowerCase();
    if (
      ua.indexOf('bot') !== -1 ||
      ua.indexOf('spider') !== -1 ||
      ua.indexOf('crawler') !== -1 ||
      ua.indexOf('prerender') !== -1 ||
      ua.indexOf('headless') !== -1 ||
      ua.indexOf('phantom') !== -1
    ) {
      return true;
    }

    return false;
  }

  // ─── Event Sender ────────────────────────────────────────────────────────────

  /**
   * Send a single analytics event.
   * Payload matches Plausible's public API — works with Plausible cloud and CE.
   * https://plausible.io/docs/events-api
   *
   * @param {string} eventName  - 'pageview' or a custom event name
   * @param {object} [props]    - optional custom properties (key→string pairs)
   */
  function sendEvent(eventName, props) {
    if (shouldSkip()) return;

    var payload = {
      n: eventName,                          // event name
      u: location.href,                      // current URL (no hash stripped for privacy)
      d: ANALYTICS_DOMAIN,                   // registered domain
      r: document.referrer || null,          // referrer (null if direct)
      w: window.innerWidth || null,          // viewport width (no fingerprinting, coarse)
    };

    // Strip hash from URL to avoid capturing sensitive fragment state
    payload.u = payload.u.split('#')[0];

    // Attach optional custom properties
    if (props && typeof props === 'object') {
      payload.p = JSON.stringify(props);
    }

    var body = JSON.stringify(payload);

    // Prefer sendBeacon (non-blocking, fires even if page unloads)
    if (navigator.sendBeacon) {
      try {
        navigator.sendBeacon(ANALYTICS_ENDPOINT, new Blob([body], { type: 'application/json' }));
        return;
      } catch (_) {
        // fall through to fetch
      }
    }

    // Fetch fallback (keepalive so it survives navigation)
    try {
      fetch(ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
        keepalive: true,
        credentials: 'omit',       // never send cookies to the analytics server
      }).catch(function () {});    // swallow network errors silently
    } catch (_) {}
  }

  // ─── Page View Tracking ──────────────────────────────────────────────────────

  /**
   * Fire a pageview. Called automatically on initial load and on SPA navigation
   * (via History API pushState/replaceState/popstate).
   */
  function trackPageview() {
    sendEvent('pageview');
  }

  // Fire on initial page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackPageview);
  } else {
    trackPageview();
  }

  // Hook History API for SPA-style navigation (future-proofing)
  (function patchHistory() {
    var origPush = history.pushState;
    var origReplace = history.replaceState;
    var lastUrl = location.href;

    function handleNav() {
      var newUrl = location.href.split('#')[0];
      if (newUrl !== lastUrl) {
        lastUrl = newUrl;
        trackPageview();
      }
    }

    history.pushState = function () {
      origPush.apply(history, arguments);
      handleNav();
    };

    history.replaceState = function () {
      origReplace.apply(history, arguments);
      handleNav();
    };

    window.addEventListener('popstate', handleNav);
  })();

  // ─── CTA Click Tracking ──────────────────────────────────────────────────────

  /**
   * Track clicks on primary CTA buttons and PDF downloads.
   * Uses event delegation — no need to instrument individual elements.
   *
   * Events fired:
   *   'Download'  — when a PDF link is clicked
   *   'CTA Click' — when a .btn-primary or .btn-secondary is clicked
   *   'Outbound'  — when any external link is clicked
   */
  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
      var el = e.target;

      // Walk up to find the nearest anchor (handles clicks on child elements)
      while (el && el.tagName !== 'A' && el !== document.body) {
        el = el.parentElement;
      }
      if (!el || el.tagName !== 'A') return;

      var href = el.getAttribute('href') || '';
      var classes = el.className || '';

      // PDF downloads
      if (href.match(/\.pdf$/i)) {
        sendEvent('Download', { file: href.split('/').pop() });
        return;
      }

      // CTA buttons
      if (classes.indexOf('btn-primary') !== -1 || classes.indexOf('btn-secondary') !== -1) {
        sendEvent('CTA Click', {
          label: (el.innerText || '').trim().slice(0, 60),
          url: href,
        });
        return;
      }

      // Outbound links (skip same-origin, anchors, mailto, tel)
      if (
        href.indexOf('http') === 0 &&
        el.hostname !== location.hostname
      ) {
        sendEvent('Outbound Link: Click', { url: href });
      }
    });
  });

  // ─── Public API (optional) ───────────────────────────────────────────────────

  /**
   * Expose a minimal API for manual event tracking from other scripts.
   *
   * Usage from any page:
   *   window.aiAnalytics.track('Form Submit', { form: 'contact' });
   */
  window.aiAnalytics = {
    track: sendEvent,
  };

})();
