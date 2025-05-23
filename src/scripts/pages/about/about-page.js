export default class AboutPage {
  async render() {
    return `
      <header-page></header-page>
      <section class="flex flex-col items-center justify-center min-h-screen gap-40 p-40 m-40 sm:mt-40">
        <div class="flex flex-row p-10 max-w-4xl w-full gap-10">
            <div class="flex flex-col md:flex-row items-center gap-40">
                <!-- Text Content -->
                <div class="flex-1 text-center">
                    <h2 class="text-4xl font-bold text-[#00bfff] mb-2">About Ansaju</h2>
                    <h3 class="text-2xl font-semibold text-[#98e4ae] mb-6">"Anti Salah Jurusan"</h3>
                    <p class="text-[#00bfff] text-lg leading-relaxed mb-4">
                        Ansaju adalah platform yang membantu siswa dan mahasiswa menemukan jurusan dan potensi terbaik mereka. Kami percaya setiap orang unik dan berhak mendapatkan masa depan yang sesuai dengan minat dan bakatnya.
                    </p>
                    <p class="text-[#86e7b8] text-base leading-relaxed">
                        Dengan fitur tes potensi, informasi jurusan, dan konsultasi, Ansaju hadir untuk mencegah salah jurusan dan membangun generasi yang lebih siap menghadapi dunia kerja.
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
        <div class="flex flex-row p-10 max-w-4xl w-full gap-10">
        <!-- Blue Rectangle with Icon -->
                <div class="flex flex-col items-center justify-center">
                    <div class="w-48 h-40 bg-[#00bfff] rounded-xl flex items-center justify-center shadow-lg mb-4">
                        <img src="logo.png" alt="Logo" class="w-40 h-40"/>
                    </div>
                    <span class="text-[#00bfff] font-bold text-lg">#AntiSalahJurusan</span>
                </div>

            <div class="flex flex-col md:flex-row items-center gap-40">
                <!-- Text Content -->
                <div class="flex-1 text-center">
                    <h2 class="text-4xl font-bold text-[#00bfff] mb-2">Objective Ansaju</h2>
                    <h3 class="text-2xl font-semibold text-[#98e4ae] mb-6">"Anti Salah Jurusan"</h3>
                    <p class="text-[#00bfff] text-lg leading-relaxed mb-4">
                        Ansaju adalah platform yang membantu siswa dan mahasiswa menemukan jurusan dan potensi terbaik mereka. Kami percaya setiap orang unik dan berhak mendapatkan masa depan yang sesuai dengan minat dan bakatnya.
                    </p>
                    <p class="text-[#86e7b8] text-base leading-relaxed">
                        Dengan fitur tes potensi, informasi jurusan, dan konsultasi, Ansaju hadir untuk mencegah salah jurusan dan membangun generasi yang lebih siap menghadapi dunia kerja.
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
