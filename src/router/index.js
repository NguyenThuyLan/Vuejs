import { createRouter, createWebHistory } from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () => import(/* webpackChunkName: "about" */ '../views/LifeCycle.vue')
  },
  {
    path: '/reactivity',
    name: 'reactivity',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reactivity.vue')
  },
  {
    path: '/computedwatcher',
    name: 'computedwatcher',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComputedWatcher.vue')
  },
  {
    path: '/directive',
    name: 'directive',
    component: () => import(/* webpackChunkName: "about" */ '../views/Directive.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComponentInVue.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
