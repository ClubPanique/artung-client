import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Import des composants
import HelloWorld from './components/HelloWorld';

// Définition des routes
const routes = [{path: '/hello', component: HelloWorld}];

//Création du routeur.
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

export default router;
