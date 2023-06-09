import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/perfil',
    name: 'pefil',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/PerfilView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/*webpackChunkName: "search"*/ '../views/SearchView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
