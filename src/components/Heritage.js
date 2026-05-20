/* ─────────────────────────────────────────────────────
   HERITAGE — Brand story. Alternating section rhythm.
   Real photography. Parallax differential. Timeline.
───────────────────────────────────────────────────── */

function cherrySVG() {
  return `
    <svg class="cherry-icon" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="7"  cy="16" r="5" fill="currentColor" opacity="0.75"/>
      <circle cx="15" cy="13" r="5" fill="currentColor"/>
      <ellipse cx="5"  cy="14" rx="1.8" ry="2.3" fill="white" opacity="0.2"
        transform="rotate(-30 5 14)"/>
      <ellipse cx="13" cy="11" rx="1.8" ry="2.3" fill="white" opacity="0.2"
        transform="rotate(-30 13 11)"/>
      <path d="M7 11 Q11 4 15 8" stroke="currentColor" stroke-width="1.5"
        fill="none" stroke-linecap="round" opacity="0.6"/>
      <path d="M15 8 Q18 3 20 5" stroke="currentColor" stroke-width="1.5"
        fill="none" stroke-linecap="round" opacity="0.6"/>
    </svg>
  `;
}

function cherryRule(color = 'currentColor') {
  return `
    <div class="heritage__cherry-rule" style="color: ${color}" aria-hidden="true">
      <div class="heritage__rule-line"></div>
      ${cherrySVG()}${cherrySVG()}${cherrySVG()}${cherrySVG()}${cherrySVG()}
      <div class="heritage__rule-line"></div>
    </div>
  `;
}

export function render() {
  return `
    <section class="heritage" id="heritage" aria-label="Heritage">

      <!-- Block 1: Dark (Gochujang) — origin story -->
      <div class="heritage__block heritage__block--dark">
        <div class="heritage__image-col" data-parallax="image">
          <img
            class="heritage__image"
            src="/src/assets/images/heritage-1.jpg"
            alt="Dark moody cherry photography — editorial lighting"
            loading="lazy"
            decoding="async"
          />
          <div class="heritage__image-scrim heritage__image-scrim--dark"></div>
        </div>

        <div class="heritage__text-col" data-parallax="text">
          <p class="heritage__section-label t-mono reveal-fade s-0">01 — Origin</p>

          <h2 class="heritage__heading t-display reveal-clip s-1">
            Born in<br>Darkness.
          </h2>

          ${cherryRule('var(--crimson)')}

          <p class="heritage__body t-body reveal-fade s-2">
            It began in a small bottling plant outside London in 1985.
            A chemist. A barrel of Marasca cherries. An obsession with
            the note that sat just below sweetness — the dark, almost
            mineral depth that mass production always smoothed away.
          </p>

          <p class="heritage__body t-body reveal-fade s-3">
            Cherry Noir was never meant to be scaled. It was meant to
            be felt. Every batch pressed by hand. Every bottle sealed
            with the same ceremony as the first.
          </p>

          <blockquote class="heritage__pull">
            "Pressed. Carbonated.<br>Perfected since 1985."
          </blockquote>
        </div>
      </div>

      <!-- Block 2: Light (Varden) — craft process -->
      <div class="heritage__block heritage__block--light heritage__block--reversed">
        <div class="heritage__image-col" data-parallax="image">
          <img
            class="heritage__image"
            src="/src/assets/images/heritage-2.jpg"
            alt="Mountain landscape — the mineral spring source"
            loading="lazy"
            decoding="async"
          />
          <div class="heritage__image-scrim heritage__image-scrim--light"></div>
        </div>

        <div class="heritage__text-col" data-parallax="text">
          <p class="heritage__section-label t-mono c-gochujang reveal-fade s-0">02 — Process</p>

          <h2 class="heritage__heading t-display c-noir heritage__heading--bleed reveal-clip s-1">
            The Art of<br>Restraint.
          </h2>

          ${cherryRule('var(--gochujang)')}

          <p class="heritage__body t-body c-noir reveal-fade s-2">
            We source a single variety of dark Morello cherry from three
            farms in the Emilia-Romagna valley. The fruit is cold-pressed
            within 24 hours of harvest. Nothing added. Nothing taken away.
            Just the cherry, the cold, and time.
          </p>

          <p class="heritage__body t-body c-noir reveal-fade s-3">
            The carbonation is spring water, drawn from the same limestone
            aquifer since the plant opened. The minerals are not
            incidental — they are the finish.
          </p>

          <blockquote class="heritage__pull heritage__pull--light">
            "The cherry does not<br>need our help. Only<br>our patience."
          </blockquote>
        </div>
      </div>

      <!-- Timeline -->
      <div class="heritage__timeline" id="heritage-timeline">
        <div class="heritage__timeline-inner">
          <div class="heritage__timeline-line" aria-hidden="true"></div>

          <div class="timeline-item reveal-fade s-0">
            <p class="timeline-year t-mono">1985</p>
            <p class="timeline-text t-body">
              First batch pressed in Bermondsey. 48 bottles. Sold out in two days.
            </p>
          </div>

          <div class="timeline-item reveal-fade s-1">
            <p class="timeline-year t-mono">1991</p>
            <p class="timeline-text t-body">
              Cherry Noir debuts at the London International Drinks Exposition.
              Best New Soft Drink. The judges call it "disquietingly good."
            </p>
          </div>

          <div class="timeline-item reveal-fade s-2">
            <p class="timeline-year t-mono">1998</p>
            <p class="timeline-text t-body">
              A single supply deal with Claridge's. Room service only.
              The waiting list begins.
            </p>
          </div>

          <div class="timeline-item reveal-fade s-3">
            <p class="timeline-year t-mono">2009</p>
            <p class="timeline-text t-body">
              Cherry Noir Zero introduced — same depth, same process.
              Zero compromise on flavour. Zero sugar.
            </p>
          </div>
        </div>

        <div class="heritage__timeline-inner">
          <div class="heritage__timeline-line" aria-hidden="true"></div>

          <div class="timeline-item reveal-fade s-1">
            <p class="timeline-year t-mono">2014</p>
            <p class="timeline-text t-body">
              Cherry Noir Reserve released — first in the Limited Cask series,
              aged 90 days in former Calvados barrels.
            </p>
          </div>

          <div class="timeline-item reveal-fade s-2">
            <p class="timeline-year t-mono">2019</p>
            <p class="timeline-text t-body">
              The Blue Marble Edition (Cherry Noir Ice) debuts at London Fashion Week.
              250 bottles. Photographed by 14 major publications.
            </p>
          </div>

          <div class="timeline-item reveal-fade s-3">
            <p class="timeline-year t-mono">2024</p>
            <p class="timeline-text t-body">
              Cherry Noir opens its first flagship in Mayfair.
              The night is young. The pour, eternal.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
