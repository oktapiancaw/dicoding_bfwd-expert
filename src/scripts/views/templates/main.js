const Jumbotron = `
  <div class="jumbotron">
    <h1>Easy way to find the nearest and best place to eat</h1>
      <picture class="jumbotron_img">
        <source media="(min-width: 721px)" srcset="./images/jumbotron-large.jpg" type="image/jpeg">
        <source media="(min-width: 361px)" srcset="./images/jumbotron-medium.jpg" type="image/jpeg">
        <source media="(max-width: 360px)" srcset="./images/jumbotron-small.jpg" type="image/jpeg">
        <img 
          data-src="./images/jumbotron-large.jpg" 
          alt="Jumbotron" class="lazyload"></img>
      </picture>
    </div>
  </div>
`

export { Jumbotron }
