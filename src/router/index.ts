import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import BlogList from '@/pages/BlogList.vue'
import BlogPost from '@/pages/BlogPost.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogList,
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router
