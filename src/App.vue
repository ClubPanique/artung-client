<template>
  <div id="app" class="container text-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
//Import de Bootstrap et du fichier de modification des variables pour y accéder dans toute l'application.
@import './assets/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
