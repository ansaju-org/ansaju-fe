export default class HomePage {
  async render() {
    return `
        <div class="section-leftQuestion">
        <div class="leftQuestion-content">
          <h2>Selamat Datang di Atiny Story</h2>
          <p>Cerita Khusus Penggemar Ateez</p>
        </div>
      </div>
        `;
  }

  async afterRender() {
    // Do your job here
  }
}
