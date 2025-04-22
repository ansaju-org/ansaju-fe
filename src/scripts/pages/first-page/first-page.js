export default class FirstPage {
  async render() {
    return `
      <div class="hero-firstPage">
    <div class="hero-sections">
      <div class="hero-box left">
        <p class="text">Prospective Graduate<br>High School Student</p>
        <a href="#/home" class="arrow-button">
  <svg class="w-[35px] h-[35px] text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M15 19l-7-7 7-7"/>
  </svg>
</a>
      </div>
      <div class="hero-box right">
        <p class="text">Current<br>High School Student</p>
        <a href="#/about" class="arrow-button">
  <svg class="w-[35px] h-[35px] text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M9 5l7 7-7 7" />
  </svg>
</a>
      </div>
    </div>
  </div>
      `;
  }

  async afterRender() {
    // Do your job here
  }
}
