import CONFIG from '../../globals/config'

const createRestoDetail = (resto) => `
  <div class="detail__head pad-4">
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" class="detail__image" />
    <div class="resto__title_box shadow">
      <h5>${resto.name}</h5>
      <hr/>
      <div class="resto__rate_place">
        <div>
          <img src="./svg/MapIcon.svg" />
          <p>${resto.city}</p>
        </div>
        <div>
          <img src="./svg/RateIcon.svg" />
          <p>${resto.rating}</p>
        </div>
      </div>
    </div>
    <button class="resto__favorite_btn shadow"></button>
  </div>
  <div class="detail__body pad-4">
    <div class="resto__desc">
      <h5>Deskripsi</h5>
      <p>${resto.description}</p>
    </div>
    <div class="resto__menu" id="resto_menu">
      <h5>Menu</h5>
    </div>
    <div class="resto__review">
      <h5>Review</h5>
      <div class="content__slider_x_box">
        <div class="slider" id="resto_reviews">
        </div>
      </div>
    </div>
    <div class="resto__add_review" id="resto_add_review">
      <h5>Add Reviews</h5>
    </div>
  </div>
`

export { createRestoDetail }
