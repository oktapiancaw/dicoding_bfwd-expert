import './food-part'
import './drink-part'
/* eslint-disable quotes */
class RestoMenuList extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set restaData (restaData) {
    this._data = restaData
    this.render()
  }

  render () {
    this.className = 'resto__menu_box'
    const foodPart = document.createElement('food-part')
    foodPart.foodMenu = this._data.menus.foods
    this.appendChild(foodPart)
    const drinkPart = document.createElement('drink-part')
    drinkPart.drinkMenu = this._data.menus.drinks
    this.appendChild(drinkPart)
  }
}

customElements.define('resta-menu', RestoMenuList)
