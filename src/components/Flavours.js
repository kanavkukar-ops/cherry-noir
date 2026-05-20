/* ─────────────────────────────────────────────────────
   FLAVOURS — Four variants as editorial cards.
   Asymmetric. Full-width-ish. Not a grid. Not a template.
   Condensation canvas applied on hover.
───────────────────────────────────────────────────── */

function originalCan() {
  return `
    <svg viewBox="0 0 180 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="f1bg" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#1A0008"/>
          <stop offset="25%"  stop-color="#5C0820"/>
          <stop offset="50%"  stop-color="#8B1030"/>
          <stop offset="75%"  stop-color="#5C0820"/>
          <stop offset="100%" stop-color="#1A0008"/>
        </linearGradient>
        <linearGradient id="f1cr" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#444"/>
          <stop offset="40%"  stop-color="#E8E8E8"/>
          <stop offset="60%"  stop-color="#E0E0E0"/>
          <stop offset="100%" stop-color="#444"/>
        </linearGradient>
        <radialGradient id="f1top" cx="40%" cy="38%" r="55%">
          <stop offset="0%"   stop-color="#C8C8C8"/>
          <stop offset="100%" stop-color="#4A4A4A"/>
        </radialGradient>
        <linearGradient id="f1hi" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="white" stop-opacity="0"/>
          <stop offset="50%"  stop-color="white" stop-opacity="0.10"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="388" rx="64" ry="14" fill="#0A0000" opacity="0.5"/>
      <ellipse cx="90" cy="376" rx="64" ry="16" fill="#1A0008"/>
      <rect x="26" y="40" width="128" height="336" fill="url(#f1bg)"/>
      <rect x="26" y="40" width="128" height="6"   fill="#C1121F"/>
      <rect x="26" y="370" width="128" height="6"  fill="#C1121F"/>
      <text x="90" y="148" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="10" letter-spacing="8" fill="#FFF1D0" text-anchor="middle" opacity="0.6">CHERRY</text>
      <text x="90" y="192" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="44" font-weight="300" letter-spacing="4" fill="#FFF1D0" text-anchor="middle">NOIR</text>
      <text x="90" y="214" font-family="monospace"
        font-size="5.5" letter-spacing="3.5" fill="#C1121F" text-anchor="middle" opacity="0.9">ORIGINAL</text>
      <circle cx="78"  cy="264" r="11" fill="#780000" opacity="0.9"/>
      <circle cx="92"  cy="256" r="11" fill="#C1121F" opacity="0.9"/>
      <path d="M78 253 Q85 238 92 245" stroke="#3A1200" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M92 245 Q99 230 104 233" stroke="#3A1200" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <rect x="26" y="40" width="128" height="336" fill="url(#f1hi)"/>
      <path d="M26 40 L38 28 L142 28 L154 40Z" fill="url(#f1cr)"/>
      <ellipse cx="90" cy="28" rx="64" ry="16" fill="url(#f1top)"/>
      <ellipse cx="90" cy="26" rx="44" ry="10" fill="#A0A0A0"/>
      <rect x="76" y="19" width="28" height="10" rx="5" fill="#BFBFBF"/>
      <ellipse cx="90" cy="19" rx="9" ry="4" fill="#A6A6A6"/>
    </svg>`;
}

