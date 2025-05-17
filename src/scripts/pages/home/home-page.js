export default class HomePage {
  async render() {
    return `
      <header-page></header-page>
      <!-- Middle Section -->
<section class="w-full flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-[#ffff] to-[#00bfff]">
  <!-- Overlay for better text visibility -->

  <!-- Content -->
  <div class="relative z-10 container mx-auto px-4 text-center text-white">
    <h1 class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" style="line-height: 1.2">
      Data Statistic <span class="relative whitespace-nowrap text-white">
        <span class="relative ">Collage</span>
      </span>
    </h1>
    <p class="text-4xl text-center">
      2022 (April 2023) Kemendikbudristek Indonesia
    </p>
  </div>

  <!-- Scroll Down Icon -->
  <div class="absolute sm:bottom-14 bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
    <a href="#about" class="cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  </div>
</section>
      <footer-page></footer-page>
      `;
  }

  async afterRender() {
    // Do your job here
  }
}
