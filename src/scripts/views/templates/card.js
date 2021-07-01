import CONFIG from '../../globals/config'

const createRestoCard = (resto) => `
  <div class="card">
    <img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" class="img-card" />
    <span class="name-card">${resto.name}</span>
    <div class="detail-card"> 
      <div>
        <img src="./svg/MapIcon.svg" />
        <p>${resto.city}</p>
      </div>
      <div>
        <a href="#" class="btn-card">
          See Detail
        </a>
      </div>
    </div>
  </div>
`

export { createRestoCard }
