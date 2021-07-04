import '../components/review/resta-review'
import '../components/menu/menu-list'
import RestoSource from '../../data/resto-source'
import UrlParser from '../../routes/url-parser'
import { createRestoDetail } from '../templates/resto'

const DetailPage = {
  async render () {
    return `
      <div class="content" id="detail"></div>
    `
  },
  async afterRender () {
    const url = UrlParser.parseAcvtiveUrlWithoutCombiner()
    const resto = await RestoSource.detailResta(url.id)
    const detailPage = document.querySelector('#detail')
    detailPage.innerHTML = createRestoDetail(resto)

    // Menu
    const menu = document.querySelector('#resto_menu')
    const restaMenu = document.createElement('resta-menu')
    restaMenu.restaData = resto
    menu.appendChild(restaMenu)

    // Review
    const reviews = document.querySelector('#resto_reviews')
    resto.customerReviews.forEach((data) => {
      const reviewBox = document.createElement('resta-review')
      reviewBox.reviewData = data
      reviews.appendChild(reviewBox)
    })
  }
}
export default DetailPage
