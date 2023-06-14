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
    component: () => import(/*webpackChunkName: "search"*/ '../views/BuscaView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/*webpackChunkName: "login"*/'../views/LoginView.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/*webpackChunkName: "registro"*/'../views/RegistroView.vue')
  },
  {
    path: '/calendario',
    name: 'calendario',
    component: () => import(/*webpackChunkName: "registro"*/'../views/CalendarioView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
