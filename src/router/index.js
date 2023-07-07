import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import FeedView from "../views/FeedView.vue";
import MessagesView from "../views/MessagesView.vue";
import SearchView from "../views/SearchView.vue";
import FindFactors from "@/views/FindFactors.vue";
import ComputationalChallenge from "@/views/ComputationalChallenge.vue";
import {useUserStore} from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedView
    },
    {
      path: '/computational_challenge',
      name: 'computational_challenge',
      component: ComputationalChallenge,
      meta: {
        requiresAuth: true
      }
    },
    {
    path: '/messages',
    name: 'messages',
    component: MessagesView
    },
    {
    path: '/search',
    name: 'search',
    component: SearchView
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

router.beforeEach(async (to, from) => {
  const userStore = useUserStore()
  console.log(to)
  //  if (!userStore.user.isAuthenticated) {
  //   return { name: 'login' }
  //   } 
  if (
    // make sure the user is authenticated
    !userStore.user.isAuthenticated &&
    to.name !== 'login' &&  to.name !== 'signup'
  ) {
    // redirect the user to the login page
    return { name: 'login' }
  }
})

export default router
