class HeaderPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupDrawer();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/style.css" />
      <header>
        <div class="main-header container">
          <div class="left-group">
            <img src="/logo.png" alt="logo-ansaju" class="logo" />
            <a class="brand-name" href="#/">Ansaju</a>
            <nav id="navigation-drawer" class="navigation-drawer">
              <ul class="nav-list">
                <li><a href="#/home">Home</a></li>
                <li><a href="#/about">About</a></li>
              </ul>
            </nav>
          </div>
          <button id="drawer-button" class="drawer-button">☰</button>
        </div>
      </header>
    `;
  }
  setupDrawer() {
    const drawerButton = this.shadowRoot.querySelector('#drawer-button');
    const navigationDrawer = this.shadowRoot.querySelector('#navigation-drawer');

    drawerButton.addEventListener('click', (event) => {
      event.stopPropagation(); 
      navigationDrawer.classList.toggle('open');
    });

    document.body.addEventListener('click', (event) => {
      if (
        !this.shadowRoot.contains(event.target)
      ) {
        navigationDrawer.classList.remove('open');
      }

      navigationDrawer.querySelectorAll('a').forEach((link) => {
        if (link.contains(event.target)) {
          navigationDrawer.classList.remove('open');
        }
      });
    });
  }
}

customElements.define('header-page', HeaderPage);
