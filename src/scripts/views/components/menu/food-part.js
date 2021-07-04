/* eslint-disable accessor-pairs */
/* eslint-disable quotes */
class FoodPart extends HTMLElement {
  set foodMenu (menu) {
    this._menu = menu
    this.render()
  }

  render () {
    this.className = 'resto__menu_card shadow'
    this.innerHTML = `<span>Makanan</span><ul>`
    this._menu.forEach((data) => {
      this.innerHTML += `<li>${data.name}</li>`
    })
    this.innerHTML += `</ul>`
  }
}

customElements.define('food-part', FoodPart)
