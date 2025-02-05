import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/tasks',
    name: 'tasks',
    component: () => import('../views/TaskList.vue'),
  },
  {
    path: '/',
    alias: '/tasks/new',
    name: 'task-new',
    component: () => import('../views/TaskForm.vue'),
  },
  {
    path: '/',
    alias: '/tasks/:id',
    name: 'task-details',
    component: () => import('../views/TaskDetail.vue'),
  },
]

// console.log(process.env.BASE_URL)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
