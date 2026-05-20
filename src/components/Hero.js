/* ─────────────────────────────────────────────────────
   HERO — Full viewport cinematic reveal.
   The hero does not scream. It seduces.
───────────────────────────────────────────────────── */

function canSVG() {
  return `
    <svg class="hero-can__svg" viewBox="0 0 200 440" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-label="Cherry Noir limited edition can"
      role="img">
      <defs>
        <!-- Cylindrical body shading — left/right shadows, bright centre -->
        <linearGradient id="hbg" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#0D0006"/>
          <stop offset="10%"  stop-color="#2D000E"/>
          <stop offset="28%"  stop-color="#5C0820"/>
          <stop offset="50%"  stop-color="#8B1030"/>
          <stop offset="72%"  stop-color="#5C0820"/>
          <stop offset="90%"  stop-color="#2D000E"/>
          <stop offset="100%" stop-color="#0D0006"/>
        </linearGradient>

        <!-- Chrome neck -->
        <linearGradient id="hcr" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#333"/>
          <stop offset="22%"  stop-color="#C8C8C8"/>
          <stop offset="42%"  stop-color="#F2F2F2"/>
          <stop offset="56%"  stop-color="#ECECEC"/>
          <stop offset="75%"  stop-color="#B0B0B0"/>
          <stop offset="100%" stop-color="#333"/>
        </linearGradient>

        <!-- Top ellipse -->
        <radialGradient id="htop" cx="38%" cy="35%" r="58%">
          <stop offset="0%"   stop-color="#CECECE"/>
          <stop offset="100%" stop-color="#505050"/>
        </radialGradient>

        <!-- Specular highlight stripe -->
        <linearGradient id="hhi" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="white" stop-opacity="0"/>
          <stop offset="44%"  stop-color="white" stop-opacity="0.03"/>
          <stop offset="52%"  stop-color="white" stop-opacity="0.11"/>
          <stop offset="60%"  stop-color="white" stop-opacity="0.03"/>
          <stop offset="100%" stop-color="white" stop-opacity="0"/>
        </linearGradient>

        <!-- Bottom cap -->
        <linearGradient id="hbot" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stop-color="#0A0004"/>
          <stop offset="50%"  stop-color="#220009"/>
          <stop offset="100%" stop-color="#0A0004"/>
        </linearGradient>
      </defs>

      <!-- Drop shadow beneath can -->
      <ellipse cx="100" cy="432" rx="66" ry="10" fill="#0A0000" opacity="0.55"/>

      <!-- Bottom cap ellipse -->
      <ellipse cx="100" cy="416" rx="72" ry="18" fill="url(#hbot)"/>

      <!-- Can body rectangle -->
      <rect x="28" y="44" width="144" height="372" fill="url(#hbg)"/>

      <!-- Crimson accent bands -->
      <rect x="28" y="44"  width="144" height="7" fill="#C1121F"/>
      <rect x="28" y="409" width="144" height="7" fill="#C1121F"/>

      <!-- Label area top: "CHERRY" in small caps -->
      <text x="100" y="162"
        font-family="'Cormorant Garamond', Georgia, serif"
        font-size="11" font-weight="300" letter-spacing="9"
        fill="#FFF1D0" text-anchor="middle" opacity="0.65">CHERRY</text>

      <!-- Main wordmark "NOIR" -->
      <text x="100" y="215"
        font-family="'Cormorant Garamond', Georgia, serif"
        font-size="52" font-weight="300" letter-spacing="6"
        fill="#FFF1D0" text-anchor="middle">NOIR</text>

      <!-- Edition callout -->
      <text x="100" y="246"
        font-family="'Syne Mono', monospace"
        font-size="6.5" font-weight="400" letter-spacing="4"
        fill="#C1121F" text-anchor="middle" opacity="0.9">LIMITED EDITION · NO. 01</text>

      <!-- Cherry illustration: two cherries + stems + leaf -->
      <!-- Left cherry -->
      <circle cx="86"  cy="288" r="12" fill="#780000" opacity="0.9"/>
      <!-- Right cherry (brighter) -->
      <circle cx="102" cy="279" r="12" fill="#C1121F" opacity="0.9"/>
      <!-- Specular on left cherry -->
      <ellipse cx="82" cy="283" rx="4" ry="5.5" fill="white" opacity="0.18"
        transform="rotate(-25 82 283)"/>
      <!-- Specular on right cherry -->
      <ellipse cx="98" cy="274" rx="4" ry="5.5" fill="white" opacity="0.18"
        transform="rotate(-25 98 274)"/>
      <!-- Stems -->
      <path d="M86 276 Q93 258 102 267" stroke="#3A1200" stroke-width="2"
        fill="none" stroke-linecap="round"/>
      <path d="M102 267 Q110 250 116 254" stroke="#3A1200" stroke-width="2"
        fill="none" stroke-linecap="round"/>
      <!-- Leaf -->
      <path d="M110 254 Q116 244 125 248 Q119 256 110 254Z"
        fill="#1A3300" opacity="0.75"/>

      <!-- Thin label rule lines -->
      <line x1="42" y1="313" x2="158" y2="313" stroke="#FFF1D0"
        stroke-width="0.5" opacity="0.15"/>
      <line x1="42" y1="323" x2="158" y2="323" stroke="#FFF1D0"
        stroke-width="0.3" opacity="0.08"/>

      <!-- Fine print -->
      <text x="100" y="365"
        font-family="'Syne Mono', monospace"
        font-size="5" letter-spacing="2.5"
        fill="#FFF1D0" text-anchor="middle" opacity="0.25">330ML · CHERRY NOIR LTD · LONDON</text>

      <!-- Specular highlight overlay -->
      <rect x="28" y="44" width="144" height="372" fill="url(#hhi)"/>

      <!-- Chrome neck trapezoid -->
      <path d="M28 44 L42 30 L158 30 L172 44Z" fill="url(#hcr)"/>

      <!-- Top ellipse — chrome -->
      <ellipse cx="100" cy="30" rx="72" ry="18" fill="url(#htop)"/>

      <!-- Inner depressed circle -->
      <ellipse cx="100" cy="28" rx="50" ry="12" fill="#8C8C8C"/>
      <ellipse cx="100" cy="27" rx="40" ry="9"  fill="#ADADAD"/>

      <!-- Pull tab -->
      <rect x="84" y="21" width="32" height="11" rx="5.5" fill="#C2C2C2"/>
      <ellipse cx="100" cy="21" rx="11" ry="4.5" fill="#A8A8A8"/>
      <circle  cx="100" cy="19" r="3.5" fill="#888"/>
    </svg>
  `;
}

