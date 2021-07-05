import '../components/review/resta-review'
import '../components/review/form-review'
import '../components/menu/menu-list'
import RestoSource from '../../data/resto-source'
import UrlParser from '../../routes/url-parser'
import { createRestoDetail, createLikeButtonTemplate } from '../templates/resto'

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

    const detailHead = document.querySelector('#detail_head')
    detailHead.innerHTML += createLikeButtonTemplate()
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
    const addReview = document.querySelector('#resto_add_review')
    const formReview = document.createElement('form-review')
    addReview.appendChild(formReview)

    document.querySelector('#resto_add_btn').addEventListener('click', () => {
      formReview.idResto = resto.id
      if (formReview.value !== '') {
        RestoSource.sendReview(formReview.value)
      }
    })
  }
}
export default DetailPage
