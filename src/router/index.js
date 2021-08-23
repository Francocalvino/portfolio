import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Experiencia from '../views/Experiencia.vue';
import Estudios from '../views/Estudios.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/experiencia',
    name: 'Experiencia',
    component: Experiencia
  },
  {
    path: '/estudios',
    name: 'Estudios',
    component: Estudios
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
