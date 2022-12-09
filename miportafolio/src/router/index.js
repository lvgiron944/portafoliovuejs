import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/curriculum',
    name: 'curriculum',
    component: () => import(/* webpackChunkName: "curriculum" */ '../views/CurriculumView.vue')
  },
 {
    path:'/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/ContactView.vue')
  },

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
