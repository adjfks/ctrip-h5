import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home/index.vue')
const Hotel = () => import('@/views/Hotel/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/html5',
  },
  {
    path: '/html5',
    component: Home,
  },
  {
    path: '/hotel',
    component: Hotel,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
