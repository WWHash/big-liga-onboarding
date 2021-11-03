const preloader = () => {
  const preloadBtn = document.querySelector(`.preload__link`);
  if (preloadBtn) {
    preloadBtn.focus();
  }
  preloadBtn.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const preload = document.querySelector(`.preload`);
    preload.style.display = `none`;
  });
};

export { preloader };
