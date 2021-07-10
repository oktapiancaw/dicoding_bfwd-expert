import RestoSource from '../../data/resto-source'
import { createRestoCard, skeletonCard } from '../templates/card'
import { Jumbotron } from '../templates/main'

const HomePage = {
  async render () {
    // return Jumbotron + `
    // <div class="content">
    //   <h5 class="content__heading">Favorite Restaurant & Cafe </h5>
    //   <div class="content__slider_x_box">
    //     <div class="slider" id="card_container">
    //     </div>
    //   </div>
    // </div>
    // `
    return Jumbotron + `
    <div class="content padx-4 pady-3">
      <h5 class="content__heading">Restaurant & Cafe </h5>
      <div class="content__box padx-2" id="card_container">
        ` + skeletonCard + `
      </div>
    </div>
    `
  },
  async afterRender () {
    const resto = await RestoSource.normalList()
    const cardContainer = document.querySelector('#card_container')
    if (resto) {
      cardContainer.innerHTML = ''
    }
    resto.forEach((data) => {
      cardContainer.innerHTML += createRestoCard(data)
    })
  }
}
export default HomePage
