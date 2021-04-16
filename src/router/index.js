import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: 'mdi-home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    icon: 'mdi-information-outline',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    icon: 'mdi-newspaper-variant-outline',
    component: () => import(/* webpackChunkName: "about" */ '../views/Skills.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    icon: 'mdi-folder-account-outline',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router