// import HeaderPresenter from '../presenter/header-presenter.js';

class LoginPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/style.css" />
      
    `;
  }
}

customElements.define('login-page', LoginPage);
