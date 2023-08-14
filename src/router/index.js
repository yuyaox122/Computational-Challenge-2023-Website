import { createRouter, createWebHistory } from 'vue-router'
import About from "@/views/About.vue";
import Task1 from "@/views/Task1.vue";
import Task2 from "@/views/Task2.vue";
import Task3 from "@/views/Task3.vue";
import Task4 from "@/views/Task4.vue";
import Task5 from "@/views/Task5.vue";
import Task6 from "@/views/Task6.vue";
import Task7 from "@/views/Task7.vue";
import ErrorPage from "@/views/ErrorPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/task3',
      name: 'task3',
      component: Task3
    },
    {
      path: '/task4',
      name: 'task4',
      component: Task4
    },
    {
      path: '/task5',
      name: 'task5',
      component: Task5
    },
    {
      path: '/task6',
      name: 'task6',
      component: Task6
    },
    {
      path: '/task7',
      name: 'task7',
      component: Task7
    },
    {
      path: '/error',
      name: 'ErrorPage',
      component: ErrorPage
    },
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/error'
    },
  ]
})

export default router
