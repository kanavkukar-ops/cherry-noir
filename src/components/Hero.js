/* ─────────────────────────────────────────────────────
   HERO — Full viewport cinematic reveal.
   Photography-first. The hero seduces, not screams.
───────────────────────────────────────────────────── */

export function render() {
  return `
    <section class="hero" id="hero" aria-label="Hero">

      <!-- Real photography layer — dark cherry moody -->
      <div class="hero__photo-wrap" aria-hidden="true">
        <img
          class="hero__photo"
          src="/images/hero-bg.jpg"
          alt=""
          role="presentation"
          fetchpriority="high"
          decoding="async"
        />
        <!-- Cinematic overlay: darken edges, add red warmth -->
        <div class="hero__photo-overlay"></div>
      </div>

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
      </div>

      <!-- Scroll indicator -->
      <div class="hero__scroll-hint" aria-hidden="true">
        <span class="hero__scroll-label t-mono">Scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
    </section>
  `;
}
