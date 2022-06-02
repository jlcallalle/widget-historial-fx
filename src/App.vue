<template>
  <div
    id="app"
    class="wrapper-widget">
    <div class="widget-historial-fx">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <p>Template Base</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  computed: {
    ...mapState(['posts']),
  },
  created() {
    this.getPosts();
  },
  methods: {
    ...mapActions(['getPosts']),
  },
};
</script>

<style lang="scss">
img {
  max-width: 100%;
}

</style>
