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

  static async detailResta (id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id))
      const responseJson = await response.json()
      if (!responseJson.error) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your Reviews has been send!, Thank you'
        })
        return responseJson.restaurant
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

  static async sendReview (data) {
    try {
      const response = await fetch(API_ENDPOINT.SEND_DATA, {
        method: 'POST',
        headers: {
          'X-Auth-Token': 12345,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseJson = await response.json()
      if (!responseJson.error) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your Reviews has been send!, Thank you'
        })
        return responseJson
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Sorry...',
          text: 'Something wrong happened!'
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
