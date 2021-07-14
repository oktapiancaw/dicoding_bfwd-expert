import DetailPage from '../views/pages/detail'
import FavoritePage from '../views/pages/favorite'
import HomePage from '../views/pages/home'

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/favorite': FavoritePage,
  '/detail/:id': DetailPage
}
export default routes