function zeroCan() {
  return `
    <svg viewBox="0 0 180 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="f2bg" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#050505"/>
          <stop offset="30%"  stop-color="#111111"/>
          <stop offset="50%"  stop-color="#1C1C1C"/>
          <stop offset="70%"  stop-color="#111111"/>
          <stop offset="100%" stop-color="#050505"/>
        </linearGradient>
        <linearGradient id="f2acc" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#333"/>
          <stop offset="40%"  stop-color="#EEEEEE"/>
          <stop offset="60%"  stop-color="#E6E6E6"/>
          <stop offset="100%" stop-color="#333"/>
        </linearGradient>
        <linearGradient id="f2str" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#C1121F" stop-opacity="0"/>
          <stop offset="50%"  stop-color="#C1121F" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#C1121F" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="388" rx="64" ry="14" fill="#000" opacity="0.6"/>
      <ellipse cx="90" cy="376" rx="64" ry="16" fill="#050505"/>
      <rect x="26" y="40" width="128" height="336" fill="url(#f2bg)"/>
      <rect x="26" y="40"  width="128" height="3" fill="url(#f2str)"/>
      <rect x="26" y="373" width="128" height="3" fill="url(#f2str)"/>
      <text x="90" y="148" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="10" letter-spacing="8" fill="#E0E0E0" text-anchor="middle" opacity="0.5">CHERRY</text>
      <text x="90" y="192" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="44" font-weight="300" letter-spacing="4" fill="#E0E0E0" text-anchor="middle">NOIR</text>
      <text x="90" y="214" font-family="monospace"
        font-size="5.5" letter-spacing="3.5" fill="#888" text-anchor="middle">ZERO SUGAR</text>
      <text x="90" y="280" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="28" font-style="italic" font-weight="300"
        fill="#C1121F" text-anchor="middle" opacity="0.7">zero</text>
      <rect x="26" y="40" width="128" height="336">
        <animate attributeName="opacity" values="0;0.06;0" dur="3s" repeatCount="indefinite"/>
        <set attributeName="fill" to="white"/>
      </rect>
      <path d="M26 40 L38 28 L142 28 L154 40Z" fill="url(#f2acc)"/>
      <ellipse cx="90" cy="28" rx="64" ry="16">
        <linearGradient id="f2tp" cx="40%" cy="38%" r="55%">
          <stop offset="0%" stop-color="#C5C5C5"/>
          <stop offset="100%" stop-color="#404040"/>
        </linearGradient>
        <set attributeName="fill" to="#ABABAB"/>
      </ellipse>
      <rect x="76" y="19" width="28" height="10" rx="5" fill="#BFBFBF"/>
    </svg>`;
}

function reserveCan() {
  return `
    <svg viewBox="0 0 180 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="f3bg" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#00101E"/>
          <stop offset="25%"  stop-color="#001E30"/>
          <stop offset="50%"  stop-color="#003049"/>
          <stop offset="75%"  stop-color="#001E30"/>
          <stop offset="100%" stop-color="#00101E"/>
        </linearGradient>
        <linearGradient id="f3gl" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="white" stop-opacity="0"/>
          <stop offset="50%"  stop-color="#669BBC" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="f3cr" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#2A4A5A"/>
          <stop offset="40%"  stop-color="#A8C8D8"/>
          <stop offset="60%"  stop-color="#A0C0D0"/>
          <stop offset="100%" stop-color="#2A4A5A"/>
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="388" rx="64" ry="14" fill="#000A12" opacity="0.6"/>
      <ellipse cx="90" cy="376" rx="64" ry="16" fill="#001018"/>
      <rect x="26" y="40" width="128" height="336" fill="url(#f3bg)"/>
      <rect x="26" y="40"  width="128" height="5" fill="#669BBC"/>
      <rect x="26" y="371" width="128" height="5" fill="#669BBC"/>
      <text x="90" y="148" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="10" letter-spacing="8" fill="#FFF1D0" text-anchor="middle" opacity="0.55">CHERRY</text>
      <text x="90" y="192" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="44" font-weight="300" letter-spacing="4" fill="#FFF1D0" text-anchor="middle">NOIR</text>
      <text x="90" y="214" font-family="monospace"
        font-size="5.5" letter-spacing="3.5" fill="#669BBC" text-anchor="middle">RESERVE</text>
      <text x="90" y="278" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="11" font-style="italic" font-weight="300"
        fill="#669BBC" text-anchor="middle" opacity="0.7">Cask Aged · 90 Days</text>
      <line x1="42" y1="290" x2="138" y2="290" stroke="#669BBC" stroke-width="0.5" opacity="0.3"/>
      <rect x="26" y="40" width="128" height="336" fill="url(#f3gl)"/>
      <path d="M26 40 L38 28 L142 28 L154 40Z" fill="url(#f3cr)"/>
      <ellipse cx="90" cy="28" rx="64" ry="16" fill="#7090A8"/>
      <ellipse cx="90" cy="26" rx="44" ry="10" fill="#8AACBE"/>
      <rect x="76" y="19" width="28" height="10" rx="5" fill="#99B8C8"/>
    </svg>`;
}

