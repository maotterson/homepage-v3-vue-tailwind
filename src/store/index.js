import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerShowing : false,
    scrollY : 0,
    resumeScrollY : 0,
    isDarkTheme : false,
    selectedCategory : {},
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
        sectionId: 'section-1',
        link:'https://vaccines.maotterson.com',
        bgVideo: require('@/assets/background-videos/vaccine-bg.mp4')
      },
      {
        name: 'Open Weather Map',
        description:'An interactive map that provides some basic weather information at a given location.',
        image: 'weather',
        sectionId: 'section-2',
        github:'https://github.com/maotterson/weathermap',
        bgVideo: require('@/assets/background-videos/weather-bg.mp4')
      },
      {
        name: 'Android Geography Quiz',
        description:'A geography game inspired by Traveler IQ. Made for an android device..',
        image: 'geography',
        sectionId: 'section-3',
        github:'https://github.com/maotterson/geography-quiz',
        bgVideo: require('@/assets/background-videos/geography-bg.mp4')
      },
      {
        name: 'Android Blackjack',
        description:'A basic implementation of blackjack for an android device.',
        image: 'blackjack',
        sectionId: 'section-4',
        github:'https://github.com/maotterson/blackjack',
        bgVideo: require('@/assets/background-videos/blackjack-bg.mp4')
      }
    ],
    skillCategories : [
      {
        category: "Front-end",
        icon: {
          prefix : "fas",
          name : "desktop"
        },
        skills: [
          {
            name: "HTML5/CSS3/Vanilla JS",
            icon: {
              prefix: "fab",
              name: "html5"
            },
            level: 5,
            subs: ["Bootstrap","Tailwind CSS","Material"]
          },
          {
            name: "Vue.js",
            icon: {
              prefix: "fab",
              name: "vuejs"
            },
            level: 4
          },
          {
            name: "Angular",
            icon: {
              prefix: "fab",
              name: "angular"
            },
            level: 4
          },
          {
            name:"Svelte",
            icon: "icon-svelte",
            level: 2
          }
        ]
      },
      {
        category: "Back-end",
        icon: {
          prefix : "fas",
          name : "server"
        },
        skills: [
          {
            name: "Node.js",
            icon: {
              prefix: "fab",
              name: "node"
            },
            level: 4,
            subs: ["Express.js","NPM"]
          },
          {
            name: "ASP.NET",
            icon: "icon-dot-net",
            level: 4,
            subs: [".NET Core","Razor"]
          },
          {
            name: "PHP",
            icon: {
              prefix: "fab",
              name: "php"
            },
            level: 3,
            subs: ["Laravel","Composer"]
          },
        ]
      },
      {
        category: "Languages",
        icon: {
          prefix : "fas",
          name : "code"
        },
        skills: [
          {
            name: "Javascript/TypeScript",
            icon: {
              prefix: "fab",
              name: "js"
            },
            level: 5
          },
          {
            name: "C#",
            icon: "icon-csharp",
            level: 5
          },
          {
            name: "Java",
            icon: {
              prefix: "fab",
              name: "java"
            },
            level: 4
          },
          {
            name: "C++",
            icon: "icon-cplusplus",
            level: 2
          },
          {
            name: "Python",
            icon: {
              prefix: "fab",
              name: "python" 
            },
            level: 2
          },
        ]
      },
      {
        category: "DBMS",
        icon: {
          prefix : "fas",
          name : "database"
        },
        skills: [
          {
            name: "MongoDB",
            icon: "icon-mongodb",
            level: 4,
            subs: ['Atlas','Realm']
          },
          {
            name: "MySQL",
            icon: "icon-mysql",
            level: 2
          },
          {
            name: "SQL Server",
            icon: "icon-microsoftsqlserver",
            level: 2,
            subs: ['Entity Framework']
          }
        ]
      },
      {
        category: "Cloud Services",
        icon: {
          prefix : "fas",
          name : "cloud"
        },
        skills: [
          {
            name: "AWS",
            icon: {
              prefix: "fab",
              name: "aws" 
            },
            level: 3
          },
          {
            name: "Google Cloud/Firebase",
            icon: {
              prefix: "fab",
              name: "google" 
            },
            level: 3
          },
          {
            name: "Heroku",
            icon: "icon-heroku",
            level: 2
          }
        ]
      },
      {
        category: "Software/Tools",
        icon: {
          prefix : "fas",
          name : "folder-open"
        },
        skills: [
          {
            name: "Microsoft Office",
            icon: {
              prefix: "fas",
              name: "file-word" 
            },
            level: 5,
            subs: ["Excel","Word","Powerpoint","Access"]
          },
          {
            name: "Adobe Creative",
            icon: "icon-adobecreativecloud",
            level: 3,
            subs: ["Photoshop","Illustrator"]
          }
        ]
      },
    ]
  },
  getters: {
    drawerShowing(){
      return this.state.drawerShowing;
    },
    scrollY(){
      return this.state.scrollY;
    },
    innerHeight(){
      return window.innerHeight
    },
    outerHeight(){
      return window.outerHeight
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
      this.state.scrollY = payload.y
    },
    forcedScrollUp(){
      this.state.resumeScrollY = this.state.scrollY
    },
    resetScrollResume(){
      this.state.resumeScrollY = 0;
    },
    setIsDarkTheme(state, payload){
      this.state.isDarkTheme = payload.isDarkTheme
    },
    selectedCategory(state, payload){
      this.state.selectedCategory = payload.selectedCategory
    }
  },
  actions: {
  },
  modules: {
  }
})
