/* ═══════════════════════════════════════════════════════
   CHERRY NOIR — Main Entry Point
   Initialises: Lenis smooth scroll · GSAP ScrollTrigger
   Mounts all components · Wires all interactions
═══════════════════════════════════════════════════════ */

import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* Styles */
import './styles/tokens.css';
import './styles/typography.css';
import './styles/animations.css';
import './styles/main.css';

/* Components */
import { render as renderNavbar, init as initNavbar }     from './components/Navbar.js';
import { render as renderHero }                           from './components/Hero.js';
import { render as renderHeritage }                       from './components/Heritage.js';
import { render as renderFlavours, init as initFlavours } from './components/Flavours.js';
import { render as renderExplorer, init as initExplorer } from './components/Explorer.js';
import { render as renderMerch }                          from './components/Merch.js';
import { render as renderFooter }                         from './components/Footer.js';

/* ─── Register GSAP plugins ───────────────────────────── */
gsap.registerPlugin(ScrollTrigger);

/* ─── Mount DOM ───────────────────────────────────────── */
function mountApp() {
  const app = document.getElementById('app');
  app.innerHTML = [
    renderNavbar(),
    renderHero(),
    renderHeritage(),
    renderFlavours(),
    renderExplorer(),
    renderMerch(),
    renderFooter(),
  ].join('');
}

/* ─── Lenis Smooth Scroll ─────────────────────────────── */
function initLenis() {
  const lenis = new Lenis({
    duration:   1.4,
    easing:     t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });

  /* Feed Lenis into GSAP ticker for unified RAF */
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  /* Anchor link smooth scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.6 });
    });
  });

  return lenis;
}

/* ─── Hero photo parallax ─────────────────────────────── */
function initHeroCan() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const photo = document.querySelector('.hero__photo');
  if (!photo || prefersReduced) return;

  /* Subtle parallax on the hero photo as user scrolls down */
  gsap.to(photo, {
    yPercent: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end:   'bottom top',
      scrub: true,
    },
  });
}

/* ─── Heritage Parallax Differential ─────────────────── */
function initHeritageParallax() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  document.querySelectorAll('.heritage__block').forEach(block => {
    const img  = block.querySelector('[data-parallax="image"]');
    const text = block.querySelector('[data-parallax="text"]');
    if (!img || !text) return;

    /* Image scrolls at 1x, text at 0.85x → subtle differential */
    gsap.to(img, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: block,
        start:   'top bottom',
        end:     'bottom top',
        scrub:   0.5,
      },
    });

    gsap.to(text, {
      yPercent: -4,
      ease: 'none',
      scrollTrigger: {
        trigger: block,
        start:   'top bottom',
        end:     'bottom top',
        scrub:   0.5,
      },
    });
  });
}

/* ─── Flavour Cards Entrance ──────────────────────────── */
function initFlavourCards() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.flavour-card').forEach((card, i) => {
    const info = card.querySelector('.flavour-card__info');
    const can  = card.querySelector('.flavour-card__can');
    if (!info || !can) return;

    if (prefersReduced) {
      gsap.set([info, can], { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      [info, can],
      { opacity: 0, y: 60 },
      {
        opacity:  1,
        y:        0,
        duration: 1.1,
        stagger:  0.15,
        ease:     'power3.out',
        scrollTrigger: {
          trigger: card,
          start:   'top 80%',
          once:    true,
        },
      }
    );
  });
}

/* ─── Explorer Wheel Build-in ─────────────────────────── */
function initExplorerWheel() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const descriptors = document.querySelectorAll('.explorer__descriptor');
  const lines       = document.querySelectorAll('.explorer__radial-line');
  const canSil      = document.querySelector('.explorer__can-silhouette');
  const title       = document.querySelector('.explorer__title');

  if (!descriptors.length) return;

  /* Initial hidden state */
  gsap.set([...descriptors, ...lines, canSil], { opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.explorer',
      start:   'top 65%',
      once:    true,
    },
  });

  if (prefersReduced) {
    tl.set([...descriptors, ...lines, canSil], { opacity: 1 });
    return;
  }

  /* Lines fan out */
  tl.to(lines, {
    opacity: 1,
    duration: 0.6,
    stagger: 0.04,
    ease: 'power2.out',
  });

  /* Can silhouette fades in */
  tl.to(canSil, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  }, '-=0.3');

  /* Descriptors stagger in */
  tl.to(descriptors, {
    opacity: 1,
    duration: 0.5,
    stagger: 0.06,
    ease: 'power2.out',
  }, '-=0.2');
}

/* ─── Scroll-triggered clip-path / fade reveals ──────── */
function initRevealObserver() {
  const elements = document.querySelectorAll('.reveal-clip, .reveal-fade, .timeline-item');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ─── Footer headline reveal ──────────────────────────── */
function initFooterReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const headline = document.querySelector('.footer__headline');
  if (!headline) return;

  if (prefersReduced) {
    gsap.set(headline, { opacity: 1 });
    return;
  }

  gsap.fromTo(
    headline,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headline,
        start:   'top 85%',
        once:    true,
      },
    }
  );

  /* Override the CSS clip animation since GSAP handles it */
  headline.style.animation = 'none';
  headline.style.clipPath  = 'none';
}

/* ─── Boot ────────────────────────────────────────────── */
function boot() {
  mountApp();

  /* Component-level inits */
  initNavbar();
  initFlavours();
  initExplorer();

  /* Animation inits */
  initRevealObserver();
  initLenis();
  initHeroCan();
  initHeritageParallax();
  initFlavourCards();
  initExplorerWheel();
  initFooterReveal();

  /* Refresh ScrollTrigger after layout settles */
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

/* DOMContentLoaded guard */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
