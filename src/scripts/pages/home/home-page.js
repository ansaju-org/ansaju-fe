export default class HomePage {
  async render() {
    return `
      <header-page></header-page>
      <!-- Middle Section -->
<section class="w-full flex items-center justify-center h-auto min-h-[24rem] overflow-hidden bg-gradient-to-b from-[#ffff] to-[#00bfff] py-10 sm:h-96">
  <div class="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center justify-center h-full">
    <h1 class="mb-10 sm:mb-40 text-3xl sm:text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl" style="line-height: 1.2">
      Data Statistic Collage
    </h1>
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center mb-6 sm:mb-10 w-full">
      <div class="flex flex-col items-center">
        <p class="text-2xl sm:text-4xl font-semibold">4.437</p>
        <span class="text-base sm:text-lg mt-2">Universities</span>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-2xl sm:text-4xl font-semibold">33.213</p>
        <span class="text-base sm:text-lg mt-2">Majors</span>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-2xl sm:text-4xl font-semibold">9.878.119</p>
        <span class="text-base sm:text-lg mt-2">Students</span>
      </div>
    </div>
    <p class="text-base sm:text-xl text-center mt-10 sm:mt-32">
      2022 (April 2023) Kemendikbudristek Indonesia
    </p>
  </div>
</section>
<carousel-page></carousel-page>
      <footer-page></footer-page>
      `;
  }

  async afterRender() {
    const header = document.querySelector('header-page')?.shadowRoot;
    if (header) {
      const logoutBtn = header.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem('accessToken');
          window.location.pathname = '/login';
        });
      }
    }
  }
}
