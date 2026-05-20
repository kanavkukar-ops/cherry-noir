export function render() {
  return `
    <nav class="navbar" id="navbar" aria-label="Primary navigation">
      <a href="#" class="navbar__wordmark t-display" aria-label="Cherry Noir home">
        Cherry Noir
      </a>

      <ul class="navbar__links" role="list">
        <li><a href="#heritage" class="navbar__link">Heritage</a></li>
        <li><a href="#flavours" class="navbar__link">Flavours</a></li>
        <li><a href="#explorer" class="navbar__link">Explorer</a></li>
        <li><a href="#merch" class="navbar__link">Shop</a></li>
      </ul>

      <button class="navbar__cta t-mono" type="button">Order Now</button>
    </nav>
  `;
}

export function init() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
