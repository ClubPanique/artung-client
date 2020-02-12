<template>
  <div>
    <div>
      <label for="contenu">{{text}}</label>
    </div>
    <input id="contenu" type="text" placeholder="Ecrivez ici" />
  </div>
</template>
  <!-- Types : text, password, email -->

<script>
export default {
  name: "FormGroup",
  props: {
    text: String,
    typeStatus: String
  },
  mounted() {
    this.typeChange();
  },
  methods: {
    typeChange: function() {
      if (this.typeStatus == "email") {
        this.$el.querySelector("button").setAttribute("type", "email");
      } else if (this.typeStatus == "password") {
        this.$el.querySelector("button").setAttribute("type", "password");
      } else {
        this.$el.querySelector("button").setAttribute("type", "text");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>