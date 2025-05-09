class HeaderPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.init();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/style.css" />
      <nav class="bg-[#00bfff] shadow-md">
  <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    <!-- Brand (Logo + Text) -->
    <a href="/" class="flex items-center space-x-3">
      <img src="/logo.png" class="h-8 w-auto" alt="Logo" />
      <span class="text-2xl font-semibold text-white whitespace-nowrap">Ansaju</span>
    </a>

    <!-- Right controls (Profile + Menu Button) -->
    <div class="flex items-center space-x-4 md:space-x-0 rtl:space-x-reverse">
      <!-- Profile Button -->
      <button type="button" id="user-menu-button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/component/iconOrg.png" alt="User photo" />
      </button>

      <!-- Drawer Toggle (Mobile) -->
      <button id="drawer-button" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#00a6dd] focus:ring-2 focus:ring-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Navigation Drawer -->
  <div id="navigation-drawer" class="fixed top-0 right-0 w-64 h-full shadow-lg bg-white transform translate-x-full transition-transform duration-300 z-50 md:translate-x-0 md:static md:flex md:w-auto md:shadow-none">
    <!-- Close Button (Mobile only) -->
    <div class="flex justify-end p-4 md:hidden">
      <button id="drawer-close" class="text-gray-700 hover:text-red-500 text-xl font-bold">
        ✕
      </button>
    </div>

    <!-- Navigation Links -->
    <ul class="flex flex-col md:flex-row p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-8 font-medium bg-white md:bg-transparent md:hidden">
      <li><a href="#/home" class="block px-3 py-2 rounded-md text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Home</a></li>
      <li><a href="#/about" class="block px-3 py-2 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">About</a></li>
      <li><a href="#" class="block px-3 py-2 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Services</a></li>
      <li><a href="#" class="block px-3 py-2 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Pricing</a></li>
      <li><a href="#" class="block px-3 py-2 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Contact</a></li>
    </ul>
  </div>
</nav>

    `;
  }

  init() {
    const drawerBtn = this.shadowRoot.getElementById('drawer-button');
    const drawer = this.shadowRoot.getElementById('navigation-drawer');
    const closeBtn = this.shadowRoot.getElementById('drawer-close');

    drawerBtn?.addEventListener('click', () => {
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0');
    });

    closeBtn?.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
      drawer.classList.remove('translate-x-0');
    });
  }
}

customElements.define('header-page', HeaderPage);
