import {createRouter, createWebHistory} from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/register', component: () => import('../views/Register.vue')},
  ]
})
