/* ─────────────────────────────────────────────────────
   FLAVOURS — Four variants as editorial full-bleed cards.
   Photography-driven. No SVG cans. Asymmetric layout.
   Condensation canvas applied on hover.
───────────────────────────────────────────────────── */

const variants = [
  {
    id: 'original',
    name: 'Cherry Noir<br>Original',
    number: '01',
    descriptor: 'The benchmark. The obsession.',
    notes: ['Dark Marasca Cherry', 'Vanilla Smoke', 'Limestone Mineral Finish'],
    photo: '/images/flavour-original.jpg',
    photoAlt: 'Dark cherries glistening on obsidian surface',
  },
  {
    id: 'zero',
    name: 'Cherry Noir<br>Zero',
    number: '02',
    descriptor: 'All the depth. None of the compromise.',
    notes: ['Cold-Pressed Cherry', 'Black Pepper Note', 'Zero Sugar · Zero Sacrifice'],
    photo: '/images/flavour-zero.jpg',
    photoAlt: 'Dark minimal obsidian aesthetic — code on screen',
  },
  {
    id: 'reserve',
    name: 'Cherry Noir<br>Reserve',
    number: '03',
    descriptor: 'Ninety days in Calvados cask. Then forgotten. Then found.',
    notes: ['Cask-Aged 90 Days', 'Dried Cherry', 'Apple Brandy Undertone'],
    photo: '/images/flavour-reserve.jpg',
    photoAlt: 'Dark aged bottles in a wine cellar — deep navy tones',
  },
  {
    id: 'ice',
    name: 'Cherry Noir<br>Ice',
    number: '04',
    descriptor: 'Glacial cold. Cherry blossom on stone.',
    notes: ['Cherry Blossom', 'Cold Mineral', 'Citrus Ice Finish'],
    photo: '/images/flavour-ice.jpg',
    photoAlt: 'Blue frost and ice — cold mineral aesthetic',
  },
];

export function render() {
  const cards = variants.map(v => `
    <article class="flavour-card flavour-card--${v.id}" data-variant="${v.id}"
      aria-label="${v.name.replace('<br>', ' ')}">

      <div class="flavour-card__visual" data-condensation-target>
        <canvas class="flavour-card__canvas" aria-hidden="true"></canvas>

        <!-- Full-bleed photography -->
        <img
          class="flavour-card__photo"
          src="${v.photo}"
          alt="${v.photoAlt}"
          loading="lazy"
          decoding="async"
        />
        <div class="flavour-card__photo-overlay"></div>

        <!-- Variant name watermarked large over photo -->
        <div class="flavour-card__photo-wordmark" aria-hidden="true">
          <span class="t-display">${v.name.replace('<br>', '<br>')}</span>
        </div>
      </div>

      <div class="flavour-card__info">
        <span class="flavour-card__number t-mono">${v.number} / 04</span>

        <h3 class="flavour-card__name t-display-italic">${v.name}</h3>

        <p class="flavour-card__descriptor t-body"
          style="opacity:.65; font-size: var(--text-base); line-height:1.6; max-width:34ch">
          ${v.descriptor}
        </p>

        <div class="flavour-card__notes">
          ${v.notes.map(n => `<span class="flavour-card__note t-mono">${n}</span>`).join('')}
        </div>

        <div class="flavour-card__cta">
          <a href="#merch" class="flavour-card__cta-link t-mono">Add to Collection</a>
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
    x:      30 + Math.random() * (canvas.width  - 60),
    y:      10 + Math.random() * (canvas.height * 0.25),
    vy:     1.5 + Math.random() * 1.5,
    r:      1.5 + Math.random() * 2.5,
    alpha:  0.55 + Math.random() * 0.35,
    trail:  [],
    wobble: (Math.random() - 0.5) * 0.4,
  }));

  let rafId;
  const fadeZone = canvas.height * 0.65;

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drops.forEach(d => {
      d.x += d.wobble;
      d.y += d.vy;
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

      if (d.trail.length > 2) {
        ctx.beginPath();
        ctx.moveTo(d.trail[0].x, d.trail[0].y);
        d.trail.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.strokeStyle = `rgba(190, 230, 255, ${a * 0.22})`;
        ctx.lineWidth   = d.r * 0.55;
        ctx.lineCap     = 'round';
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 235, 255, ${a * 0.75})`;
      ctx.fill();

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
  document.querySelectorAll('.flavour-card').forEach(card => {
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
