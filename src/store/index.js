import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerShowing : false,
    scrollY : 0,
    resumeScrollY : 0,
    socials : [
      {
        name: "Website",
        iconA:  "home",
        iconPrefix: "fas",
        alt: "maotterson.com",
        link: "https://maotterson.com"
      },
      {
        name:"Email",
        iconA:  "envelope",
        iconPrefix: "far",
        alt:"Email",
        link:"mailto:otterson.2@gmail.com"
      },
      {
        name: "LinkedIn",
        iconA:  "linkedin",
        iconPrefix: "fab",
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/mark-otterson-a7506029/"
      },
      {
        name: "GitHub",
        iconA:  "github",
        iconPrefix: "fab",
        alt: "GitHub",
        link: "https://github.com/maotterson"
      },
      {
        name: "Codepen",
        iconA:  "codepen",
        iconPrefix: "fab",
        alt: "Codepen",
        link: "https://codepen.io/maotterson"
      },
    ],
    projects:[
      {
        name: 'Ohio Vaccine Map',
        description:'A searchable map of nearby available COVID-19 vaccine appointments in Ohio.',
        image: 'vaccine',
        thumbnail: require(`../assets/thumbnails/vaccine-1.svg`),
        sectionId: 'vaccine'
      },
      {
        name: 'Open Weather Map',
        description:'An interactive map that provides some basic weather information at a given location.',
        image: 'cloud',
        thumbnail: require(`../assets/thumbnails/vaccine-1.svg`),
        sectionId: 'weather'
      },
      {
        name: 'Android Geography Quiz',
        description:'A geography game inspired by Traveler IQ. Made for an android device..',
        image: 'cloud',
        thumbnail: require(`../assets/thumbnails/vaccine-1.svg`),
        sectionId: 'geographyquiz'
      },
      {
        name: 'Android Blackjack',
        description:'A basic implementation of blackjack for an android device.',
        image: 'cloud',
        thumbnail: require(`../assets/thumbnails/vaccine-1.svg`),
        sectionId: 'blackjack'
      },
      
      {
        name: 'Tesseract JS Demo',
        description:'A basic vue implementation of the Tesseract JS text parsing API.',
        image: 'cloud',
        thumbnail: require(`../assets/thumbnails/vaccine-1.svg`),
        sectionId: 'tesseract'
      }
    ]
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
      this.state.resumeScrollY = 0;
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