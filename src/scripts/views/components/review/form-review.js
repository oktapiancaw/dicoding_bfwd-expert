/* eslint-disable no-useless-constructor */
class FormReview extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set idResto (id) {
    this._id = id
  }

  get value () {
    const name = this.querySelector('#input_add_review__name').value
    const text = this.querySelector('#input_add_review__text').value
    // this.render()
    return {
      id: this._id,
      name: name,
      review: text
    }
  }

  render () {
    this.innerHTML = `
      <label>Name</label>
      <input type="text" value="" placeholder="Your Name" id="input_add_review__name" />
      <label>Message</label>
      <textarea id="input_add_review__text"></textarea>
      <button class="resto__add_btn shadow" id="resto_add_btn" type="submit">Send Review</button>
    `
  }
}
customElements.define('form-review', FormReview)
