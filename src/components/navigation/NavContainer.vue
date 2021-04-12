<template>
  <div class="fixed w-screen bg-red-800 text-red-100">
    <nav class="h-5 p-10 flex flex-row justify-between items-center">
      <div class="spacer">
      </div>
      <NavIcon />
    </nav>
    <NavDrawer>
      <NavLink />
    </NavDrawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavIcon from './NavIcon.vue'
import NavDrawer from './NavDrawer.vue'
import NavLink from './NavLink.vue'
export default Vue.extend({
  components:{
    NavIcon,
    NavDrawer,
    NavLink
  }
})
</script>

<style>

</style>