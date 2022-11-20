import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/fav-footer.js';
import './components/jumbotron-hero.js';
import './components/about.js';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// const START = 10;
// const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
