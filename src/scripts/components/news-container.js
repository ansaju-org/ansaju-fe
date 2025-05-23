class NewsContainer extends HTMLElement {
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

customElements.define('news-container', NewsContainer);
