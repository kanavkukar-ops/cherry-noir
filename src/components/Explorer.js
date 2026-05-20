/* ─────────────────────────────────────────────────────
   FLAVOUR EXPLORER — Showpiece interactive section.
   Circular wheel of 8 descriptors around a central can.
   Hover illuminates the note, shifts page bg tint,
   and surfaces a 2-line flavour story.
───────────────────────────────────────────────────── */

const DESCRIPTORS = [
  {
    id: 'dark-cherry',
    label: 'DARK CHERRY',
    angle: 0,
    story: 'Deep marasca cherry, slow-pressed at midnight. The backbone of everything.',
    tint: 'rgba(120, 0, 0, 0.18)',
    color: '#8B0028',
  },
  {
    id: 'vanilla-smoke',
    label: 'VANILLA SMOKE',
    angle: 45,
    story: 'Warm Tahitian vanilla traced with a faint thread of cold smoke.',
    tint: 'rgba(107, 74, 42, 0.15)',
    color: '#8B6A3A',
  },
  {
    id: 'citrus-bite',
    label: 'CITRUS BITE',
    angle: 90,
    story: 'A flash of lemon zest at the back of the throat. Clean. Gone.',
    tint: 'rgba(150, 120, 0, 0.12)',
    color: '#C4A000',
  },
  {
    id: 'black-pepper',
    label: 'BLACK PEPPER FINISH',
    angle: 135,
    story: 'Tellicherry pepper. The finish that demands a second sip.',
    tint: 'rgba(40, 40, 40, 0.25)',
    color: '#555555',
  },
  {
    id: 'cold-mineral',
    label: 'COLD MINERAL',
    angle: 180,
    story: 'Spring-cold, mineral-clear carbonation. Stone and water and nothing else.',
    tint: 'rgba(102, 155, 188, 0.15)',
    color: '#669BBC',
  },
  {
    id: 'caramel-depth',
    label: 'CARAMEL DEPTH',
    angle: 225,
    story: 'Dark burnt caramel. The sugar that never really left.',
    tint: 'rgba(140, 90, 0, 0.14)',
    color: '#8C5A00',
  },
  {
    id: 'cherry-blossom',
    label: 'CHERRY BLOSSOM',
    angle: 270,
    story: 'Sakura-light. The floral whisper against all that darkness.',
    tint: 'rgba(180, 80, 120, 0.12)',
    color: '#D4729A',
  },
  {
    id: 'raw-cocoa',
    label: 'RAW COCOA',
    angle: 315,
    story: 'Unsweetened. Bitter. Grounding. The cocoa note hiding in the base.',
    tint: 'rgba(60, 26, 0, 0.2)',
    color: '#5A2800',
  },
];

/* Polar to cartesian with 0° at top (12 o'clock) */
function polar(angleDeg, radius, cx, cy) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

/* Central can silhouette (minimal, outline only) */
function centralCan(cx, cy) {
  const w = 44, h = 96;
  const x = cx - w / 2;
  const y = cy - h / 2;
  return `
    <g class="explorer__can-silhouette" aria-hidden="true">
      <!-- Body -->
      <rect x="${x}" y="${y + 8}" width="${w}" height="${h - 16}" rx="3"
        fill="none" stroke="var(--crimson)" stroke-width="1" stroke-opacity="0.5"/>
      <!-- Top cap -->
      <ellipse cx="${cx}" cy="${y + 8}" rx="${w / 2}" ry="7"
        fill="none" stroke="var(--crimson)" stroke-width="1" stroke-opacity="0.5"/>
      <!-- Bottom cap -->
      <ellipse cx="${cx}" cy="${y + h - 8}" rx="${w / 2}" ry="7"
        fill="none" stroke="var(--crimson)" stroke-width="1" stroke-opacity="0.5"/>
      <!-- Inner tab ellipse -->
      <ellipse cx="${cx}" cy="${y + 5}" rx="12" ry="4"
        fill="none" stroke="var(--crimson)" stroke-width="0.7" stroke-opacity="0.35"/>
      <!-- Wordmark hint -->
      <text x="${cx}" y="${cy + 4}" font-family="'Cormorant Garamond',Georgia,serif"
        font-size="9" letter-spacing="2" fill="var(--crimson)" text-anchor="middle"
        opacity="0.6" class="explorer__can-text">NOIR</text>
    </g>
  `;
}

