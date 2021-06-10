import AboutPage from '../views/pages/about'
import FavoritePage from '../views/pages/favorite'
import HomePage from '../views/pages/home'
import ListPage from '../views/pages/list'

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/favorite': FavoritePage,
  '/list': ListPage,
  '/about': AboutPage
}
export default routes
