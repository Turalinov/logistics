import { Controller } from "stimulus";

const menu = document.querySelector(`.menu__wrapper`);
const burger = document.querySelector(`.menu__burger`);
const logo = document.querySelector(`.header__logo`);
const overlay = document.querySelector(`.overlay-menu`);
const lang = document.querySelector(`.header__right`)
const logoImg = logo.querySelector(`img`);
const logoWhiteSrc = "img/logo.svg";
const logoDarkSrc = "img/logo@dark.svg";

export default class extends Controller {
  static targets = [`link`, `close-link`, `trigger`]

  initialize() {
  }

  toggle(e) {
    e.preventDefault();

    // Проверяем наличие классов для внутренних страниц с логотипом другого цвета

    // Меняем лого
    // if (logo.classList.contains(`header-inside__logo`) && !logo.classList.contains(`header__logo--opened`)) {
    //   logoImg.src = logoWhiteSrc;
    // }

    // if (logo.classList.contains(`header-inside__logo`) && logo.classList.contains(`header__logo--opened`)) {
    //   logoImg.src = logoDarkSrc;
    // }
    //

    if (window.matchMedia("(max-width: 1199px)").matches) {
      lang.classList.toggle(`header__right--opened`)
    }

    menu.classList.toggle(`menu__wrapper--opened`);
    burger.classList.toggle(`menu__burger--opened`);
    logo.classList.toggle(`header__logo--opened`);
    overlay.classList.toggle(`overlay-menu--opened`);
    document.body.classList.toggle(`overlay-body__body`);
  }

  toggleSublist(e) {

    if (window.matchMedia("(max-width: 1199px)").matches) {

      if (e.target.tagName === "A") {
        e.preventDefault()
      }

      const container = e.target.closest(`li`)
      const title = container.querySelector(`p`)
      const sublist = container.querySelector(`.menu__sub-list`)
      title.classList.toggle(`menu__sub-title--opened`)
      sublist.classList.toggle(`menu__sub-list--opened`)
    }
  }

  close(e) {
    e.preventDefault();


    // if (logo.classList.contains(`header-inside__logo`) && !logo.classList.contains(`header__logo--opened`)) {
    //   logoImg.src = logoWhiteSrc;
    // }

    // if (logo.classList.contains(`header-inside__logo`) && logo.classList.contains(`header__logo--opened`)) {
    //   logoImg.src = logoDarkSrc;
    // }
    //
    if (window.matchMedia("(max-width: 1199px)").matches) {
      lang.classList.toggle(`header__right--opened`)
    }

    menu.classList.toggle(`menu__wrapper--opened`);
    burger.classList.toggle(`menu__burger--opened`);
    logo.classList.toggle(`header__logo--opened`);
    overlay.classList.toggle(`overlay-menu--opened`);
    document.body.classList.toggle(`overlay-body__body`);
  }
}
