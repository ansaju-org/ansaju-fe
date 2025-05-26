import SidebarPresenter from '../../components-presenter/sidebar-presenter';
import ProfilePresenter from './profile-presenter';

export default class ProfilePage {
  #presenter = null;

  async render() {
    return `
      <nav class="bg-[#00bfff] flex justify-between h-16 items-center px-4">
        <div id="open-sidebar" class="flex items-center">
          <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M10 4H4c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h6V4ZM4.37868 9.29289c-.39052.39053-.39052 1.02371 0 1.41421l1.29283 1.2928-1.29283 1.2929c-.39052.3905-.39052 1.0237 0 1.4142.39052.3905 1.02369.3905 1.41421 0l1.99994-2c.39053-.3905.39053-1.0236 0-1.4142L5.79289 9.29289c-.39052-.39052-1.02369-.39052-1.41421 0Z" clip-rule="evenodd"/>
            <path d="M12 20h8c1.1046 0 2-.8954 2-2V6c0-1.10457-.8954-2-2-2h-8v16Z"/>
          </svg>
        </div>
      </nav>

      <div class="flex flex-col min-h-screen md:flex-row">
        <sidebar-page></sidebar-page>

        <section class="card flex-1 flex flex-col items-center justify-center gap-8 p-4 sm:p-6 lg:p-8">
          <div class="relative mx-auto w-full max-w-xs h-[420px] rounded-xl bg-[#00bfff] overflow-hidden" style="box-shadow: 0 20px 40px rgba(0, 191, 255, 0.6);">
            <!-- Top bar -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-11/12 h-20 bg-[#98e4ae] animate-dsTop rounded-bl-xl rounded-br-xl"></div>

            <!-- Avatar -->
            <div class="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-2 border-[#f8f8f6] bg-[#00bfff] animate-mvTop">
              <img class="w-24 h-24" src="/logo.png" alt="">
            </div>

            <!-- Name -->
            <div class="absolute top-36 left-1/2 -translate-x-1/2 flex flex-col items-center text-center animate-fadeIn w-full p-2">
              <h5 id="user-name" class="text-white font-bold text-2xl hover:underline hover:text-[#f8f8f6]"></h5>
              <h6 id="user-email" class="text-white text-xl mt-1 break-all"></h6>
            </div>

            <!-- Result -->
            <div class="absolute top-[290px] left-1/2 transform -translate-x-1/2 w-full flex justify-center text-white text-center px-4 animate-fadeInMove delay-[1000ms]">
              <div id="result-container" class="max-w-lg p-8 bg-blue-50 rounded-xl shadow">
          <h1 class="text-2xl font-bold text-blue-500 mb-4">Hasil Rekomendasi Jurusan</h1>
          <p id="result-text" class="text-lg text-gray-700">Memuat hasil...</p>
        </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  async afterRender() {
    const result = JSON.parse(localStorage.getItem('recommendationResult'));

    const resultText = document.getElementById('result-text');
    if (result && result.recommendation) {
      resultText.textContent = result.recommendation;
    } else {
      resultText.textContent = 'Tidak ada hasil rekomendasi.';
    }

    this.#presenter = new ProfilePresenter({
      view: this,
    });

    SidebarPresenter.initPresenter();
    this.#presenter.displayUserInfo();
  }
}
