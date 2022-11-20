import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb.js';
import { createRestaurantListTemplate } from '../templates/template-creator.js';

const Favorites = {
  async render() {
    return `
    <div class="daftar-restoran container">
    <h2>Favorite restaurant</h2>
    <div id="restaurant" class="restaurant">
    </div>
</div>
</section>
    `;
  },

  async afterRender() {
    const listRestaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    listRestaurant.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorites;
