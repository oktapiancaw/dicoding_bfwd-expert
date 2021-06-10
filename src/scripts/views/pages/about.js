import { Jumbotron } from '../templates/main'

const AboutPage = {
  async render () {
    return Jumbotron + `
      <h2>About the App</h2>
    `
  },
  async afterRender () {
    //
  }
}
export default AboutPage
