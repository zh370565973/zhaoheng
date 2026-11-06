import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHashHistory('/zhaoheng/'),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', component: () => import('../views/About.vue') },
    { path: '/projects', component: () => import('../views/Projects.vue') },
    { path: '/projects/:slug', component: () => import('../views/ProjectDetail.vue') },
    { path: '/ai-lab', component: () => import('../views/AILab.vue') },
    { path: '/resources', component: () => import('../views/Resources.vue') },
    { path: '/gallery', component: () => import('../views/Gallery.vue') },
    { path: '/notes', component: () => import('../views/Notes.vue') },
    { path: '/contact', component: () => import('../views/Contact.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
export default router