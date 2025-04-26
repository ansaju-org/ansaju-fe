const HeaderPresenter = {
  init(view) {
    const drawerButton = view.shadowRoot.querySelector('#drawer-button');
    const navigationDrawer = view.shadowRoot.querySelector('#navigation-drawer');

    drawerButton.addEventListener('click', event => {
      event.stopPropagation();
      navigationDrawer.classList.toggle('open');
    });

    document.body.addEventListener('click', event => {
      if (!view.shadowRoot.contains(event.target)) {
        navigationDrawer.classList.remove('open');
      }

      navigationDrawer.querySelectorAll('a').forEach(link => {
        if (link.contains(event.target)) {
          navigationDrawer.classList.remove('open');
        }
      });
    });
  },
};

export default HeaderPresenter;
