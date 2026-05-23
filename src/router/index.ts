import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/awesome-resources',
      name: 'awesome-resources',
      component: () => import('@/pages/AwesomeResources.vue'),
    },
  ],
})

export default router
