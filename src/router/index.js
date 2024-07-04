import { createRouter, createWebHistory } from 'vue-router'
import inicio from '../views/inicio.vue'
import app from '../App.vue'

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
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/adm',
    name: 'adm',
    component: () => import(/* webpackChunkName: "adm" */ '../views/adm.vue'),
    beforeEnter : (to, from,next) => {
      if(!app.data().logado){
        //next('/')
      }else{
       // next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
