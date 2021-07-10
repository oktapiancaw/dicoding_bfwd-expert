import FavoriteRestaIdb from '../../data/favoriteresta-idb'
import { createRestoCard } from '../templates/card'

const FavoritePage = {
  async render () {
    return `
    <div class="content padx-4 pady-3">
      <h5 class="content__heading">Favorite Restaurant & Cafe </h5>
      <div class="content__box padx-2" id="card_container">
        <div class="card shadow skeleton" id="skeleton_card">
          <img class="card__img_head" />
          <div class="card__detail"> 
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    `
  },
  async afterRender () {
    const resto = await FavoriteRestaIdb.getAllRestas()
    const cardContainer = document.querySelector('#card_container')
    const skeleton = document.querySelector('#skeleton_card')
    if (resto) {
      skeleton.remove()
    }
    resto.forEach((data) => {
      cardContainer.innerHTML += createRestoCard(data)
    })
  }
}
export default FavoritePage
