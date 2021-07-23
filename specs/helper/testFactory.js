const {
  default: LikeButtonInitiator,
} = require('../../src/scripts/utils/like-button-initiator')

const createLikeButtonPresenterWithResta = async (resta) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#resto_fav_btn_container'),
    resta,
  })
}

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="resto_fav_btn_container"></div>'
}

export { createLikeButtonPresenterWithResta, addLikeButtonContainer }
