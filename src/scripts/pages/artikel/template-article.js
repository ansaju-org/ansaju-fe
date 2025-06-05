export function generateArticleListTemplate({ id, img, judul }) {
  return `
    <li class="article-list">
      <a href="/artikel/${id}" class="cats-item__link">
        <img
          class="cats-item__image"
          src="${img}"
          alt="article title: ${judul}"
        >
        <h2 class="item-title">${judul}</h2>
      </a>
    </li>
    `;
}

export function generateArticleDetailTemplate({ img, judul, isi }) {
  return `
    <div class="article-detail__image-container">
      <img
        class="artikel-detail__image"
        src="${img}"
        alt="${judul}"
      >
    </div>
    <h1 class="artikel-detail__title">${judul}</h1>
    <div class="artikel-detail__description">
      <p>${isi}</p>
    </div>
    `;
}
