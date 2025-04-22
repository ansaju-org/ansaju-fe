class FooterPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/styles/style.css" />
        <footer>
  <div class="footer-content container">
    <p>&copy; 2023 Ansaju. All rights reserved.</p>
    <nav class="footer-navigation">
      <a href="#">Beranda</a>
      <a href="#">Tentang</a>
      <a href="#">Kontak</a>
    </nav>
  </div>
</footer>
      `;
  }
}

customElements.define("footer-page", FooterPage);
