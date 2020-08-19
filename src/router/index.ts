import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../page/Home')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../page/404')
    },
  ],
})
