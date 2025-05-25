export default class AboutPage {
  async render() {
    return `
      <header-page></header-page>
      <section class="flex flex-col items-center justify-center min-h-screen gap-4 p-4 m-4 sm:mt-40">
        <div class="flex flex-row sm:p-4 max-w-4xl w-full gap-2">
            <div class="flex flex-col md:flex-row items-center gap-40">
                <!-- Text Content -->
                <div class="flex-1 text-center">
                    <h2 class="text-4xl font-bold text-[#00bfff] mb-2">About Ansaju</h2>
                    <h3 class="text-2xl font-semibold text-[#98e4ae] mb-6">"Anti Salah Jurusan"</h3>
                    <p class="text-[#00bfff] text-based">
                        Ansaju adalah platform yang membantu siswa dan mahasiswa menemukan jurusan dan potensi terbaik mereka.
                    </p>
                </div>
            </div>
            <!-- Blue Rectangle with Icon -->
                <div class="flex flex-col items-center justify-center">
                    <div class="w-48 h-40 bg-[#00bfff] rounded-xl flex items-center justify-center shadow-lg mb-4">
                        <img src="logo.png" alt="Logo" class="w-40 h-40"/>
                    </div>
                    <span class="text-[#00bfff] font-bold text-lg">#AntiSalahJurusan</span>
                </div>
        </div>
        <div class="flex flex-row !pb-10 w-screen items-center justify-center gap-2">
        <!-- Blue Rectangle with Icon -->
                <div class="flex flex-col items-center justify-center">
                    <div class="w-48 h-40 bg-[#00bfff] rounded-xl flex items-center justify-center shadow-lg mb-4">
                        <img src="logo.png" alt="Logo" class="w-40 h-40"/>
                    </div>
                    <span class="text-[#00bfff] font-bold text-lg">#AntiSalahJurusan</span>
                </div>
            <div class="flex flex-col md:flex-row items-center gap-4">
                <!-- Text Content -->
                <div class="flex-1 text-center">
                    <h2 class="text-4xl font-bold text-[#00bfff] mb-2">Objective Ansaju</h2>
                    <h3 class="text-2xl font-semibold text-[#98e4ae] mb-6">"Anti Salah Jurusan"</h3>
                    <p class="text-[#00bfff] text-based leading-relaxed mb-4">
                        Ansaju adalah platform yang membantu siswa dan mahasiswa menemukan jurusan dan potensi terbaik mereka.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <anggota-ansaju></anggota-ansaju>
      <footer-page></footer-page>
    `;
  }

  async afterRender() {
    // Do your job here
  }
}
