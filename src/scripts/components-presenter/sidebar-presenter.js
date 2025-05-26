const SidebarPresenter = {
  init({ sidebarElement, closeButton }) {
    const openButton = document.getElementById('open-sidebar'); // di DOM utama

    if (openButton) {
      openButton.addEventListener('click', () => {
        sidebarElement.classList.remove('translate-x-[-100%]');
        sidebarElement.classList.add('translate-x-0');
      });
    }

    closeButton?.addEventListener('click', () => {
      sidebarElement.classList.add('translate-x-[-100%]');
      sidebarElement.classList.remove('translate-x-0');
    });
  },

  initPresenter() {
    const sidebarPage = document.querySelector('sidebar-page');
    const shadowRoot = sidebarPage?.shadowRoot;

    const sidebarElement = shadowRoot?.getElementById('sidebar-drawer');
    const closeButton = shadowRoot?.getElementById('closeSidebar');

    if (sidebarElement && closeButton) {
      this.init({ sidebarElement, closeButton });
    }
  },
};

export default SidebarPresenter;
