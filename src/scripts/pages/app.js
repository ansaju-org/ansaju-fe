import routes from '../routes/routes';
import { getActiveRoute } from '../routes/url-parser';
import { checkAuthenticatedRoute, getAccessToken } from '../utils/auth';

class App {
  #content = null;

  constructor({ content }) {
    this.#content = content;
  }

  async renderPage() {
    const url = getActiveRoute();
    let page = routes[url];

    // Proteksi halaman yang butuh login
    const protectedRoutes = ['/home', '/about', '/news', '/contact'];
    console.log('DEBUG: url', url, 'protectedRoutes', protectedRoutes, 'token', getAccessToken());
    if (protectedRoutes.includes(url)) {
      page = checkAuthenticatedRoute(page);
      if (!page) return;
    }

    this.#content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
