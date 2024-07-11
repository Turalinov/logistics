import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [`quantity`, `length`, `width`, `height`, `weight`, `phis`, `vol`, `difference`, `form`]

  initialize() {}

  calculate(e) {

    const form = this.formTarget;
    let errors = 0
    const field = form.querySelectorAll(`input`)
    field.forEach(it => {
      if (!it.value || it.value < 0) {
        errors += 1
      }
    })

    if (!errors) {
      e.preventDefault()

      const phis = this.quantityTarget.value * this.weightTarget.value
      const vol = this.quantityTarget.value * this.lengthTarget.value * this.widthTarget.value * this.heightTarget.value * 167
      const diff = vol - phis

      this.phisTarget.innerHTML = phis.toFixed(2)
      this.volTarget.innerHTML = vol.toFixed(2)

      if (diff < 0) {
        this.differenceTarget.innerHTML = "";
      } else {
        this.differenceTarget.innerHTML = diff.toFixed(2)
      }
    }
  }
}
