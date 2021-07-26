import CONFIG from '../../globals/config'

const createRestoCard = (resto) => `
  <div class="card shadow">
    <img data-src="${
      CONFIG.BASE_IMAGE_URL + resto.pictureId
    }" class="card__img_head lazyload" />
    <span class="card__title">${resto.name}</span>
    <div class="card__detail"> 
      <div>
        <img src="./svg/MapIcon.svg" />
        <p>${resto.city}</p>
      </div>
      <div>
        <a href="${`/#/detail/${resto.id}`}" class="card__btn">
          See Detail
        </a>
      </div>
    </div>
  </div>
`
const skeletonCard = `
  <div class="card shadow skeleton skeleton_card">
    <img class="card__img_head" />
    <div class="card__detail"> 
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="card shadow skeleton skeleton_card">
    <img class="card__img_head" />
    <div class="card__detail"> 
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="card shadow skeleton skeleton_card">
    <img class="card__img_head" />
    <div class="card__detail"> 
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="card shadow skeleton skeleton_card">
    <img class="card__img_head" />
    <div class="card__detail"> 
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="card shadow skeleton skeleton_card">
    <img class="card__img_head" />
    <div class="card__detail"> 
      <div></div>
      <div></div>
    </div>
  </div>
  <div class="card shadow skeleton skeleton_card">
    <img class="card__img_head" />
    <div class="card__detail"> 
      <div></div>
      <div></div>
    </div>
  </div>
`

export { createRestoCard, skeletonCard }
