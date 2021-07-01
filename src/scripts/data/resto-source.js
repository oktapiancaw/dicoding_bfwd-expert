import Swal from 'sweetalert2'
import API_ENDPOINT from '../globals/api-endpoint'

class RestoSource {
  static async normalList () {
    try {
      const response = await fetch(API_ENDPOINT.GET_LIST)
      const responseJson = await response.json()
      if (!responseJson.error) {
        return responseJson.restaurants
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Sorry...',
          text: 'Data not founds'
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error
      })
    }
  }
}

export default RestoSource
