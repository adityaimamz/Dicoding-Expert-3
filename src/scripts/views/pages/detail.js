import RestaurantApi from '../../data/restaurant-api.js';
import UrlParser from '../../routes/url-parser.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator.js';

const Detail = {
  async render() {
    return `
      <div class="daftar-restoran container">
        <h2>Detail Restoran</h2>
        <p>Temukan berbagai macam cabang gerai kami di seluruh penjuru indonesia</p>
        <div class="detailrestoran" id="detailrestoran">
        </div>
      </div>
      <div id="favoriteButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantApi.detailRestaurant(url.id);
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#detailrestoran');
    restaurantsContainer.innerHTML = createRestaurantDetailTemplate(restaurants.restaurant);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurants.restaurant.id,
        name: restaurants.restaurant.name,
        pictureId: restaurants.restaurant.pictureId,
        address: restaurants.restaurant.address,
        city: restaurants.restaurant.city,
        categories: restaurants.restaurant.categories,
        rating: restaurants.restaurant.rating,
        foods: restaurants.restaurant.menus.foods,
        drinks: restaurants.restaurant.menus.drinks,
        customerReviews: restaurants.restaurant.customerReviews,
        description: restaurants.restaurant.description,
      },
    });
  },
};

export default Detail;
