// Mișcarea site-ului: scroll lin (Lenis) + animații legate de scroll (GSAP ScrollTrigger).
// Fără JS sau cu „reduce motion”, tot conținutul rămâne vizibil și static.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const EASE = 'expo.out';

function splitWords(el: HTMLElement): HTMLElement[] {
  const out: HTMLElement[] = [];
  const wrap = (node: Node) => {
    Array.from(node.childNodes).forEach((n) => {
      if (n.nodeType === 3) {
        const f = document.createDocumentFragment();
        (n.textContent || '').split(/(\s+)/).forEach((t) => {
          if (!t) return;
          if (/^\s+$/.test(t)) { f.appendChild(document.createTextNode(t)); return; }
          const o = document.createElement('span'); o.className = 'w';
          const i = document.createElement('span'); i.textContent = t;
          o.appendChild(i); f.appendChild(o); out.push(i);
        });
        n.parentNode!.replaceChild(f, n);
      } else if (n.nodeType === 1) wrap(n);
    });
  };
  wrap(el);
  return out;
}

export function initMenu() {
  const btn = document.querySelector<HTMLButtonElement>('.menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Închide' : 'Meniu';
  });
}

export function initMotion() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector<HTMLElement>('.site-header');

  // meniul se ascunde la scroll în jos și reapare la scroll în sus
  // ascunde la scroll în jos, arată la scroll în sus; schimbă starea doar după 16px în aceeași direcție,
  // ca micile mișcări ale scroll-ului lin să nu-l facă să tremure
  let anchor = 0, hidden = false;
  const setHidden = (h: boolean) => { if (h !== hidden) { hidden = h; header?.classList.toggle('hide', h); } };
  window.addEventListener('scroll', () => {
    if (!header || reduce) return;
    const y = window.scrollY;
    if (!document.getElementById('mobile-menu')?.hidden || y < 120) { setHidden(false); anchor = y; return; }
    if (hidden) {
      if (y > anchor) anchor = y;
      else if (anchor - y > 16) { setHidden(false); anchor = y; }
    } else {
      if (y < anchor) anchor = y;
      else if (y - anchor > 16) { setHidden(true); anchor = y; }
    }
  }, { passive: true });

  if (reduce) return;
  gsap.registerPlugin(ScrollTrigger);

  // scroll lin, legat de ScrollTrigger
  const lenis = new Lenis({ duration: 1.15, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const id = a.getAttribute('href')!;
      const el = id.length > 1 ? document.querySelector<HTMLElement>(id) : null;
      if (el) { ev.preventDefault(); lenis.scrollTo(el, { offset: -70, duration: 1.4 }); }
    });
  });
  let velocity = 0;
  lenis.on('scroll', (l: Lenis) => { velocity = l.velocity || 0; });

  // intrarea în pagină: meniul, apoi titlul cuvânt cu cuvânt
  // elementele care au și tranziție CSS pe transform o opresc cât timp le animă GSAP, altfel cele două se bat și tremură
  const fromClean = (targets: gsap.TweenTarget, vars: gsap.TweenVars) => {
    gsap.set(targets, { transition: 'none' });
    return gsap.from(targets, { ...vars, clearProps: 'transform,opacity,transition' });
  };
  fromClean('.site-header .nav > *', { y: -12, opacity: 0, duration: 1, stagger: .08, ease: EASE, delay: .1 });
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((h) => {
    gsap.from(splitWords(h), { yPercent: 115, rotate: 4, duration: 1.5, stagger: .055, ease: EASE, delay: .15 });
  });
  gsap.from('.page-head [data-reveal], .mosaic .status, .mosaic .lead, .mosaic .ctas', { y: 24, opacity: 0, duration: 1.2, stagger: .08, ease: EASE, delay: .5 });

  // blocuri care urcă moale la scroll
  gsap.utils.toArray<HTMLElement>('.sec-head, [data-reveal]:not(.page-head [data-reveal]), .table-wrap, .faq, .form, .split > *').forEach((el) => {
    gsap.from(el, { y: 60, opacity: 0, duration: 1.4, ease: EASE, scrollTrigger: { trigger: el, start: 'top 90%' } });
  });
  gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((g) => {
    fromClean(g.children, { y: 80, opacity: 0, duration: 1.4, ease: EASE, stagger: .1, scrollTrigger: { trigger: g, start: 'top 88%' } });
  });

  // hero mozaic: plăcuțele intră, apoi se mișcă după mouse și la scroll, fiecare cu adâncimea ei
  const mosaic = document.querySelector<HTMLElement>('.mosaic');
  if (mosaic) {
    const tiles = gsap.utils.toArray<HTMLElement>('.mosaic .tile');
    gsap.from('.mosaic .tile .ms', { y: 120, scale: .7, opacity: 0, rotate: (i: number) => (i % 2 ? 14 : -14), duration: 1.6, stagger: .08, ease: EASE, delay: .15 });
    const wide = window.matchMedia('(min-width: 861px)');
    const q = tiles.map((t) => ({
      x: gsap.quickTo(t.firstElementChild!, 'x', { duration: 1.1, ease: 'power3.out' }),
      y: gsap.quickTo(t.firstElementChild!, 'y', { duration: 1.1, ease: 'power3.out' }),
      d: Number(t.dataset.d || 1),
    }));
    mosaic.addEventListener('pointermove', (e) => {
      if (!wide.matches) return;
      const r = mosaic.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      q.forEach((k) => { k.x(x * -70 * k.d); k.y(y * -50 * k.d); });
    });
    mosaic.addEventListener('pointerleave', () => q.forEach((k) => { k.x(0); k.y(0); }));
    ScrollTrigger.matchMedia({
      '(min-width: 861px)': () => {
        tiles.forEach((t) => gsap.to(t, { y: () => -160 * Number(t.dataset.d || 1), ease: 'none', scrollTrigger: { trigger: mosaic, start: 'top top', end: 'bottom top', scrub: true, invalidateOnRefresh: true } }));
      },
    });
  }

  // proiecte: fereastra din card are paralaxă ușoară
  gsap.utils.toArray<HTMLElement>('.proj').forEach((el) => {
    const w = el.querySelector('.ms');
    if (w) gsap.fromTo(w, { yPercent: 10, scale: .94 }, { yPercent: -6, scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // CTA: se lărgește la intrare, cercul se rotește după scroll
  gsap.utils.toArray<HTMLElement>('.cta').forEach((c) => {
    gsap.fromTo(c, { clipPath: 'inset(6% 4% 6% 4% round 40px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', scrollTrigger: { trigger: c, start: 'top bottom', end: 'top 40%', scrub: true } });
    const ring = c.querySelector('.ring');
    if (ring) gsap.to(ring, { rotate: 200, ease: 'none', scrollTrigger: { trigger: c, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // textul manifestului se colorează pe măsură ce derulezi
  const tx = document.querySelector<HTMLElement>('.manifesto .txt');
  if (tx) {
    const words: HTMLElement[] = [];
    tx.querySelectorAll('p').forEach((p) => {
      const parts = (p.textContent || '').split(/(\s+)/);
      p.textContent = '';
      parts.forEach((t) => {
        if (!t || /^\s+$/.test(t)) { p.appendChild(document.createTextNode(t)); return; }
        const s = document.createElement('span'); s.className = 'mw'; s.textContent = t; p.appendChild(s); words.push(s);
      });
    });
    tx.classList.add('js');
    const paint = () => {
      const r = tx.getBoundingClientRect(), vh = window.innerHeight;
      const prog = Math.min(1, Math.max(0, (vh * .8 - r.top) / (r.height + vh * .25)));
      const n = Math.round(prog * words.length);
      words.forEach((w, k) => w.classList.toggle('on', k < n));
    };
    lenis.on('scroll', paint); paint();
  }

  // carusel: merge singur, accelerează la scroll, încetinește la hover, se trage cu inerție
  const reel = document.getElementById('reel');
  const track = reel?.querySelector<HTMLElement>('.track');
  if (reel && track) {
    track.innerHTML += track.innerHTML;
    track.querySelectorAll('.shot:nth-child(n+' + (track.children.length / 2 + 1) + ')').forEach((s) => s.setAttribute('aria-hidden', 'true'));
    let down = false, hover = false, sx = 0, sl = 0, vel = 0, lastX = 0, cur = .7, boost = 0;
    reel.addEventListener('pointerenter', () => { hover = true; });
    reel.addEventListener('pointerleave', () => { hover = false; });
    reel.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; sx = lastX = e.clientX; sl = reel.scrollLeft; vel = 0; reel.classList.add('drag'); });
    window.addEventListener('pointerup', () => { down = false; reel.classList.remove('drag'); });
    reel.addEventListener('pointermove', (e) => { if (!down) return; reel.scrollLeft = sl - (e.clientX - sx); vel = lastX - e.clientX; lastX = e.clientX; });
    lenis.on('scroll', (l: Lenis) => { boost = Math.min(14, Math.abs(l.velocity || 0) * .6); });
    const half = () => track.scrollWidth / 2;
    gsap.ticker.add(() => {
      if (!down) { const target = hover ? .12 : .7 + boost; cur += (target - cur) * .06; vel *= .94; reel.scrollLeft += cur + vel; boost *= .92; }
      if (reel.scrollLeft >= half()) reel.scrollLeft -= half();
      if (reel.scrollLeft <= 0) reel.scrollLeft += half();
    });
    gsap.fromTo(track, { x: 120 }, { x: -260, ease: 'none', scrollTrigger: { trigger: reel, start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
    const shots = gsap.utils.toArray<HTMLElement>('.reel .shot');
    const skew = gsap.quickTo(shots, 'skewX', { duration: .6, ease: 'power3.out' });
    lenis.on('scroll', () => skew(gsap.utils.clamp(-6, 6, velocity * -.35)));
    const dc = document.querySelector<HTMLElement>('.drag-cursor');
    if (dc && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const xTo = gsap.quickTo(dc, 'x', { duration: .45, ease: 'power3.out' }), yTo = gsap.quickTo(dc, 'y', { duration: .45, ease: 'power3.out' });
      reel.addEventListener('pointerenter', (e) => { gsap.set(dc, { x: e.clientX, y: e.clientY }); gsap.to(dc, { scale: 1, opacity: 1, duration: .5, ease: 'back.out(1.7)' }); });
      reel.addEventListener('pointerleave', () => gsap.to(dc, { scale: 0, opacity: 0, duration: .35, ease: 'power3.in' }));
      reel.addEventListener('pointermove', (e) => { xTo(e.clientX); yTo(e.clientY); });
      reel.addEventListener('pointerdown', () => gsap.to(dc, { scale: .75, duration: .3, ease: 'power3.out' }));
      window.addEventListener('pointerup', () => { if (reel.matches(':hover')) gsap.to(dc, { scale: 1, duration: .4, ease: 'back.out(1.7)' }); });
    }
  }
}
