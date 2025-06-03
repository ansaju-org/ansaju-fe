class CarouselPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="/styles/style.css" />
    <section class="flex justify-center items-center !py-16 !px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div class="w-full max-w-7xl">
    <!-- Section Header -->
    <div class="!mb-12 text-center">
      <h2 class="!mb-4 text-2xl font-bold sm:text-3xl md:text-4xl text-[#1D5D9B]">
        Kenapa Harus Ansaju?
      </h2>
    </div>

    <!-- Testimonial Cards Grid -->
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <!-- Testimonial 1 -->
      <div class="!p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
        <div class="justify-center items-center text-center">
            <h3 class="font-bold text-teal-700 text-center text-3xl !p-2 !mb-4">Kenali Potensi mu</h3>
          </div>
        <h3 class="text-gray-600 text-lg sm:text-lg text-center font-semibold">Ansaju membantu kamu mengenali minat dan bakat sejak dini melalui tes potensi yang akurat. Dengan memahami diri sendiri, kamu bisa mengambil keputusan jurusan yang lebih tepat dan terarah.</h3>
      </div>

      <!-- Testimonial 2 -->
<div class="!p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
  <div class="flex flex-col items-center !mb-4">
    <div class="flex-shrink-0 mb-2">
      <img class="w-24 h-24 rounded-full" src="/ccdbs.jpg" alt="Profile image" />
    </div>
    <h3 class="font-bold text-[#C61414] text-3xl !p-2 text-center">
      Coding Camp by DBS Foundation
    </h3>
  </div>
  <h3 class="text-gray-600 text-lg sm:text-lg text-center font-semibold">
    Ansaju dibuat untuk menyelesaikan Capstone Project di program Coding Camp by DBS Foundation.
  </h3>
</div>


      <!-- Testimonial 3 -->
      <div class="!p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
        <div class="justify-center items-center text-center">
            <h3 class="font-bold text-teal-700 text-center text-3xl !p-2 !mb-4">Langkah Awal Menentukan Jurusan</h3>
          </div>
        <h3 class="text-gray-600 text-lg sm:text-lg text-center font-semibold">Menentukan jurusan bukan sekadar ikut-ikutan. Ansaju hadir sebagai solusi untuk membantu kamu membuat keputusan berdasarkan potensi dan ketertarikan pribadi. Mulailah perjalanan akademikmu dengan lebih percaya diri dan terarah.</h3>
      </div>
    </div>
  </div>
</section>

    `;
  }
}

customElements.define('carousel-page', CarouselPage);
