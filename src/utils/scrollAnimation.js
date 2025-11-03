
export function initScrollAnimations(options = {}) {
  if (typeof window === 'undefined' || !document) return;

  const rootEl = document.getElementById('root');
  if (!rootEl) return;

  const {
    selector = '#root > *',
    threshold = 0.15,
    rootMargin = '0px 0px -10% 0px',
    minHeight = 20,
  } = options;

  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return; // respect user preference

  const observed = new WeakSet();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
      } else {
        // Remove the class when exiting so the animation can replay on re-entry
        el.classList.remove('in-view');
      }
    });
  }, { threshold, rootMargin });

  // Seed elements: top-level children of app (Navbar, pages, Footer, etc.)
  const roots = Array.from(document.querySelectorAll(selector)).filter((el) => el && el.clientHeight >= minHeight && !el.classList.contains('no-animate') && getComputedStyle(el).position !== 'fixed');

  function observeRecursively(el) {
    if (!el || observed.has(el)) return;
    // Only observe block-level-ish elements to avoid animating tiny inline pieces
    if (el.clientHeight >= minHeight && getComputedStyle(el).display !== 'inline') {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
      observed.add(el);
    }
    // Also observe direct children so that inner sections animate separately
    Array.from(el.children || []).forEach((child) => {
      // Skip very small nodes
      if (child.clientHeight >= minHeight && !observed.has(child) && getComputedStyle(child).position !== 'fixed') {
        child.classList.add('animate-on-scroll');
        observer.observe(child);
        observed.add(child);
      }
      // don't go deeper than needed for performance, but allow two levels
      Array.from(child.children || []).forEach((grand) => {
        if (grand.clientHeight >= minHeight && !observed.has(grand) && getComputedStyle(grand).position !== 'fixed') {
          grand.classList.add('animate-on-scroll');
          observer.observe(grand);
          observed.add(grand);
        }
      });
    });
  }

  roots.forEach((r) => observeRecursively(r));

  // If new nodes are added later (client-side navigation), observe them too
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      Array.from(m.addedNodes || []).forEach((n) => {
        if (n.nodeType === 1) observeRecursively(n);
      });
    });
  });
  mutationObserver.observe(rootEl, { childList: true, subtree: true });

  // Return a cleanup function
  return function destroy() {
    observer.disconnect();
    mutationObserver.disconnect();
  };
}

export default initScrollAnimations;
