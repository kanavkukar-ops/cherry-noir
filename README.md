# CHERRY NOIR

> The Darkest Cherry. The Finest Pour.

A fictional premium Cherry Cola brand — built as if Chanel redesigned Cherry Coke. Editorial luxury. Fashion-forward. Cinematic.

---

## Stack

| Layer | Choice |
|---|---|
| Build | Vite 5 |
| JS | Vanilla ES Modules |
| Scroll | Lenis (@studio-freight) |
| Animation | GSAP 3 + ScrollTrigger |
| Fonts | Cormorant Garamond (CDN), Clash Display (Fontshare), Neue Montreal (Fontshare), Syne Mono (CDN) |
| CSS | Custom properties only — zero hardcoded hex values in component files |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
cherry-noir/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.js                  ← boot, Lenis, GSAP, all inits
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js              ← can SVG, spring physics entrance
│   │   ├── Heritage.js          ← brand story, timeline, cherry dividers
│   │   ├── Flavours.js          ← 4 editorial cards, condensation canvas
│   │   ├── Explorer.js          ← interactive flavour wheel
│   │   ├── Merch.js             ← magazine spread shop
│   │   └── Footer.js            ← grain SVG filter definition lives here
│   ├── styles/
│   │   ├── tokens.css           ← all CSS custom properties
│   │   ├── typography.css       ← type scale, font stacks, colour utilities
│   │   ├── animations.css       ← keyframes, clip-path reveals, stagger classes
│   │   └── main.css             ← layout + all component styles
│   └── assets/
│       ├── images/              ← replace gradient placeholders with real photography
│       └── fonts/               ← add self-hosted font files here if needed
└── public/
```

---

## Palette

| Token | Hex | Usage |
|---|---|---|
| `--noir` | `#1A0A0A` | Background, near-black with red undertone |
| `--gochujang` | `#780000` | Deep burgundy, primary dark surface |
| `--crimson` | `#C1121F` | Hero accent, CTAs, active states |
| `--varden` | `#FFF1D0` | Cream, body text, light sections |
| `--cosmos` | `#003049` | Deep navy, Reserve / contrast sections |
| `--marble` | `#669BBC` | Steel blue, Ice variant, cold accents |
| `--cherry-silk` | `#6B1A2A` | Mid-tone hover states, card backgrounds |

---

## Image Sourcing

The site currently uses CSS gradient backgrounds as cinematic stand-ins. To replace with real photography:

1. **Hero background** — dark, moody cherry/red photography
   - Save as `src/assets/images/hero-bg.jpg`
   - Set in CSS: `--hero-image: url('/src/assets/images/hero-bg.jpg')`

2. **Heritage sections** — editorial fashion photography with dramatic red/dark lighting
   - Save as `src/assets/images/heritage-1.jpg`, `heritage-2.jpg`
   - Replace `.heritage__image-grad` divs with `<img>` tags

3. **Merch section** — dark luxury product photography
   - Save as `src/assets/images/merch-pack.jpg`, `merch-glass.jpg`, `merch-sub.jpg`
   - Set as `background-image` on `.merch__image-bg--*` elements

Suggested searches on [Unsplash](https://unsplash.com):
- `dark cherry moody` — hero
- `dark red luxury portrait editorial` — heritage
- `dark matte packaging luxury product` — merch

---

## Animation System

Every animation passes the test: *"Does it serve the story, or is it decoration?"*

| Feature | Implementation |
|---|---|
| Smooth scroll | Lenis, globally applied via `gsap.ticker` |
| Hero can entrance | `gsap elastic.out(1, 0.5)` — spring physics, not bounce |
| Headline reveals | CSS `clip-path: inset(100% 0 0 0) → 0%` — editorial standard |
| Heritage parallax | GSAP ScrollTrigger scrub 0.5, text at 0.85× image speed |
| Flavour card entrances | GSAP fromTo, stagger 0.15, bottom up |
| Explorer wheel build | GSAP timeline, staggered 0.06s per descriptor |
| Condensation on hover | Canvas API, 14 drops, physics-based fall, fade at bottom |
| Grain overlay | SVG `feTurbulence` filter, opacity 0.04, non-animated |
| Reduced motion | All GSAP wrapped in `prefers-reduced-motion` check, degrades to opacity fade |

---

## Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

---

*Cherry Noir is a fictional brand concept. Not affiliated with The Coca-Cola Company.*
