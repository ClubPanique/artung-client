<template>
  <div id="app" class="container text-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
//Import de Bootstrap et du fichier de modification des variables pour y accéder dans toute l'application.
@import './assets/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
