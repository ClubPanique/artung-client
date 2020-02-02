<template>
  <div class="facebook-log">
    <!-- Le composant de login, auquel on passe des props (voir la doc et le fichier node_modules\facebook-login-vuejs\src\facebook-login.vue) -->
    <facebook-login
      class="button"
      appId="113324356787500"
      version="v5.0"
      :loginOptions="loginOptions"
      :loginLabel="loginLabel"
      :logoutLabel="logoutLabel"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded"
    ></facebook-login>
    <div v-if="isConnected" class="information">
      <h2>Informations sur le compte Facebook</h2>
      <div class="list-item">
        <img :src="picture" />
      </div>
      <div class="list-item">
        <i>{{ name }}</i>
      </div>
      <h2>Publications de la page {{ pageName }}</h2>
      <div v-for="post in posts" :key="post.id">
        <div v-if="post.picture">
          <img :src="post.picture" />
        </div>
        <p>Message : {{ post.message }}</p>
        <p>Date de creation : {{ post.created_time }}</p>
        <div v-if="post.comments">
          <p>Commentaires : {{ post.comments.data.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import facebookLogin from "facebook-login-vuejs";

export default {
  name: "FacebookLog",
  components: {
    facebookLogin
  },
  data() {
    return {
      isConnected: false,
      name: "",
      email: "",
      personalID: "",
      picture: "",
      FB: undefined,
      loginOptions: {
        scope: "public_profile, email, manage_pages"
      },
      loginLabel: "Lier la page Facebook",
      logoutLabel: "Enlever la page Facebook",
      posts: [],
      pageName: ""
    };
  },
  methods: {
    getData() {
      this.getUserData();
      this.getPageData();
    },
    getUserData() {
      this.FB.api("/me", "GET", { fields: "id,name,email,picture" }, user => {
        this.personalID = user.id;
        this.email = user.email;
        this.name = user.name;
        this.picture = user.picture.data.url;
      });
    },
    getPageData() {
      this.FB.api(
        /// ici il faudrait créer une variable pageId qui permettrait de définir la page à chercher en fonction du user... je cherche
        "/107779020786055",
        "GET",
        {
          // On définit les champs qu'on veut (voir l'explorer pour voir les contenus intéressants)
          fields:
            "posts{event,picture,attachments,comments,created_time,message},name,videos,band_members"
        },
        page => {
          // On peut décomposer les infos sur la page et ceux sur les posts de la page
          this.posts = page.posts.data;
          this.pageName = page.name;
        }
      );
    },
    // Le composant fait remonter un événement sdk-loaded qui permet d'attendre que le SDK de fb soit chargé, pour qu'on puisse utiliser la variable FB (pour faire les requêtes notamment ^^)
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected;
      this.FB = payload.FB;
      if (this.isConnected) {
        this.getUserData();
        this.getPageData();
      }
    },
    onLogin() {
      this.isConnected = true;
      this.getUserData();
      this.getPageData();
    },
    onLogout() {
      this.isConnected = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
