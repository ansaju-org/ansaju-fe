export default class Login {
  async render() {
    return `
        <section class="flex items-center justify-center min-h-screen bg-[url('/images/bg-left.png')] bg-no-repeat bg-cover p-4">
      <div class="bg-white rounded-3xl border-8 border-[#00bfff] w-full max-w-md shadow-lg p-8">
        <h2 class="text-[#00bfff] font-League spartan text-center text-4xl font-bold mb-2">Log in</h2>
        <p class="text-[#00bfff] text-center mb-6">Welcome Back Friends!</p>
        <form id="registerForm" class="flex flex-col gap-4 items-center">
          <div class="flex flex-col m-[10px] w-9/12">
            <label for="name" class="text-[#00bfff] font-League spartan text-lg font-semibold mb-2">Name</label>
            <input type="text" id="name" class="border-2 border-[#00bfff] rounded-lg p-[10px] focus:outline-none focus:border-green-400 transition" required>
          </div>
          <div class="flex flex-col m-[10px] w-9/12">
            <label for="email" class="text-[#00bfff] font-League spartan text-lg font-semibold mb-2">Email</label>
            <input type="email" id="email" class="border-2 border-[#00bfff] rounded-lg p-[10px] focus:outline-none focus:border-green-400 transition" required>
          </div>
          <div class="flex flex-col m-[10px] w-9/12">
            <label for="password" class="text-[#00bfff] font-League spartan text-lg font-semibold mb-2">Password</label>
            <input type="password" id="password" class="border-2 border-[#00bfff] rounded-lg p-[10px] focus:outline-none focus:border-green-400 transition" required>
          </div>
          <button type="submit" id="registerButton" class="bg-[#00bfff] text-white w-20 font-League spartan text-lg font-semibold rounded-lg p-3 mt-2 hover:bg-green-600 transition duration-300 ease-in-out">Log In</button>
        </form>
        <p class="text-center text-[#00bfff] mt-6 text-sm">
          Already have an account?
          <a href="#/register" class="text-[#98e4ae] hover:underline font-semibold">Register</a>
        </p>
      </div>
    </section>
        `;
  }

  async afterRender() {
    // Do your job here
  }
}
