<template>
  <div>
    <font-awesome-icon :icon="['fab', 'facebook']" />
    <font-awesome-icon :icon="['fab', 'twitter']" />
    <font-awesome-icon :icon="['fab', 'youtube']" />
    <font-awesome-icon :icon="['fab', 'wordpress']" />
    <div>
      <label for="contenu">{{text}}</label>
    </div>
    <input id="contenu" />
  </div>
</template>

<script>
export default {
  name: "FormGroupInline",
  props: {
    text: String,
    iconStatus: String
  },
  mounted() {
    this.iconChange();
  },
  methods: {
    iconChange: function() {
      if (this.typeStatus == "facebook") {
        // icon facebook
      } else if (this.typeStatus == "twitter") {
        // icon twitter
      } else if (this.typeStatus == "youtube") {
        // icon youtube
      } else if (this.typeStatus == "wordpress") {
        // icon wordpress
      } else {
        // icon vide ou ?
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
