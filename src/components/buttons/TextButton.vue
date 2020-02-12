impo

<template>
  <div>
    <button
      variant="outline-primary"
      class="btn btn-outline-primary"
      :class="{ secondary: secondary }"
    >{{text}}</button>
  </div>
</template>

<script>
export default {
  name: "TextButton",
  props: {
    text: String,
    secondary: Boolean,
    form: Boolean
  },
  data() {
    return {
      testVariable: "test",
      styleObject: {
        color: "#131b23",
        background: "#db5c3d",
        borderColor: "#db5c3d"
      }
    };
  },
  mounted() {
    this.isSecondary();
    this.checkForm();
  },
  methods: {
    isSecondary: function() {
      if (this.secondary) {
        this.$el.querySelector("button").style.color = "#131b23";
        this.$el.querySelector("button").style.background = "#db5c3d";
        this.$el.querySelector("button").style.bordercolor = "#db5c3d";
      } else {
        this.$el.querySelector("button").style.color = "#db5c3d";
        this.$el.querySelector("button").style.background = "#131b23";
        this.$el.querySelector("button").style.bordercolor = "#db5c3d";
      }
    },
    checkForm: function() {
      if (this.form) {
        this.$el.querySelector("button").setAttribute("type", "submit");
      } else {
        this.$el.querySelector("button").setAttribute("type", "button");
      }
    }
  },

  watch: {},
  computed: {
    // elbairavTset: function() {
    //   return this.testVariable + "test";
    // },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>