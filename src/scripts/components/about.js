class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="content">
        <article class="headline">
            <figure class="headline__figure">
              <img class="lazyload" data-src="/images/heros/hero-image_1.webp" alt="Find MyResto Worker">
              <figcaption>Our job is to ensure the quality of the food we serve</figcaption>
            </figure>
            <div class="headline__content">
              <h1 class="headline__title">About Us</h1>
              <p class="headline__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
                facere nostrum officiis qui quidem ratione similique, soluta veniam voluptatum. Accusantium ad amet
                asperiores, aut commodi corporis dicta distinctio ducimus expedita itaque laudantium magnam maiores,
                nobis obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta veniam vero
                vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio vero. Laudantium!</p>
              <button class="headline__button "><a href="#main">Read More</button>
            </div>
          </article>
        </section>
        `;
  }
}

customElements.define('about-website', About);
