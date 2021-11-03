const hiddenBlock = () => {
  const TABLET_MEDIA = 1024;
  if (window.screen.width < TABLET_MEDIA) {
    const description = document.querySelector(`.content__desc`);
    const main = document.querySelector(`main`);
    const link = document.querySelector(`.preload__link`);
    link.textContent = `Кликните на экран`;
    main.addEventListener(`click`, () => {
      description.classList.toggle(`active`);
    });
  }
};

export { hiddenBlock };
