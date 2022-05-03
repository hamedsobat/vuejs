import { createRouter, createWebHistory } from 'vue-router'
import Video from '../components/video_games/video_games.vue'
import Contact from '../components/contact/contact.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'video',
      component: Video
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Contact
    }
  ]
})

export default router
