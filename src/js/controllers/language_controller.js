import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [`list`]

  initialize() {
  }

  toggle(e) {
    if (window.matchMedia("(max-width: 1199px)").matches) {
      const list = this.listTarget;
      const target = e.target.closest(`li`)

      if (target && target.classList.contains(`language__item--current`)) {
        e.preventDefault()
        list.classList.toggle(`header__language--opened`)
      }
    }
  }
}
