<template>
  <router-link 
    :to="route.path" 
    class="drawer-link p-5"
    ref="routerLink">
    {{route.name}}
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['route']
})
</script>

<style>

</style>