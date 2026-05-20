export function render() {
  return `
    <!-- SVG grain filter — referenced as url(#grain) on merch images -->
    <svg class="grain-svg" aria-hidden="true">
      <defs>
        <filter id="grain" x="0%" y="0%" width="100%" height="100%"
          color-interpolation-filters="linearRGB">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
        </filter>
      </defs>
    </svg>

    <footer class="footer" id="footer">
      <h2 class="footer__headline t-display reveal-clip">
        THE NIGHT<br>IS YOUNG.
      </h2>

      <p class="footer__sub t-mono">
        Cherry Noir · Est. 2024 · London
      </p>

      <form class="footer__email-form" aria-label="Newsletter signup" onsubmit="return false">
        <input
          class="footer__email-input"
          type="email"
          placeholder="Your Email"
          aria-label="Email address"
          autocomplete="email"
        />
        <button class="footer__email-submit" type="submit" aria-label="Subscribe">→</button>
      </form>

      <nav class="footer__nav" aria-label="Footer navigation">
        <a href="#" class="footer__nav-link t-mono">Heritage</a>
        <a href="#flavours" class="footer__nav-link t-mono">Flavours</a>
        <a href="#explorer" class="footer__nav-link t-mono">Explorer</a>
        <a href="#merch" class="footer__nav-link t-mono">Shop</a>
        <a href="#" class="footer__nav-link t-mono">Stockists</a>
        <a href="#" class="footer__nav-link t-mono">Press</a>
      </nav>

      <div class="footer__social" aria-label="Social links">
        <a href="#" class="footer__social-link t-mono" rel="noopener">IG</a>
        <a href="#" class="footer__social-link t-mono" rel="noopener">TK</a>
        <a href="#" class="footer__social-link t-mono" rel="noopener">X</a>
      </div>

      <p class="footer__fine t-mono-xs">
        Cherry Noir is a fictional premium brand concept. Not affiliated with The Coca-Cola Company.<br>
        All rights reserved. © 2024 Cherry Noir Ltd. Drink responsibly.
      </p>
    </footer>
  `;
}
