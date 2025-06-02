import HeaderPresenter from '../components-presenter/header-presenter.js';

class HeaderPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    HeaderPresenter.initHeaderPresenter(this.shadowRoot);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/style.css" />
      <nav class="bg-[#00bfff] mx-auto p-20 md:py-8">
      <!-- Brand (Logo + Text) -->
  <div class="flex items-center justify-between h-20">
    <div class="flex flex-row items-center gap-4">
    <a href="/" class="flex items-center space-x-3 gap-2">
      <img src="/logo.png" class="h-14 w-14" alt="Logo" />
      <span class="text-2xl gap-4 font-semibold text-[#f8f8f6] whitespace-nowrap">Ansaju</span>
      <div class="flex flex-row gap-2 space-x-3 rtl:space-x-reverse"> 
      <ul class="sm:flex flex-row p-4 gap-4 hidden md:p-0 space-y-2 md:space-y-0 md:space-x-8 font-medium md:bg-transparent">
      <li><a href="/home" data-page="home" id="nav-link" class="block px-3 py-2 rounded-md text-[#f8f8f6] md:hover:text-[#f8f8f6] transition-colors duration-200">Beranda</a></li>
      <li><a href="/about" data-page="about" id="nav-link" class="block px-3 py-2 rounded-md text-[#f8f8f6] md:hover:text-[#f8f8f6] transition-colors duration-200">Tentang</a></li>
       <!-- Drop Down -->
      <li class="nav-dropdown-container relative">
    </a>
  <!-- Dropdown Trigger -->
  <button 
    class="dropdown-trigger flex items-center justify-between w-full px-3 py-2 rounded-md text-[#f8f8f6] md:hover:text-blue-200 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300"
    data-page="testPotential"
    aria-haspopup="true"
    aria-expanded="false"
    aria-controls="dropdown-menu-testPotential"
  >
  </button>
  <span class="dropdown-text text-[#f8f8f6]">Test Potential</span>
  <svg 
 id="nav-link-testPotential"
class="dropdown-arrow w-6 h-6 text-[#f8f8f6] transition-transform duration-300 ease-in-out ml-2 justify-self-center transform -translate-x-1/2 animate-bounce" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
</svg>

  <!-- Dropdown Menu -->
  <ul 
    id="dropdown-menu-testPotential"
    class="absolute left-0 top-full mt-1 w-48 bg-[#f8f8f6] rounded-md shadow-lg border border-gray-200 opacity-0 invisible transform scale-95 transition-all duration-300 ease-in-out z-50"
    role="menu"
    aria-labelledby="nav-link-testPotential"
  >
    <li role="none">
      <a 
        href="/quiz" 
        class="dropdown-item block px-4 py-3 text-[#1B6530] hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-md"
        role="menuitem"
        tabindex="-1"
      >
        Quiz Potential Academic
      </a>
    </li>
  </ul>
</li>
    </a>
      </ul>
      </div>
    </a>
    </div>

    <!-- Right controls (Profile + Menu Button) -->
    <div class="flex items-center space-x-4 md:space-x-0 rtl:space-x-reverse gap-2">
            <!-- Header dengan Profile Dropdown -->
            <div class="flex justify-end">
                <div class="flex items-center space-x-4 md:space-x-0 rtl:space-x-reverse gap-2 relative">
                    <!-- Profile Button -->
                    <button type="button" id="user-menu-button" class="flex focus:outline-none focus:ring-2 focus:ring-[#f8f8f6] focus:ring-offset-2 rounded-full transition-all duration-200 hover:shadow-lg">
                        <img class="w-12 h-12 rounded-full" src="/component/iconOrg.png" alt="User photo" />
                    </button>
                    
                    <!-- Dropdown Menu -->
                    <div id="user-dropdown" class="hidden absolute right-0 top-14 mt-2 w-56 bg-[#f8f8f6] rounded-lg shadow-lg border border-gray-200 z-50">
                        <!-- User Info Section -->
                        <div class="px-4 py-3 border-b border-gray-100">
                            <p id="name" class="text-xl text-center font-medium text-[#1A508B]"></p>
                            <p id="email" class="text-lg text-center font-medium text-[#1B6530] truncate"></p>
                        </div>
                        
                        <!-- Menu Items -->
                        <div class="py-1">
                            <a href="/dashboard" class="flex items-center px-4 py-2 text-lg text-gray-600 font-medium hover:bg-gray-100 transition-colors duration-150">
                                <svg class="w-6 h-6 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                Dashboard
                            </a>
                            <a href="#" class="flex items-center px-4 py-2 text-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors duration-150">
                                <svg class="w-6 h-6 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V8h4v3"></path>
                                </svg>
                                Login & Register
                            </a>
                        </div>
                        
                        <!-- Logout -->
                        <div class="py-1">
                            <a href="#" id="logout-button" class="flex items-center px-4 py-2 text-lg font-medium text-red-600 hover:bg-red-50 transition-colors duration-150">
                                <svg class="w-8 h-8 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                                Keluar
                            </a>
                        </div>
                    </div>

      <!-- Drawer Toggle (Mobile) -->
      <button id="drawer-button" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#f8f8f6] rounded-lg md:hidden hover:bg-[#fff] focus:ring-2 focus:ring-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Navigation Drawer -->
  <div id="navigation-drawer" class="fixed top-0 right-0 w-64 h-full shadow-lg bg-[#f8f8f6] transform translate-x-full transition-transform duration-300 z-50 md:translate-x-0 md:static md:flex md:w-auto md:shadow-none">
    <!-- Close Button (Mobile only) -->
    <div class="flex !px-4 justify-end md:hidden">
    <button id="drawer-close" class="text-[#00bfff] hover:text-[#98e4ae]">
        <svg class="w-6 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>
      </button>
    </div>

    <!-- Navigation Links -->
    <ul class="flex flex-col md:flex-row p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-8 font-medium bg-[#f8f8f6] md:bg-transparent md:hidden">
      <li><a href="/home" data-page="home" id="nav-link-mobile" class="block !px-3 !py-2 rounded-md text-[#1D5D9B] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 transition-colors duration-200">Beranda</a></li>
      <li><a href="/about" data-page="about" id="nav-link-mobile" class="block !px-3 !py-2 rounded-md text-[#1D5D9B] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 transition-colors duration-200">Tentang</a></li>
      <!-- Dropdown Mobile -->
      <li class="relative" id="dropdown-mobile-container">
    <button id="dropdown-mobile-trigger" class="flex items-center justify-between w-full !px-3 !py-2 rounded-md text-[#1D5D9B] hover:bg-gray-100 transition-colors duration-200">
      Test Potential
      <svg class="h-4 w-4 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <ul id="dropdown-mobile-menu" class="absolute left-0 top-full mt-1 w-48 bg-[#f8f8f6] rounded-md shadow-lg border border-gray-200 opacity-0 invisible transform scale-95 transition-all duration-300 z-50">
      <li><a href="/quiz" class="block px-4 py-3 text-[#1B6530] hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 first:rounded-t-md">Quiz Potential Academic</a></li>
    </ul>
  </li>
    </ul>
  </div>
</nav>

    `;
  }
}

customElements.define('header-page', HeaderPage);
