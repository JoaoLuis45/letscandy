import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../views/inicio.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: inicio
  },
  {
    path: '/sacola',
    name: 'sacola',
    component: () => import(/* webpackChunkName: "sacola" */ '../views/sacola.vue')
  },
  {
    path: '/sobrenos',
    name: 'sobrenos',
    component: () => import(/* webpackChunkName: "sobrenos" */ '../views/sobrenos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
