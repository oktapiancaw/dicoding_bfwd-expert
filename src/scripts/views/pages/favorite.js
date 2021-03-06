import FavoriteRestaIdb from '../../data/favoriteresta-idb'
import { createRestoCard, skeletonCard } from '../templates/card'

const FavoritePage = {
  async render() {
    return (
      `
    <div class="content padx-4 pady-3">
      <h5 class="content__heading">Favorite Restaurant & Cafe </h5>
      <div class="content__box padx-2" id="card_container">
      ` +
      skeletonCard +
      `
      </div>
    </div>
    `
    )
  },
  async afterRender() {
    const resto = await FavoriteRestaIdb.getAllRestas()
    const cardContainer = document.querySelector('#card_container')
    if (resto) {
      cardContainer.innerHTML = ''
    }
    if (resto.length > 0) {
      resto.forEach((data) => {
        cardContainer.innerHTML += createRestoCard(data)
      })
    } else {
      cardContainer.innerHTML = `
        <div id="resta_not_found">Data tidak ada</div>
      `
    }
  },
}
export default FavoritePage
