impo

<template>
  <div>
    <button variant="outline-primary" class="btn btn-outline-primary">{{text}}</button>
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
      testVariable: "test"
    };
  },
  mounted() {
    this.addSecondaryClass();
    this.checkForm();
  },
  methods: {
    addSecondaryClass: function() {
      if (this.secondary) {
        this.$el.querySelector("button").classList.add("secondary");
        this.$el.querySelector("button").style.color = "#000000"
        this.$el.querySelector("button").style.background = "#db5c3d"
        this.$el.querySelector("button").style.bordercolor = "#db5c3d"
      } else {
        this.$el.querySelector("button").classList.remove("secondary");
        // alert("removed !")
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

  // watch: {
  //   addSecondaryClass: function() {
  //     if (this.secondary) {
  //       this.$el.querySelector("button").classList.add("secondary")
  //     }
  //   }
  // },
  computed: {
    elbairavTset: function() {
      return this.testVariable + "test";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// .primary {
//   color: red;  
// }

.btn-outline-primary,
.btn-outline-primary:hover,
.btn-outline-primary:active,
.btn-outline-primary:visited,
.btn-outline-primary:focus {
  border-color: #db5c3d;
  background: #000000;
  color: rgb(219, 92, 61);
}

// .secondary {
//   color: black;
// }

</style>
