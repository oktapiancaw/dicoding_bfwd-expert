const DetailPage = {
  async render () {
    return `
      <div class="content" id="detail">
        <div class="detail__head pad-4">
          <div class="img__dummy"></div>
          <div class="resto__title_box shadow">
            <h5>Detail Restaurant</h5>
            <hr/>
            <div class="resto__rate_place">
              <p>4.5</p>
              <p>Bandung</p>
            </div>
          </div>
          <button class="resto__favorite_btn shadow"></button>
        </div>
        <div class="detail__body pad-4">
          <div class="resto__desc">
            <h5>Deskripsi</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.
            Facilisi pellentesque id molestie nulla. Adipiscing,
            ac, nunc, porta sed pretium, malesuada placerat.
            Egestas cursus dignissim semper aliquam.
            Vehicula proin turpis commodo dictum tortor,
            Viverra nunc justo, volutpat purus quis et dictum.
            Morbi tempor et auctor feugiat condimentum.</p>
          </div>
          <div class="resto__menu">
            <h5>Menu</h5>
            <div class="resto__menu_box">
              <div class="resto__menu_card shadow">
                <span>Makanan</span>
                <ul>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
              <div class="resto__menu_card shadow">
                <span>Minuman</span>
                <ul>
                  <li>lorem ipsum</li>
                  <li>lorem ipsum</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="resto__review">
            <h5>Review</h5>
            <div class="resto__review_card shadow">
              <span class="review__name">Minuman</span>
              <p class="review__text">“Lorem ipsum dolor sit amet, consectetur adipiscing.
              Facilisi pellentesque id molestie nulla.”</p>
              <span class="review__date">13 November 2019</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  async afterRender () {
    //
  }
}
export default DetailPage
