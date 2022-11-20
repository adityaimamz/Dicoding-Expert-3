class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
        <p>Find US</p>
        <ul class="social-media">
          <li><a href="#" aria-label="logo-facebook"><ion-icon name="logo-facebook"></ion-icon></a></li>
          <li><a href="#" aria-label="logo-instagram"><ion-icon name="logo-instagram"></ion-icon></a></li>
          <li><a href="#" aria-label="logo-whatsapp"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
        </ul>
        <p> Copyright © 2022 - Find MyResto </p>
        </footer>
        `;
  }
}

customElements.define('fav-footer', Footer);