function iceCan() {
  return `
    <svg viewBox="0 0 180 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="f4bg" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#0D1820"/>
          <stop offset="25%"  stop-color="#162535"/>
          <stop offset="50%"  stop-color="#1E3448"/>
          <stop offset="75%"  stop-color="#162535"/>
          <stop offset="100%" stop-color="#0D1820"/>
        </linearGradient>
        <linearGradient id="f4fr" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="white" stop-opacity="0"/>
          <stop offset="35%"  stop-color="#A8D8F0" stop-opacity="0.12"/>
          <stop offset="50%"  stop-color="white"   stop-opacity="0.22"/>
          <stop offset="65%"  stop-color="#A8D8F0" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="f4cr" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#3A5A70"/>
          <stop offset="40%"  stop-color="#D0ECFA"/>
          <stop offset="60%"  stop-color="#C8E8F8"/>
          <stop offset="100%" stop-color="#3A5A70"/>
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="388" rx="64" ry="14" fill="#050D14" opacity="0.6"/>
      <ellipse cx="90" cy="376" rx="64" ry="16" fill="#0D1820"/>
      <rect x="26" y="40" width="128" height="336" fill="url(#f4bg)"/>
      <rect x="26" y="40"  width="128" height="5" fill="#669BBC"/>
      <rect x="26" y="371" width="128" height="5" fill="#669BBC"/>
      <text x="90" y="148" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="10" letter-spacing="8" fill="#D8EFF8" text-anchor="middle" opacity="0.6">CHERRY</text>
      <text x="90" y="192" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="44" font-weight="300" letter-spacing="4" fill="#D8EFF8" text-anchor="middle">NOIR</text>
      <text x="90" y="214" font-family="monospace"
        font-size="5.5" letter-spacing="3.5" fill="#8EC4E0" text-anchor="middle">ICE</text>
      <!-- Frost crystal marks -->
      <path d="M60 260 L60 290 M50 270 L70 280 M50 280 L70 270" stroke="#A8D8F0" stroke-width="0.8" opacity="0.3"/>
      <path d="M110 255 L110 285 M100 265 L120 275 M100 275 L120 265" stroke="#A8D8F0" stroke-width="0.8" opacity="0.25"/>
      <text x="90" y="310" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="10" font-style="italic" font-weight="300"
        fill="#8EC4E0" text-anchor="middle" opacity="0.55">Blue Marble Edition</text>
      <rect x="26" y="40" width="128" height="336" fill="url(#f4fr)"/>
      <path d="M26 40 L38 28 L142 28 L154 40Z" fill="url(#f4cr)"/>
      <ellipse cx="90" cy="28" rx="64" ry="16" fill="#8ABED8"/>
      <ellipse cx="90" cy="26" rx="44" ry="10" fill="#A0D0E8"/>
      <rect x="76" y="19" width="28" height="10" rx="5" fill="#B0D8F0"/>
    </svg>`;
}

const variants = [
  {
    id: 'original',
    name: 'Cherry Noir<br>Original',
    number: '01',
    descriptor: 'The benchmark. The obsession.',
    notes: ['Dark Marasca Cherry', 'Vanilla Smoke', 'Limestone Mineral Finish'],
    svg: originalCan(),
  },
  {
    id: 'zero',
    name: 'Cherry Noir<br>Zero',
    number: '02',
    descriptor: 'All the depth. None of the compromise.',
    notes: ['Cold-Pressed Cherry', 'Black Pepper Note', 'Zero Sugar · Zero Sacrifice'],
    svg: zeroCan(),
  },
  {
    id: 'reserve',
    name: 'Cherry Noir<br>Reserve',
    number: '03',
    descriptor: 'Ninety days in Calvados cask. Then forgotten. Then found.',
    notes: ['Cask-Aged 90 Days', 'Dried Cherry', 'Apple Brandy Undertone'],
    svg: reserveCan(),
  },
  {
    id: 'ice',
    name: 'Cherry Noir<br>Ice',
    number: '04',
    descriptor: 'Glacial cold. Cherry blossom on stone.',
    notes: ['Cherry Blossom', 'Cold Mineral', 'Citrus Ice Finish'],
    svg: iceCan(),
  },
];

