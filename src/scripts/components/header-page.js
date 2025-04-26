import HeaderPresenter from '../presenter/header-presenter.js';

class HeaderPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    HeaderPresenter.init(this);
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
}

customElements.define('header-page', HeaderPage);
