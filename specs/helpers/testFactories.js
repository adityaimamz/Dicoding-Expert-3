import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator.js';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb.js';

const createFavoriteButtonInitiatorWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonInitiatorWithRestaurant };
