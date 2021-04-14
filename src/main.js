import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css';
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin,
  faLinkedinIn,
  faCodepen,
  faGithub,
  faGithubAlt,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



library.add(
  faLinkedin,
  faLinkedinIn,
  faCodepen,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faHome,
  faEnvelope
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
