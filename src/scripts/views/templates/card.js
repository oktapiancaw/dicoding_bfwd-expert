import CONFIG from '../../globals/config'

const createRestoCard = (resto) => `
  <div class="card">
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" class="card__img_head" />
    <span class="card__title">${resto.name}</span>
    <div class="card__detail"> 
      <div>
        <img src="./svg/MapIcon.svg" />
        <p>${resto.city}</p>
      </div>
      <div>
        <a href="#" class="card__btn">
          See Detail
        </a>
      </div>
    </div>
  </div>
`

export { createRestoCard }
