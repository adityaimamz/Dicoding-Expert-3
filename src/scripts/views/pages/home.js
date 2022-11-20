import { createRestaurantListTemplate } from '../templates/template-creator.js';
import RestaurantApi from '../../data/restaurant-api.js';

const Home = {
  async render() {
    return `
        <about-website></about-website>
        <section class="content">
        <div class="card">
            <h1 class="card-label">Daftar restaurant</h1>
            <div id="restaurants" class="restaurant">
            </div>
        </div>
        </section>
        `;
  },
  async afterRender() {
    const listRestaurant = await RestaurantApi.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    listRestaurant.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
  // const tombol = document.querySelector('#tombol');
};
export default Home;
