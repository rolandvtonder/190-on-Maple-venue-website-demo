import {clamp, lockScroll, onFrame, reducedMotion, startScroll} from './scroll';

startScroll();

/* ---------- Hero: the camera pulls back as you scroll on ---------- */
document.querySelectorAll<HTMLElement>('[data-hero]').forEach((root) => {
  const stage = root.querySelector<HTMLElement>('[data-stage]');
  if (!stage || reducedMotion()) return;
  onFrame(() => {
    const r = root.getBoundingClientRect();
    const h = window.innerHeight;
    if (r.bottom < -h) return;
    const p = clamp(-r.top / h);
    stage.style.transform = `translate3d(0, ${(p * h * 0.45).toFixed(1)}px, 0) scale(${(1 - p * 0.08).toFixed(4)})`;
    stage.style.filter = p > 0.01 ? `blur(${(p * 16).toFixed(1)}px) brightness(${(1 - p * 0.5).toFixed(3)})` : 'none';
  });
});

/* ---------- Header tone: forest wordmark over light sections, paper over dark ---------- */
{
  const isLight = (el: Element) => {
    const m = getComputedStyle(el).backgroundColor.match(/\d+(\.\d+)?/g);
    if (!m) return false;
    const [r, g, b, a = '1'] = m.map(String);
    if (+a < 0.5) return false;
    return (0.299 * +r + 0.587 * +g + 0.114 * +b) / 255 > 0.6;
  };
  const bands = [...document.querySelectorAll('main > section, footer')].map((el) => ({el, light: isLight(el)}));
  const html = document.documentElement;
  let last: boolean | null = null;
  onFrame(() => {
    const y = 60;
    const hit = bands.find(({el}) => {
      const r = el.getBoundingClientRect();
      return r.top <= y && r.bottom > y;
    });
    const light = !!hit?.light;
    if (light !== last) {
      html.classList.toggle('on-light', light);
      last = light;
    }
    // Once past the top, the wordmark tucks down so it doesn't crowd content.
    const tucked = window.scrollY > 120;
    if (tucked !== html.classList.contains('tucked')) html.classList.toggle('tucked', tucked);
  });
}

/* ---------- Hero slideshow: crossfade every few seconds while visible ---------- */
document.querySelectorAll<HTMLElement>('[data-slides]').forEach((wrap) => {
  const slides = [...wrap.querySelectorAll<HTMLElement>('.slide')];
  if (slides.length < 2 || reducedMotion()) return;
  let i = 0;
  let timer = 0;
  const next = () => {
    slides[i].classList.remove('is-on');
    i = (i + 1) % slides.length;
    slides[i].classList.add('is-on');
  };
  const play = () => {
    if (!timer) timer = window.setInterval(next, 6000);
  };
  const stop = () => {
    window.clearInterval(timer);
    timer = 0;
  };
  new IntersectionObserver(([e]) => (e.isIntersecting ? play() : stop())).observe(wrap);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : play()));
});

/* ---------- Reveals and the occasions panels ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add(e.target.hasAttribute('data-panels') ? 'is-shown' : 'is-in');
      io.unobserve(e.target);
    });
  },
  {rootMargin: '0px 0px -10% 0px', threshold: 0.05},
);
document.querySelectorAll('[data-reveal], [data-panels]').forEach((el) => io.observe(el));

/* ---------- Menu: three slabs wipe in; items ripple on hover ---------- */
const menu = document.getElementById('menu');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
if (menu && toggle) {
  const label = toggle.querySelector('[data-label]')!;
  const links = [...menu.querySelectorAll<HTMLAnchorElement>('[data-menu-link]')];
  const turb = menu.querySelector<SVGFETurbulenceElement>('feTurbulence');
  const disp = menu.querySelector<SVGFEDisplacementMapElement>('feDisplacementMap');
  let open = false;

  const set = (next: boolean) => {
    open = next;
    document.documentElement.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    label.textContent = open ? 'Close' : 'Menu';
    menu.toggleAttribute('inert', !open);
    lockScroll(open);
    if (open) window.setTimeout(() => links[0]?.focus({preventScroll: true}), 450);
    else {
      ripple(null);
      toggle.focus({preventScroll: true});
    }
  };

  toggle.addEventListener('click', () => set(!open));
  menu.querySelector('[data-menu-close]')?.addEventListener('click', () => set(false));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) set(false);
  });

  // Heat-haze ripple: an SVG turbulence + displacement filter animated per frame,
  // only while a link is hovered or focused.
  let raf = 0;
  const ripple = (a: HTMLAnchorElement | null) => {
    cancelAnimationFrame(raf);
    links.forEach((l) => {
      l.style.filter = l === a ? 'url(#ripple)' : 'none';
      l.classList.toggle('opacity-35', !!a && l !== a);
    });
    if (!a || reducedMotion()) {
      if (a) a.style.filter = 'none';
      return;
    }
    let t = 0;
    let amp = 0;
    const loop = () => {
      t += 0.016;
      amp = Math.min(1, amp + 0.08);
      turb?.setAttribute('baseFrequency', `${(0.012 + Math.sin(t * 2.1) * 0.004).toFixed(4)} ${(0.06 + Math.cos(t * 1.7) * 0.02).toFixed(4)}`);
      turb?.setAttribute('seed', String(Math.floor(t * 12) % 50));
      disp?.setAttribute('scale', (amp * 7).toFixed(2));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  };
  links.forEach((a) => {
    a.addEventListener('mouseenter', () => ripple(a));
    a.addEventListener('focus', () => ripple(a));
  });
  menu.querySelector('ul')?.addEventListener('mouseleave', () => ripple(null));
}
