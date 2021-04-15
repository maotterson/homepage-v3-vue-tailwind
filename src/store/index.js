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
        sectionId: 'vaccine',
        link:'https://vaccines.maotterson.com',
        bgVideo: require('@/assets/background-videos/vaccine-bg.mp4')
      },
      {
        name: 'Open Weather Map',
        description:'An interactive map that provides some basic weather information at a given location.',
        image: 'weather',
        sectionId: 'weather',
        github:'https://github.com/maotterson/weathermap',
        bgVideo: require('@/assets/background-videos/weather-bg.mp4')
      },
      {
        name: 'Android Geography Quiz',
        description:'A geography game inspired by Traveler IQ. Made for an android device..',
        image: 'geography',
        sectionId: 'geographyquiz',
        github:'https://github.com/maotterson/geography-quiz',
        bgVideo: require('@/assets/background-videos/geography-bg.mp4')
      },
      {
        name: 'Android Blackjack',
        description:'A basic implementation of blackjack for an android device.',
        image: 'blackjack',
        sectionId: 'blackjack',
        github:'https://github.com/maotterson/blackjack',
        bgVideo: require('@/assets/background-videos/blackjack-bg.mp4')
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