import Lenis from 'lenis';

/**
 * One rAF loop for the whole page. Lenis advances first, then every
 * scroll-driven piece reads its own rect and writes styles directly, so
 * nothing re-renders while scrolling.
 */

type Tick = (time: number) => void;

const subscribers = new Set<Tick>();
let lenis: Lenis | null = null;

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function startScroll() {
  if (!reducedMotion()) {
    lenis = new Lenis({lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.9, anchors: true});
  }
  const loop = (time: number) => {
    lenis?.raf(time);
    subscribers.forEach((fn) => fn(time));
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

export function onFrame(fn: Tick): () => void {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}

/** Freeze page scroll while an overlay is open. */
export function lockScroll(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? 'hidden' : '';
}

export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
