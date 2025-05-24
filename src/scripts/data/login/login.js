import LoginPresenter from './login-presenter';
import * as DataAPI from '../api';
import * as Auth from '../../utils/auth';

export default class Login {
  #presenter = null;

  async render() {
    return `
        <section class="gap-10 flex items-center justify-center min-h-screen bg-[conic-gradient(rgba(0,191,255,0.35)),url('/images/bg-left.png')] bg-no-repeat bg-cover p-4">
       <h1 class="text-center text-5xl text-[#fff]">Explore to Achieve Your Dreams with Ansaju</h1>
        <div class="bg-white rounded-3xl border-8 border-[#00bfff] w-full max-w-md shadow-lg p-8">
        <h2 class="text-[#00bfff] font-League spartan text-center text-4xl font-bold mb-2">Log in</h2>
        <p class="text-[#00bfff] text-center mb-6">Welcome Back Friends!</p>
        
        <form id="login-form" class="flex flex-col gap-4 items-center">
          <div class="flex flex-col m-[10px] w-9/12">
            <label for="username" class="text-[#00bfff] font-League spartan text-lg font-semibold mb-2">Username</label>
            <input type="username" id="username" class="border-2 border-[#00bfff] rounded-lg p-[10px] focus:outline-none focus:border-[#98e4ae] transition" required>
          </div>
          <div class="flex flex-col m-[10px] w-9/12">
            <label for="password" class="text-[#00bfff] font-League spartan text-lg font-semibold mb-2">Password</label>
            <input type="password" id="password" class="border-2 border-[#00bfff] rounded-lg p-[10px] focus:outline-none focus:border-[#98e4ae] transition" required>
          </div>
          <button type="submit" id="submit" class="bg-[#00bfff] text-white w-20 font-League spartan text-lg font-semibold rounded-lg p-3 mt-2 hover:bg-green-600 transition duration-300 ease-in-out">Log In</button>
        </form>
        <div id="loginLoading" class="hidden justify-center items-center mb-4">
          <svg class="animate-spin h-8 w-8 text-[#00bfff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <span class="ml-2 text-[#00bfff] font-semibold">Logging in...</span>
        </div>

        <p class="text-center text-[#00bfff] mt-6 text-sm">
          Already have an account?
          <a href="#/register" class="text-[#98e4ae] hover:underline font-semibold">Register</a>
        </p>
      </div>
    </section>
        `;
  }

  async afterRender() {
    this.#presenter = new LoginPresenter({
      view: this,
      model: DataAPI,
      authModel: Auth,
    });

    this.#setupForm();
    this.loadingEl = document.getElementById('loginLoading');
    this.formEl = document.getElementById('login-form');
  }

  #showLoading(show) {
    if (this.loadingEl && this.formEl) {
      if (show) {
        this.loadingEl.classList.remove('hidden');
        this.loadingEl.classList.add('flex');
        this.formEl.classList.add('opacity-50', 'pointer-events-none');
      } else {
        this.loadingEl.classList.add('hidden');
        this.loadingEl.classList.remove('flex');
        this.formEl.classList.remove('opacity-50', 'pointer-events-none');
      }
    }
  }

  #setupForm() {
    document.getElementById('login-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      this.#showLoading(true);
      const data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      };
      await this.#presenter.postLogin(data);
      this.#showLoading(false);
    });
  }

  loginSuccessfully(message) {
    this.#showLoading(false);
    console.log(message);

    // Redirect
    location.pathname = '/home';
  }

  loginFailed(message) {
    this.#showLoading(false);
    alert(message);
  }
}
