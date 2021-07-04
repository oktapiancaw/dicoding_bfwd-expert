/* eslint-disable accessor-pairs */
class RestoReviews extends HTMLElement {
  set reviewData (data) {
    this._data = data
    this.render()
  }

  render () {
    this.className = 'resto__review_card shadow'
    this.innerHTML += `
      <span class="review__name">${this._data.name}</span>
      <p class="review__text">“${this._data.review}”</p>
      <span class="review__date">${this._data.date}</span>
    `
  }
}

customElements.define('resta-review', RestoReviews)
