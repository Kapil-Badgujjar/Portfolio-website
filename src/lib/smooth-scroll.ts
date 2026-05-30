// Custom smooth-scroll driven entirely by requestAnimationFrame + instant
// scroll steps. We deliberately avoid `window.scrollTo({ behavior: "smooth" })`
// and CSS `scroll-behavior: smooth` because in some environments (and headless
// browsers) the native smooth behavior silently no-ops, leaving the page stuck.
// Each frame performs an INSTANT scroll, which is universally reliable.

let rafId: number | null = null;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function cancelSmoothScroll() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

export function smoothScrollTo(targetY: number, duration = 650) {
  if (typeof window === "undefined") return;
  cancelSmoothScroll();

  const startY = window.scrollY;
  const maxY =
    document.documentElement.scrollHeight - window.innerHeight;
  const clampedTarget = Math.max(0, Math.min(targetY, maxY));
  const diff = clampedTarget - startY;

  if (Math.abs(diff) < 2) {
    window.scrollTo({ top: clampedTarget, behavior: "instant" as ScrollBehavior });
    return;
  }

  let startTime: number | null = null;

  const step = (now: number) => {
    if (startTime === null) startTime = now;
    const progress = Math.min((now - startTime) / duration, 1);
    const y = startY + diff * easeInOutCubic(progress);
    window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
    if (progress < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      rafId = null;
    }
  };

  rafId = requestAnimationFrame(step);
}

// Scroll to an element by id, leaving room for the fixed header.
export function scrollToId(id: string, offset = 80) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
  smoothScrollTo(targetY);
}
