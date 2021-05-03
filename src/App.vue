<template>
  <div>
    <NavContainer 
      class="fixed w-screen bg-white text-black inset-0 overflow-hidden"
    />
    <router-view />
    <PageFooter
    />
  </div>
</template>

<script>
import NavContainer from './components/navigation/NavContainer.vue'
import PageFooter from './components/common/PageFooter.vue'
export default {
  components:{
    NavContainer,
    PageFooter
  },
  mounted(){
    window.onscroll = () =>
    {
      const payload = {
        y: window.scrollY
      }
      this.$store.commit(`setScrollY`,payload)
    };
  },
  computed: {
    scrollY () {
      return this.$store.state.scrollY
    },
    drawerShowing () {
      return this.$store.state.drawerShowing
    }
  },
  watch:{
    scrollY (){
    },
    drawerShowing (){
      this.toggleScrollingProgress()
      this.toggleScrollBar()
    }
  },
  methods:{
    toggleScrollingProgress(){
      if(this.drawerShowing){
        this.$store.commit('forcedScrollUp')
        window.scroll(0,0);
      }
      else{
        window.scroll(0, this.$store.state.resumeScrollY)
        this.$store.commit('resetScrollResume')
      }
    },
    toggleScrollBar(){
      const htmlElement = document.querySelector('html')
      this.$store.state.drawerShowing ? htmlElement.style.overflowY="hidden" : htmlElement.style.overflowY="overlay"
    }
  }
}
</script>

<style>

@import './assets/icons/style.css';
html{
  overflow-y:overlay;  

}
em{
  font-style:normal;
  color:#ff5c5c;
}
</style>