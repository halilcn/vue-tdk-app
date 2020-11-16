import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('../components/MainPage')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
