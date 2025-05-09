class RegisterPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/style.css"/>
      <div class="container">
  <div class="face front">
    <h2>Join our community</h2>
    <form>
      <fieldset class="user">
        <input placeholder="Username" type="text" name="name" required>
      </fieldset>
      <fieldset class="email">
        <input placeholder="Email" type="email" name="email" required>
      </fieldset>
      <fieldset class="password">
        <input placeholder="Password" type="password" name="password" required>
      </fieldset>
      <button class="button" type="submit">
        <i class="fa fa-sign-in"></i>
      </button>
    </form>
  </div>
    `;
  }
}

customElements.define('register-page', RegisterPage);
