export default class HomePage {
  async render() {
    return `
      <header-page></header-page>
      <section class="home-container">
      <div class="home-content">
      <h1> Ansaju </h1>
      </div>
      </section>
      <footer-page></footer-page>
      `;
  }

  async afterRender() {
    // Do your job here
  }
}
