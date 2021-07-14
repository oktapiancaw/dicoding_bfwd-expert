import { v4 as uuidv4 } from 'uuid'

const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://dicoding-restaurant-api.el.r.appspot.com/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/small/',
  CACHE_NAME: uuidv4(),
  DATABASE_NAME: 'restaurant-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'resto'
}

export default CONFIG
