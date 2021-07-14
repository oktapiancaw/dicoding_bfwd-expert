import CONFIG from './config'

const API_ENDPOINT = {
  GET_LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEND_DATA: `${CONFIG.BASE_URL}review`
}

export default API_ENDPOINT
