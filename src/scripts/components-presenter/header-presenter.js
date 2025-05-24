const HeaderPresenter = {
  initHeaderPresenter(shadowRoot) {
    // --- Drawer logic ---
    const drawerBtn = shadowRoot.getElementById('drawer-button');
    const drawer = shadowRoot.getElementById('navigation-drawer');
    const closeBtn = shadowRoot.getElementById('drawer-close');
    drawerBtn?.addEventListener('click', () => {
      drawer.classList.remove('translate-x-full');
      drawer.classList.add('translate-x-0');
    });
    closeBtn?.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
      drawer.classList.remove('translate-x-0');
    });

    // --- Navigation, Dropdown, Profile ---
    setupActiveNavigation(shadowRoot);
    setupDropdown(shadowRoot);
    setupDropdownMobile(shadowRoot);
    profileDropdown(shadowRoot);
  },
};

function setupActiveNavigation(shadowRoot) {
  const setActiveNavigation = () => {
    const currentHash = window.location.pathname || '/home';
    const currentPage = currentHash;
    shadowRoot.querySelectorAll('#nav-link').forEach((link) => {
      link.classList.remove('text-white', 'underline', 'underline-offset-8');
      link.classList.add('text-white');
    });
    shadowRoot.querySelectorAll('#nav-link-mobile').forEach((link) => {
      link.classList.remove('text-white', 'font-semibold');
      link.classList.add('text-gray-700');
    });
    const activeDesktopLink = shadowRoot.querySelector(`#nav-link[data-page="${currentPage}"]`);
    if (activeDesktopLink) {
      activeDesktopLink.classList.remove('text-white');
      activeDesktopLink.classList.add('text-white', 'underline', 'underline-offset-8');
    }
    const activeMobileLink = shadowRoot.querySelector(
      `#nav-link-mobile[data-page="${currentPage}"]`,
    );
    if (activeMobileLink) {
      activeMobileLink.classList.remove('text-gray-700');
      activeMobileLink.classList.add('text-blue-700', 'font-semibold');
    }
  };
  window.addEventListener('hashchange', setActiveNavigation);
  shadowRoot.querySelectorAll('#nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.pathname = link.getAttribute('href');
      setActiveNavigation();
    });
  });
  shadowRoot.querySelectorAll('#nav-link-mobile').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.pathname = link.getAttribute('href');
      setActiveNavigation();
      const drawer = shadowRoot.getElementById('navigation-drawer');
      drawer.classList.add('translate-x-full');
      drawer.classList.remove('translate-x-0');
    });
  });
  setActiveNavigation();
}

function setupDropdown(shadowRoot) {
  const dropdownTrigger = shadowRoot.getElementById('nav-link-testPotential');
  const dropdownMenu = shadowRoot.getElementById('dropdown-menu-testPotential');
  if (!dropdownTrigger || !dropdownMenu) return;
  let isOpen = false;
  function toggleDropdown() {
    isOpen = !isOpen;
    dropdownTrigger.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      dropdownMenu.classList.remove('opacity-0', 'invisible', 'scale-95');
      dropdownMenu.classList.add('opacity-100', 'visible', 'scale-100');
    } else {
      dropdownMenu.classList.add('opacity-0', 'invisible', 'scale-95');
      dropdownMenu.classList.remove('opacity-100', 'visible', 'scale-100');
    }
  }
  function closeDropdown() {
    isOpen = false;
    dropdownTrigger.setAttribute('aria-expanded', false);
    dropdownMenu.classList.add('opacity-0', 'invisible', 'scale-95');
    dropdownMenu.classList.remove('opacity-100', 'visible', 'scale-100');
  }
  dropdownTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown();
  });
  shadowRoot.addEventListener('click', (e) => {
    if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
      closeDropdown();
    }
  });
  dropdownTrigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown();
    } else if (e.key === 'Escape') {
      closeDropdown();
    }
  });
}

function setupDropdownMobile(shadowRoot) {
  const trigger = shadowRoot.getElementById('dropdown-mobile-trigger');
  const menu = shadowRoot.getElementById('dropdown-mobile-menu');
  if (!trigger || !menu) return;
  let isOpen = false;
  function toggleDropdown() {
    isOpen = !isOpen;
    if (isOpen) {
      menu.classList.remove('opacity-0', 'invisible', 'scale-95');
      menu.classList.add('opacity-100', 'visible', 'scale-100');
    } else {
      menu.classList.add('opacity-0', 'invisible', 'scale-95');
      menu.classList.remove('opacity-100', 'visible', 'scale-100');
    }
  }
  function closeDropdown() {
    isOpen = false;
    menu.classList.add('opacity-0', 'invisible', 'scale-95');
    menu.classList.remove('opacity-100', 'visible', 'scale-100');
  }
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown();
  });
  shadowRoot.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
      closeDropdown();
    }
  });
}

function profileDropdown(shadowRoot) {
  const userMenuButton = shadowRoot.getElementById('user-menu-button');
  const userDropdown = shadowRoot.getElementById('user-dropdown');
  const logoutBtn = userDropdown ? userDropdown.querySelector('#logout-btn') : null;
  if (!userMenuButton || !userDropdown) return;
  userMenuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle('hidden');
    if (!userDropdown.classList.contains('hidden')) {
      userDropdown.style.opacity = '0';
      userDropdown.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        userDropdown.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
        userDropdown.style.opacity = '1';
        userDropdown.style.transform = 'translateY(0)';
      }, 10);
    }
  });
  document.addEventListener('click', (e) => {
    if (!userMenuButton.contains(e.target) && !userDropdown.contains(e.target)) {
      userDropdown.classList.add('hidden');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      userDropdown.classList.add('hidden');
    }
  });
  const menuItems = userDropdown.querySelectorAll('a');
  menuItems.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const menuText = this.textContent.trim();
      userDropdown.classList.add('hidden');
      if (menuText === 'Keluar') {
        if (confirm('Apakah Anda yakin ingin keluar?')) {
          alert('Anda telah keluar dari sistem');
        }
      } else {
        alert(`Anda mengklik: ${menuText}`);
      }
    });
  });
  userMenuButton.addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.05)';
  });
  userMenuButton.addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
  });
}

export default HeaderPresenter;
