<template>
  <div>
    <div
      class="back-to-top rounded-circle"
      :class="{ show: showButton }"
      v-if="showButton"
      @click="scrollToTop"
    >
      <i class="mdi mdi-arrow-up"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackToTopButton",
  data: () => ({
    showButton: false,
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.pageYOffset > 100;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  cursor: pointer;
  font-size: 28px;
  background-color: #cc2229;
  border-color: #ffd400 !important;
  opacity: 1;
  width: 50px;
  height: 50px;
  border: 2px solid #ffd400;
  transition: opacity 0.3s ease-in-out;
}

.back-to-top.show {
  opacity: 1;
}

.back-to-top i {
  position: relative;
  bottom: -2px;
  left: 10px;
  color: #ffd400;
}

.back-to-top:hover {
  opacity: 1;
  background-color: #ffd400;
  border-color: #cc2229;
  /* border: 2px solid var(--color-primary); */
}

.back-to-top:hover i {
  color: #cc2229;
}
</style>