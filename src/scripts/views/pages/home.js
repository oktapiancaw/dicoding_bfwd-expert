import { Jumbotron } from '../templates/main'

const HomePage = {
  async render () {
    return Jumbotron + `
    <div class="content">
      <h2 class="content__heading">Favorite Restaurant & Cafe</h2>
      
    </div>
    `
  },
  async afterRender () {
    //
  }
}
export default HomePage
