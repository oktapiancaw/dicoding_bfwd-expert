import RestoSource from '../../data/resto-source'
import { createRestoCard } from '../templates/card'
import { Jumbotron } from '../templates/main'

const HomePage = {
  async render () {
    // return Jumbotron + `
    // <div class="content withoutpad">
    //   <h5 class="content__heading">Favorite Restaurant & Cafe </h5>
    //   <div class="horiz-slide">
    //     <div class="slider" id="card-container">
    //     </div>
    //   </div>
    // </div>
    // `
    return Jumbotron + `
    <div class="content withoutpad">
      <h5 class="content__heading">Restaurant & Cafe </h5>
      <div class="card-box" id="card-container">
        <div class="card skeleton" id="skeleton-card">
          <img class="img-card" />
          <div class="detail-card"> 
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
    const resto = await RestoSource.normalList()
    const cardContainer = document.querySelector('#card-container')
    const skeleton = document.querySelector('#skeleton-card')
    if (resto) {
      skeleton.remove()
    }
    resto.forEach((data) => {
      cardContainer.innerHTML += createRestoCard(data)
    })
  }
}
export default HomePage
