import ArtikelLocal from '../../data/data-artikel/data-artikel';
import { generateArticleListTemplate } from './template-article.js';
import ArtikelPresenter from './artikel-presenter.js';

export default class ArtikelPage {
  #presenter;

  async render() {
    return `
    <header-page></header-page>
      <div id="article"></div>
    `;
  }

  async afterRender() {
    this.#presenter = new ArtikelPresenter({
      model: ArtikelLocal,
      view: this,
    });

    await this.#presenter.showArticles(); // Metode baru, dijelaskan di bawah
  }

  showArticles(articles) {
    const html = articles.reduce((acc, curr) => acc + generateArticleListTemplate(curr), '');

    document.getElementById('article').innerHTML = `
      <ul class="cats-list">
        ${html}
      </ul>
    `;
  }

  showArticle(article) {}
}
