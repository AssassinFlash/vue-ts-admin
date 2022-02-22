import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