export function render() {
  return `
    <section class="hero" id="hero" aria-label="Hero">
      <!-- Cinematic background layers -->
      <div class="hero__bg" aria-hidden="true"></div>
      <div class="hero__img-layer" aria-hidden="true"></div>

      <div class="hero__content container">
        <!-- Left: headline + CTA -->
        <div class="hero__text">
          <p class="hero__eyebrow t-mono">Cherry Noir · London</p>

          <h1 class="hero__headline" aria-label="The darkest cherry. The finest pour.">
            <span class="hero__headline-line">The</span>
            <span class="hero__headline-line">Darkest</span>
            <span class="hero__headline-line">Cherry.</span>
            <span class="hero__headline-line">The Finest Pour.</span>
          </h1>

          <p class="hero__sub">Cherry Noir · Limited Edition</p>

          <div class="hero__cta">
            <a href="#flavours" class="hero__cta-link t-mono" aria-label="Discover the Noir">
              Discover the Noir
            </a>
            <span class="hero__cta-fill" aria-hidden="true"></span>
          </div>
        </div>

        <!-- Right: can illustration -->
        <div class="hero__can-col" aria-hidden="true">
          <div class="hero__can-glow"></div>
          <div class="hero-can__wrapper" id="hero-can" data-gsap="can-rise">
            ${canSVG()}
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hero__scroll-hint" aria-hidden="true">
        <span class="hero__scroll-label t-mono">Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>
  `;
}
