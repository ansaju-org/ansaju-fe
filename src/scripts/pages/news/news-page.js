export default class NewsPage {
  async render() {
    return `
            <div class="news-page">
                <h1>News Page</h1>
                <div id="news-container"></div>
            </div>
        `;
  }

  async afterRender() {
    // Do your job here
  }
}
