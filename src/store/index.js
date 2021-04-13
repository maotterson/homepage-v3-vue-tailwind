import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerShowing : false,
    scrollY : 0,
    resumeScrollY : 0
  },
  getters: {
    drawerShowing(){
      return this.state.drawerShowing;
    },
    scrollY(){
      return this.state.scrollY;
    }
  },
  mutations: {
    toggleDrawer(){
      this.state.drawerShowing ? this.state.drawerShowing = false : this.state.drawerShowing = true;
    },
    closeDrawer(){
      this.state.drawerShowing = false;
    },
    setScrollY(state, payload){
      this.state.scrollY = payload.y;
    },
    forcedScrollUp(){
      this.state.resumeScrollY = this.state.scrollY
    },
    resetScrollResume(){
      this.state.resumeScrollY = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})