import Home from '../views/pages/home.js';
import Detail from '../views/pages/detail.js';
import Favorites from '../views/pages/favorites.js';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorite': Favorites,
  '/detail/:id': Detail,
};

export default routes;
