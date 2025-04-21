export default class HomePage {
    async render() {
      return `
      <header-page></header-page>
      <section class="home-container">
      <div class="home-content">
      <h1> Ansaju </h1>
      </div>
      </section>
      `;
    }
  
    async afterRender() {
      // Do your job here
    }
}
  