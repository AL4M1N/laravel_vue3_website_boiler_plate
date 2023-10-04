<template>
  <div>Hello World</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},

  methods: {},

  async created() {
    this.$Progress.start();
    this.$Progress.finish();
  },
};
</script>

<style>
</style>
