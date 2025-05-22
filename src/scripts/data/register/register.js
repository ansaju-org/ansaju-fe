import RegisterPresenter from './register-presenter';
import * as DataAPI from '../api.js';

export default class Register {
  #presenter = null;

  async render() {
    return `
    <section class="gap-10 flex items-center justify-center min-h-screen bg-[conic-gradient(rgba(152,228,174,0.35)),url('/images/bg-right.png')] bg-no-repeat bg-cover p-4">
      <h1 class="text-center text-5xl text-[#fff]">Recognize your potential with Ansaju</h1>
    <div class="bg-white rounded-3xl border-8 border-[#98e4ae] w-full max-w-md shadow-lg p-8">
        <h2 class="text-[#98e4ae] font-League spartan text-center text-4xl font-bold mb-2">Register</h2>
        <p class="text-[#98e4ae] text-center mb-6">Let's create your account!</p>

        <!-- FORM AREA -->
        <form id="registerForm" class="flex flex-col gap-4 items-center">
          <div class="flex flex-col m-[10px] w-9/12">
            <label for="name" class="text-[#98e4ae] font-League spartan text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" class="border-2 border-[#98e4ae] rounded-lg p-[10px] focus:outline-none focus:border-[#00bfff] transition" required>
          </div>
          <div class="flex flex-col m-[10px] w-9/12">
            <label for="email" class="text-[#98e4ae] font-League spartan text-lg font-semibold mb-2">Email</label>
            <input type="email" id="email" class="border-2 border-[#98e4ae] rounded-lg p-[10px] focus:outline-none focus:border-[#00bfff] transition" required>
          </div>
          <div class="flex flex-col m-[10px] w-9/12">
            <label for="username" class="text-[#98e4ae] font-League spartan text-lg font-semibold mb-2">Username</label>
            <input type="text" id="username" class="border-2 border-[#98e4ae] rounded-lg p-[10px] focus:outline-none focus:border-[#00bfff] transition" required>
          </div>
          <div class="flex flex-col m-[10px] w-9/12">
            <label for="password" class="text-[#98e4ae] font-League spartan text-lg font-semibold mb-2">Password</label>
            <input type="password" id="password" class="border-2 border-[#98e4ae] rounded-lg p-[10px] focus:outline-none focus:border-[#00bfff] transition" required>
          </div>
          <button type="submit" id="submit" class="bg-[#98e4ae] text-white w-20 font-League spartan text-lg font-semibold rounded-lg p-3 mt-2 hover:bg-green-600 transition duration-300 ease-in-out">Register</button>
        </form>
        <!-- FROM AREA ENDS -->

        <p class="text-center text-[#98e4ae] mt-6 text-sm">
          Already have an account?
          <a href="#/login" class="text-[#00bfff] hover:underline font-semibold">Login</a>
        </p>
      </div>
    </section>
    `;
  }

  async afterRender() {
    this.#presenter = new RegisterPresenter({
      view: this,
      model: DataAPI,
    });
    this.#setupForm();
  }

  #setupForm() {
    document.getElementById('registerForm').addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      };
      await this.#presenter.postRegister(data);
    });
  }

  registeredSuccessfully(message) {
    alert(message);
    console.log(message);
    location.href = '#/login';
  }

  registeredFailed(message) {
    alert(message);
  }
}
