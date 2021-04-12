import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerShowing : false
  },
  getters: {
    drawerShowing(){
      return this.state.drawerShowing;
    }
  },
  mutations: {
    toggleDrawer(){
      this.state.drawerShowing ? this.state.drawerShowing = false : this.state.drawerShowing = true;
    },
    closeDrawer(){
      this.state.drawerShowing = false;
    }
  },
  actions: {
  },
  modules: {
  }
})