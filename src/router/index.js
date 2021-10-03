import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Blogs from '/src/views/Blogs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
