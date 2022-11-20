class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
        <div class="hero">
            <h1 class="hero-title">Find Best Indonesian Food Restaurant</h1>
            <p class="hero-motto">“Improving Quality of Life through Innovation in Daily Food”</p>
        </div>
    </div>`;
  }
}

customElements.define('jumbotron-hero', Jumbotron);
