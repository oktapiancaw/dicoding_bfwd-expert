import AboutPage from '../views/pages/about'
import DetailPage from '../views/pages/detail'
import FavoritePage from '../views/pages/favorite'
import HomePage from '../views/pages/home'
import ListPage from '../views/pages/list'

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/favorite': FavoritePage,
  '/list': ListPage,
  '/about': AboutPage,
  '/detail/:id': DetailPage
}
export default routes
