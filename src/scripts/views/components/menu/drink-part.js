/* eslint-disable accessor-pairs */
/* eslint-disable quotes */
class DrinkPart extends HTMLElement {
  set drinkMenu (menu) {
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

customElements.define('drink-part', DrinkPart)
