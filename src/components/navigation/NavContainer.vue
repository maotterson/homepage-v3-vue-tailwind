<template>
  <div class="sticky">
    <nav class="h-5 p-10 flex flex-row justify-between items-center">
      <div class="spacer">
      </div>
      <NavIcon />
    </nav>
    <NavDrawer 
      :class="drawerShowing ? 'h-screen' : 'h-0'"
      class="text-3xl items-center flex flex-col drawer truncate transition-all">
      <NavLink 
        v-for="(route,i) in routes" 
        :key="route.name" 
        :route="route"
        :class="drawerShowing ? `transition-all delay-${i*100}` : 'opacity-0 mt-96'"/>
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