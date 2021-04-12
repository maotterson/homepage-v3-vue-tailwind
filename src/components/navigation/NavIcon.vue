<template>
  <div class="nav-icon relative w-6 h-5 visible" ref="burger" id="burger">
    <span class="absolute inset-0 bg-red-100 w-6 h-1 rounded burger-top transition-all	"></span>
    <span class="absolute inset-y-2 bg-red-100 w-6 h-1 rounded burger-middle transition-all	" ></span>
    <span class="absolute inset-y-4 bg-red-100 w-6 h-1 rounded burger-bottom transition-all	"></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    this.$refs.burger.onclick = this.toggleDrawer;
  },
  methods: {
    toggleDrawer() {
      this.$store.commit('toggleDrawer')
    }
  }
  
})
</script>

<style>

</style>