import Vue from 'vue';
import App from './App.vue';

// Imports fontawesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
// Définir ici les icones à utiliser.
import {faHome, faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon);
// Ajouter les icones à la librairie
library.add(faHome, faHeart, farHeart);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
