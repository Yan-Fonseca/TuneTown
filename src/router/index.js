import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getUserState } from '@/firebase'

const routes = [
  {
    path: '/',
    name: 'first',
    component: () => import(/*webpackChunkName: "First"*/'../views/FirstPageView.vue'),
    meta: {requiresUnauth: true}
  },
  {
    path: '/perfil/:id',
    name: 'pefil',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/PerfilView.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/*webpackChunkName: "search"*/ '../views/BuscaView.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/*webpackChunkName: "login"*/'../views/LoginView.vue'),
    meta: {requiresUnauth: true}
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/*webpackChunkName: "registro"*/'../views/RegistroView.vue'),
    meta: {requiresUnauth: true}
  },
  {
    path: '/calendario/:id',
    name: 'calendario',
    component: () => import(/*webpackChunkName: "registro"*/'../views/CalendarioView.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/Welcome',
    name: 'Welcome',
    component: () => import(/*webpackChunkName: "Welcome"*/'../views/WelcomeView.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {requiresAuth: true}
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const isAuth = await getUserState();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth);

  if(requiresAuth && !isAuth) next('/')
  else if (requiresUnauth && isAuth) next('/home')
  else next()
})

export default router
