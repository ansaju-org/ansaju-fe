class SliderPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentSlide = 0;
    this.totalSlides = 5;
    this.autoSlideInterval = null;
  }

  connectedCallback() {
    this.render();
    this.init();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/styles/style.css" />
        <section id="default-carousel" class=" flex items-center justify-center">
        <div class="relative w-11/12 mx-auto" data-carousel="slide">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                 <!-- Item 1 -->
                <div class="carousel-item hidden duration-700 ease-in-out" data-carousel-item="0">
                    <img src="/images/bg-right.png" class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1">
                </div>
                <!-- Item 2 -->
                <div class="carousel-item hidden duration-700 ease-in-out" data-carousel-item="1">
                    <img src="/images/bg-left.png" class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2">
                </div>
                <!-- Item 3 -->
                <div class="carousel-item hidden duration-700 ease-in-out" data-carousel-item="2">
                    <img src="/images/bg-right.png" class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3">
                </div>
                <!-- Item 4 -->
                <div class="carousel-item hidden duration-700 ease-in-out" data-carousel-item="3">
                    <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 4">
                </div>
                <!-- Item 5 -->
                <div class="carousel-item hidden duration-700 ease-in-out" data-carousel-item="4">
                    <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 5">
                </div>
            </div>
            <!-- Slider indicators -->
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" class="indicator w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="indicator w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="indicator w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="indicator w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" class="indicator w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-[#00bfff] group-focus:outline-none">
                    <svg class="w-4 h-4 text-[#00bfff] rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-[#00bfff] group-focus:outline-none">
                    <svg class="w-4 h-4 text-[#00bfff] rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
        </section>
        `;
  }

  init() {
    const prevButton = this.shadowRoot.querySelector('[data-carousel-prev]');
    const nextButton = this.shadowRoot.querySelector('[data-carousel-next]');
    const indicators = this.shadowRoot.querySelectorAll('[data-carousel-slide-to]');

    prevButton?.addEventListener('click', () => {
      this.prevSlide();
    });

    nextButton?.addEventListener('click', () => {
      this.nextSlide();
    });

    indicators.forEach((indicator) => {
      indicator.addEventListener('click', () => {
        const slideIndex = parseInt(indicator.getAttribute('data-carousel-slide-to'));
        this.goToSlide(slideIndex);
      });
    });

    this.showSlide(this.currentSlide);

    this.startAutoSlide();

    const carousel = this.shadowRoot.querySelector('#default-carousel');
    carousel?.addEventListener('mouseenter', () => this.stopAutoSlide());
    carousel?.addEventListener('mouseleave', () => this.startAutoSlide());
  }

  showSlide(index) {
    const slides = this.shadowRoot.querySelectorAll('[data-carousel-item]');
    const indicators = this.shadowRoot.querySelectorAll('[data-carousel-slide-to]');

    slides.forEach((slide) => {
      slide.classList.add('hidden');
      slide.classList.remove('block');
    });

    if (slides[index]) {
      slides[index].classList.remove('hidden');
      slides[index].classList.add('block');
    }

    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.remove('indicator-inactive');
        indicator.classList.add('indicator-active');
        indicator.setAttribute('aria-current', 'true');
      } else {
        indicator.classList.remove('indicator-active');
        indicator.classList.add('indicator-inactive');
        indicator.setAttribute('aria-current', 'false');
      }
    });

    this.currentSlide = index;
  }

  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.totalSlides;
    this.showSlide(nextIndex);
  }

  prevSlide() {
    const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.showSlide(prevIndex);
  }

  goToSlide(index) {
    if (index >= 0 && index < this.totalSlides) {
      this.showSlide(index);
    }
  }

  startAutoSlide() {
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  disconnectedCallback() {
    this.stopAutoSlide();
  }
}

customElements.define('slider-page', SliderPage);
