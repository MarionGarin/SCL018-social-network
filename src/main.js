import { observer } from './lib/firebase.js';
import { changeRoute } from './lib/router.js';

/*
const init = () => {
  window.location.hash = '#/';
  window.addEventListener('hashchange', () => {
    // observer();
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init); */

/* aquí abajo hay dos manejadores de eventos. El primero de ellos es load, que significa que al
cargar la página se activa la función que envía una vista al root del html, según el hash
correspondiente. También se activa el observador.
El segundo es el cambio de hash, y en ese caso pasa lo mismo que en la situación anterior */
window.addEventListener('load', () => {
  changeRoute(window.location.hash);
  observer();
});

window.addEventListener('hashchange', () => {
  changeRoute(window.location.hash);
  observer();
});
