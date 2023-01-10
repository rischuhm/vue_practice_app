import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StringCheckerView from '../views/StringCheckerView.vue'
import PassCheckerView from '../views/PassCheckerView.vue'
import bmiCalcView from '../views/bmiCalcView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringchecker',
      name: 'stringchecker',
      component: StringCheckerView
    },
    {
      path: '/passchecker',
      name: 'passchecker',
      component: PassCheckerView
    },
    {
      path: '/bmicalc',
      name: 'bmicalc',
      component: bmiCalcView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
