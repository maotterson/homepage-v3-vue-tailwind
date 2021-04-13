<template>
  <router-link 
    :to="route.path" 
    class="drawer-link p-5"
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