export function render() {
  const size = 700;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 265;

  /* Radial lines */
  const lines = DESCRIPTORS.map(d => {
    const pt = polar(d.angle, radius, cx, cy);
    return `
      <line
        class="explorer__radial-line"
        data-descriptor="${d.id}"
        x1="${cx}" y1="${cy}"
        x2="${pt.x}" y2="${pt.y}"
      />
    `;
  }).join('');

  /* Descriptor labels */
  const labels = DESCRIPTORS.map(d => {
    const pt    = polar(d.angle, radius + 28, cx, cy);
    const inner = polar(d.angle, radius - 10,  cx, cy);

    /* Text-anchor based on position */
    let anchor = 'middle';
    if (d.angle > 15 && d.angle < 165)  anchor = 'start';
    if (d.angle > 195 && d.angle < 345) anchor = 'end';

    /* Dot marker */
    const dot = polar(d.angle, radius, cx, cy);

    return `
      <g class="explorer__descriptor" data-id="${d.id}" role="button"
        tabindex="0" aria-label="Explore ${d.label} tasting note">
        <!-- Hit-area circle (invisible) -->
        <circle cx="${pt.x}" cy="${pt.y}" r="28" fill="transparent"/>

        <!-- Dot at radius -->
        <circle class="explorer__dot" cx="${dot.x}" cy="${dot.y}" r="3"
          fill="var(--crimson)" opacity="0.25"/>

        <!-- Label -->
        <text
          class="explorer__descriptor-text"
          x="${pt.x}"
          y="${pt.y}"
          text-anchor="${anchor}"
          dominant-baseline="middle"
        >${d.label}</text>
      </g>
    `;
  }).join('');

  /* Outer decorative ring */
  const ringR = radius + 56;

  return `
    <section class="explorer" id="explorer" aria-label="Flavour Explorer">
      <div class="explorer__bg-tint" aria-hidden="true" id="explorer-tint"></div>

      <div class="explorer__title-wrapper">
        <h2 class="explorer__title t-display reveal-clip">What You Taste.</h2>
        <p class="explorer__subtitle t-mono">— Hover a note to explore</p>
      </div>

      <div class="explorer__wheel-container">
        <svg class="explorer__wheel-svg" viewBox="0 0 ${size} ${size}"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

          <!-- Outer decorative circle -->
          <circle cx="${cx}" cy="${cy}" r="${ringR}"
            fill="none" stroke="var(--crimson)" stroke-width="0.5" stroke-opacity="0.08"/>

          <!-- Mid ring -->
          <circle cx="${cx}" cy="${cy}" r="${radius}"
            fill="none" stroke="var(--crimson)" stroke-width="0.5" stroke-opacity="0.12"/>

          <!-- Radial lines -->
          ${lines}

          <!-- Central can silhouette -->
          ${centralCan(cx, cy)}

          <!-- Descriptor labels (on top) -->
          ${labels}
        </svg>
      </div>

      <!-- Story display -->
      <div class="explorer__story" id="explorer-story" aria-live="polite">
        <p class="explorer__story-descriptor t-mono" id="explorer-story-label"></p>
        <p class="explorer__story-text t-body" id="explorer-story-text"></p>
      </div>
    </section>
  `;
}

export function init() {
  const section    = document.querySelector('.explorer');
  const tintEl     = document.getElementById('explorer-tint');
  const storyLabel = document.getElementById('explorer-story-label');
  const storyText  = document.getElementById('explorer-story-text');

  if (!section) return;

  let activeId = null;

  document.querySelectorAll('.explorer__descriptor').forEach(el => {
    const id   = el.dataset.id;
    const data = DESCRIPTORS.find(d => d.id === id);
    if (!data) return;

    const activate = () => {
      if (activeId === id) return;
      activeId = id;

      /* Deactivate all */
      document.querySelectorAll('.explorer__descriptor').forEach(e => {
        e.classList.remove('is-active');
      });
      document.querySelectorAll('.explorer__radial-line').forEach(l => {
        l.style.strokeOpacity = '0.18';
      });

      /* Activate this one */
      el.classList.add('is-active');
      const line = document.querySelector(`.explorer__radial-line[data-descriptor="${id}"]`);
      if (line) line.style.strokeOpacity = '0.7';

      /* Tint section bg */
      tintEl.style.background = data.tint;
      tintEl.style.opacity    = '1';

      /* Story */
      storyLabel.textContent = data.label;
      storyText.textContent  = data.story;
      storyLabel.classList.add('is-visible');
      storyText.classList.add('is-visible');
    };

    el.addEventListener('mouseenter', activate);
    el.addEventListener('focus',      activate);
    el.addEventListener('click',      activate);

    /* Keyboard support */
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
  });

  /* Deactivate on section mouseleave */
  section.addEventListener('mouseleave', () => {
    activeId = null;
    document.querySelectorAll('.explorer__descriptor').forEach(e =>
      e.classList.remove('is-active'));
    document.querySelectorAll('.explorer__radial-line').forEach(l =>
      l.style.strokeOpacity = '0.18');
    tintEl.style.opacity = '0';
    storyLabel.classList.remove('is-visible');
    storyText.classList.remove('is-visible');
  });
}
