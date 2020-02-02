<template>
  <div id="app">
    <FacebookLog />
  </div>
</template>

<script>
import FacebookLog from "./components/FacebookLog.vue";

export default {
  name: "app",
  components: {
    FacebookLog
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
