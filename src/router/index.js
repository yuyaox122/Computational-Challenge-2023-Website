import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import FeedView from "../views/FeedView.vue";
import MessagesView from "../views/MessagesView.vue";
import SearchView from "../views/SearchView.vue";
import FindFactors from "@/views/FindFactors.vue";
import About from "@/views/About.vue";
import {useUserStore} from '@/stores/user'
import Task1 from "@/views/Task1.vue";
import Task2 from "@/views/Task2.vue";

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
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/task1',
      name: 'task1',
      component: Task1
    },
    {
      path: '/task2',
      name: 'task2',
      component: Task2
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
  ]
})

// router.beforeEach(async (to, from) => {
//   const userStore = useUserStore()
//   console.log(to)
//   //  if (!userStore.user.isAuthenticated) {
//   //   return { name: 'login' }
//   //   } 
//   if (
//     // make sure the user is authenticated
//     !userStore.user.isAuthenticated &&
//     to.name !== 'login' &&  to.name !== 'signup'
//   ) {
//     // redirect the user to the login page
//     return { name: 'login' }
//   }
// })

export default router
