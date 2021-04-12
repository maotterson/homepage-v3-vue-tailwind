<template>
  <div class="fixed w-screen bg-red-800 text-red-100">
    <nav class="h-5 p-10 flex flex-row justify-between items-center">
      <div class="spacer">
      </div>
      <NavIcon />
    </nav>
    <NavDrawer v-if="drawerShowing">
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
  },
  computed: {
    drawerShowing () {
      return this.$store.state.drawerShowing
    },
    routes () {
      return this.$router.options.routes;
    }
  },
})
</script>

<style>

</style>