export function render() {
  const cards = variants.map(v => `
    <article class="flavour-card flavour-card--${v.id}" data-variant="${v.id}"
      aria-label="${v.name.replace('<br>', ' ')}">

      <div class="flavour-card__visual" data-condensation-target>
        <canvas class="flavour-card__canvas" aria-hidden="true"></canvas>
        <div class="flavour-card__can">
          ${v.svg}
        </div>
      </div>

      <div class="flavour-card__info">
        <span class="flavour-card__number t-mono">${v.number} / 04</span>

        <h3 class="flavour-card__name t-display-italic">${v.name}</h3>

        <p class="flavour-card__descriptor t-body" style="opacity:.65; font-size: var(--text-base); line-height:1.6; max-width:34ch">
          ${v.descriptor}
        </p>

        <div class="flavour-card__notes">
          ${v.notes.map(n => `<span class="flavour-card__note t-mono">${n}</span>`).join('')}
        </div>

        <div class="flavour-card__cta">
          <a href="#merch" class="flavour-card__cta-link t-mono">
            Add to Collection
          </a>
        </div>
      </div>

      <span class="flavour-card__watermark" aria-hidden="true">${v.number}</span>
    </article>
  `).join('');

  return `
    <section class="flavours" id="flavours" aria-label="Flavours">
      <div class="flavours__header">
        <h2 class="flavours__title t-display reveal-clip">The Line.</h2>
        <span class="flavours__count t-mono c-crimson">04 variants</span>
      </div>
      ${cards}
    </section>
  `;
}

/* Condensation particle engine ─────────────────────── */
function spawnCondensation(canvas) {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width  = rect.width;
  canvas.height = rect.height;

  const ctx = canvas.getContext('2d');

  const drops = Array.from({ length: 14 }, () => ({
    x:       30 + Math.random() * (canvas.width  - 60),
    y:       10 + Math.random() * (canvas.height * 0.25),
    vy:      1.5 + Math.random() * 1.5,
    r:       1.5 + Math.random() * 2.5,
    alpha:   0.55 + Math.random() * 0.35,
    trail:   [],
    wobble:  (Math.random() - 0.5) * 0.4,
  }));

  let rafId;
  const fadeZone = canvas.height * 0.65;

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drops.forEach(d => {
      d.x  += d.wobble;
      d.y  += d.vy;
      d.trail.push({ x: d.x, y: d.y });
      if (d.trail.length > 10) d.trail.shift();

      const fade = d.y > fadeZone
        ? Math.max(0, 1 - (d.y - fadeZone) / (canvas.height * 0.3))
        : 1;

      if (d.y > canvas.height + 10) {
        d.y     = 5 + Math.random() * (canvas.height * 0.2);
        d.x     = 30 + Math.random() * (canvas.width - 60);
        d.trail = [];
      }

      const a = d.alpha * fade;
      if (a < 0.01) return;

      // Trail
      if (d.trail.length > 2) {
        ctx.beginPath();
        ctx.moveTo(d.trail[0].x, d.trail[0].y);
        d.trail.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.strokeStyle = `rgba(190, 230, 255, ${a * 0.22})`;
        ctx.lineWidth   = d.r * 0.55;
        ctx.lineCap     = 'round';
        ctx.stroke();
      }

      // Drop body
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 235, 255, ${a * 0.75})`;
      ctx.fill();

      // Specular gleam
      ctx.beginPath();
      ctx.arc(d.x - d.r * 0.3, d.y - d.r * 0.3, d.r * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${a * 0.5})`;
      ctx.fill();
    });

    rafId = requestAnimationFrame(tick);
  }

  tick();
  return () => { cancelAnimationFrame(rafId); ctx.clearRect(0, 0, canvas.width, canvas.height); };
}

export function init() {
  const cards = document.querySelectorAll('.flavour-card');

  cards.forEach(card => {
    const canvas = card.querySelector('.flavour-card__canvas');
    if (!canvas) return;

    let stop = null;

    card.addEventListener('mouseenter', () => {
      if (stop) stop();
      stop = spawnCondensation(canvas);
    });

    card.addEventListener('mouseleave', () => {
      if (stop) { stop(); stop = null; }
    });
  });
}
