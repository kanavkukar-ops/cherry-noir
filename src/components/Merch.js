/* ─────────────────────────────────────────────────────
   MERCH — Editorial shop layout. Magazine spread.
   Real photography. Grain overlay. Text-link CTAs.
───────────────────────────────────────────────────── */

const products = [
  {
    id: 'pack',
    label: 'Product 01',
    name: 'Cherry Noir\n6-Pack Box',
    desc: 'Six cans of Original, housed in a matte-black box with letterpress branding. Tissue-wrapped. Sealed with a wax Cherry Noir stamp. Arrives like a gift because it is.',
    price: '£36',
    cta: 'Add to Collection',
    photo: '/images/merch-pack.jpg',
    photoAlt: 'Dark luxury product packaging — matte black box',
  },
  {
    id: 'glass',
    label: 'Product 02',
    name: 'The Noir\nGlass Set',
    desc: 'Two hand-blown crystal-style glasses, etched with the Cherry Noir crest. Designed for the pour you actually deserve. Weight, form, clarity — each considered.',
    price: '£95',
    cta: 'Add to Collection',
    photo: '/images/merch-glass.jpg',
    photoAlt: 'Crystal glasses on a dark surface — elegant and minimal',
  },
  {
    id: 'sub',
    label: 'Product 03',
    name: 'Cherry Noir\nSubscription',
    desc: 'Monthly drops delivered to your door. First access to limited editions. Founding Member pricing locked for life. The quiet way to never run out.',
    price: '£28 / mo',
    cta: 'Become a Founding Member',
    photo: '/images/merch-sub.jpg',
    photoAlt: 'Luxury subscription box — dark flat lay product photography',
  },
];

export function render() {
  const items = products.map(p => {
    const nameLines = p.name.split('\n');
    return `
      <article class="merch__item" data-product="${p.id}" aria-label="${p.name.replace('\n', ' ')}">

        <div class="merch__image-col">
          <img
            class="merch__photo"
            src="${p.photo}"
            alt="${p.photoAlt}"
            loading="lazy"
            decoding="async"
          />
          <div class="merch__photo-overlay merch__photo-overlay--${p.id}"></div>
        </div>

        <div class="merch__info">
          <span class="merch__label t-mono">${p.label}</span>

          <h3 class="merch__name t-display">
            ${nameLines.map(l => `<span style="display:block">${l}</span>`).join('')}
          </h3>

          <p class="merch__desc t-body">${p.desc}</p>

          <p class="merch__price t-sub">${p.price}</p>

          <div class="merch__add">
            <a href="#" class="merch__add-link t-mono" aria-label="${p.cta}">
              ${p.cta}
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  return `
    <section class="merch" id="merch" aria-label="Shop">
      <div class="merch__header container">
        <h2 class="merch__title t-display reveal-clip">The Shop.</h2>
      </div>
      ${items}
    </section>
  `;
}
