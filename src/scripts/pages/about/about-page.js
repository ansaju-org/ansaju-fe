export default class AboutPage {
  async render() {
    return `
      <header-page></header-page>
      <section class="about-container">
      <h1>About Page</h1>
      </section>
      <footer-page></footer-page>
      `;
  }

  async afterRender() {
    // Do your job here
  }
}
