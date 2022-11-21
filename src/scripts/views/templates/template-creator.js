import API_ENDPOINT from '../../globals/api-endpoint.js';

const createRestaurantListTemplate = (restaurant) => `
    <div class="restaurant-list">   
        <img class="restaurant-list-thumbnail lazyload"
           data-src="${API_ENDPOINT.IMAGE_RESTAURANT}/${restaurant.pictureId}"
        alt="${restaurant.name}">
    <div class="restaurant-list-location">${restaurant.city}</div>
    <div class="restaurant-list-content">
        <p class="restaurant-list-rating">Rating : 
        <p class="restaurant-list-rating-star">★ ${restaurant.rating}</p>
    </p>
    <h1 class="restaurant-list-title">${restaurant.name}</h1>
        <p class="restaurant-list-description">${restaurant.description}</p>
        <a id="tombol" class="link-button" href="/#/detail/${restaurant.id}">detail</a>
</div>
  `;
const createRestaurantDetailTemplate = (restaurant) => `
  <div class="info_restoran">
  <img class="lazyload" data-src="${API_ENDPOINT.IMAGE_RESTAURANT}/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="background_tabel_info_restoran">
      <table class="tabel_info_restoran">
          <tr>
              <th>Nama</th>
              <td class="normal_p">${restaurant.name}</td>
          </tr>
          <tr>
              <th>Alamat</th>
              <td class="normal_p">${restaurant.address}, ${restaurant.city}</td>
          </tr>
          <tr>
              <th>Kategori</th>
              <td class="normal_p">${restaurant.categories.map((category) => `${category.name}`).join(', ')}</td>
          </tr>
          <tr>
              <th style="margin-bottom: 70px">Rating </th>
              <td class="normal_p detail-rating">${restaurant.rating}</td>
          </tr>
          <tr>
              <th>Deskripsi</th>
          </tr>
          <tr>
            <td style="vertical-align: top" class="normal_p">${restaurant.description}</td>
          </tr>
      </table>
      <br>
      <table class="tabel_info_restoran">
          <tr>
              <th>Makanan</th>
              <th>Minuman</th>
          </tr>
          <tr>
              <td style="vertical-align: top">${restaurant.menus.foods.map((food) => `<p class="normal_p">${food.name}</p>`).join('')}</td>
              <td style="vertical-align: top">${restaurant.menus.drinks.map((drink) => `<p class="normal_p">${drink.name}</p>`).join('')}</td>
          </tr>
      </table>
  </div>
  ${restaurant.customerReviews.map((review) => `
      <div class="review_restoran">
          <h3>${review.name} - ${review.date}</h3>
          <p class="normal_p">${review.review}</p>
      </div>
  `).join('')}
</div>

`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="add to favorite" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="remove from favorite" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
