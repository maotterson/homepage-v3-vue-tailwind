<template>
  <router-link 
    :to="route.path" 
    class="drawer-link p-5 text-4xl hover:text-red-600 rounded"
    ref="routerLink"
    @click.native="closeDrawer">
    {{route.name}}.
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['route'],
  methods:{
    closeDrawer() {
      this.$store.commit('closeDrawer')
    },
  }
})
</script>

<style>

</style>