<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-main>
      <div>
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>
      </div>
      <back-to-top-button></back-to-top-button>
    </v-main>
    <page-footer></page-footer>
  </v-app>
</template>

<script>
import navBar from "./pages/common/navbar.vue";
import pageFooter from "./pages/common/footer.vue";
// import scrollTop from "./pages/common/scrollTop.vue";
import backToTopButton from "./pages/common/BackToTopButton.vue";
// import AOS from "aos";
// import "aos/dist/aos.css";
//font
// import "@fontsource/prompt";

//Bangla font
// import "@fontsource/tiro-bangla";
// AOS.init();

export default {
  components: {
    "nav-bar": navBar,
    "page-footer": pageFooter,
    backToTopButton,
  },

  data() {
    return {};
  },

  methods: {},

  created() {
    this.$Progress.start();

    this.$Progress.finish();
  },
};
</script>
