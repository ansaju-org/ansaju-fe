export default class ProfilePresenter {
  #view;
  #presenter;

  constructor({ view, presenter }) {
    this.#view = view;
    this.#presenter = presenter;
  }

  async displayUserInfo() {
    try {
      const userStorage = localStorage.getItem('user');
      if (!userStorage) return;

      const { name = 'Nama tidak tersedia', email = 'Email tidak tersedia' } =
        JSON.parse(userStorage);

      const nameElement = document.getElementById('user-name');
      const emailElement = document.getElementById('user-email');

      if (nameElement) nameElement.textContent = name;
      if (emailElement) emailElement.textContent = email;
    } catch (error) {
      console.error('Gagal menampilkan informasi pengguna:', error);
    }
  }
}
