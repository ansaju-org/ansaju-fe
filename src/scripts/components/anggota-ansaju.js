class AnggotaAnsaju extends HTMLElement {
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
    <section class="ansaju-components flex flex-col items-center justify-center min-h-screen px-4 py-12 md:py-20">
        <div class="w-full max-w-6xl mx-auto flex flex-col items-center justify-center !p-4">
            <!-- Header Section -->
            <div class="flex flex-col items-center justify-center !mb-4 md:mb-16 mt-8 md:mt-12">
                <h1 class="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-[#00bfff] mb-4 md:mb-6">
                    Tim Ansaju
                </h1>
                <h2 class="text-center text-lg md:text-2xl lg:text-3xl font-semibold text-[#98e4ae] px-4">
                    "Berkenalan dengan Tim dibalik Ansaju"
                </h2>
            </div>
            
            <!-- First Row - 3 Members -->
            <div class="grid gap-8 md:gap-12 lg:gap-16 text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full mb-12 md:mb-20">
                <div class="mb-8 md:mb-0 mt-4 md:mt-0">
                    <div class="mb-6 md:mb-8 flex justify-center">
                    <img
                            src="/foto-anggota/reza.jpg"
                            class="w-28 md:w-32 lg:w-36 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                            alt="John Smith"
                        />
                    </div>
                    <h4 class="mb-2 md:mb-4 text-lg md:text-xl font-semibold text-[#00bfff]">Reza Pahlevi</h4>
                    <p class="mb-4 md:mb-6 font-semibold text-[#98e4ae] text-sm md:text-base">
                    Lead Team and Machine Learning Engineer
                    </p>
                </div>
                
                <div class="mb-8 md:mb-0 mt-4 md:mt-0">
                    <div class="mb-6 md:mb-8 flex justify-center">
                        <img
                            src="/foto-anggota/alvi.jpg"
                            class="w-28 md:w-32 lg:w-36 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                            alt="AlviSetyaKurniaDewi"
                        />
                    </div>
                    <h4 class="mb-2 md:mb-4 text-lg md:text-xl font-semibold text-[#00bfff]">Alvi Setya Kurnia Dewi</h4>
                    <p class="mb-4 md:mb-6 font-semibold text-[#98e4ae] text-sm md:text-base">
                    Machine Learning Engineer
                    </p>
                </div>
                
                <div class="mb-8 md:mb-0 mt-4 md:mt-0 sm:col-span-2 md:col-span-1">
                    <div class="mb-6 md:mb-8 flex justify-center">
                        <img
                            src="/foto-anggota/nabila.JPG"
                            class="w-28 md:w-32 lg:w-36 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                            alt="NabilaNevaRahmawati"
                        />
                    </div>
                    <h4 class="mb-2 md:mb-4 text-lg md:text-xl font-semibold text-[#00bfff]">Nabila Neva Rahmawati</h4>
                    <p class="mb-4 md:mb-6 font-semibold text-[#98e4ae] text-sm md:text-base">
                    Machine Learning Engineer
                    </p>
                </div>
            </div>
            
            <!-- Second Row - 2 Members -->
            <div class="grid gap-8 md:gap-12 lg:gap-16 text-center grid-cols-1 sm:grid-cols-2 w-full max-w-2xl mx-auto mb-8 md:mb-12">
                <div class="mb-8 md:mb-0 mt-10 md:mt-0">
                    <div class="mb-6 md:mb-8 flex justify-center">
                    <img
                            src="/foto-anggota/viane.png"
                            class="w-28 md:w-32 lg:w-36 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                            alt="DwiOktaviane"
                        />
                        
                    </div>
                    <h4 class="mb-2 md:mb-4 text-lg md:text-xl font-semibold text-[#00bfff]">Dwi Oktaviane</h4>
                    <p class="mb-4 md:mb-6 font-semibold text-[#98e4ae] text-sm md:text-base">
                    UI/UX and Front-End Engineer
                    </p>
                </div>
                
                <div class="mb-8 md:mb-0 mt-4 md:mt-0">
                    <div class="mb-6 md:mb-8 flex justify-center">
                        <img
                            src="/foto-anggota/ikhlash.jpg"
                            class="w-28 md:w-32 lg:w-36 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                            alt="IkhlashMulyanurahman"
                        />
                    </div>
                    <h4 class="mb-2 md:mb-4 text-lg md:text-xl font-semibold text-[#00bfff]">Ikhlash Mulyanurahman</h4>
                    <p class="mb-4 md:mb-6 font-semibold text-[#98e4ae] text-sm md:text-base">
                    Back-End Engineer
                </div>
            </div>
        </div>
    </section>
      `;
  }
}

customElements.define('anggota-ansaju', AnggotaAnsaju);
