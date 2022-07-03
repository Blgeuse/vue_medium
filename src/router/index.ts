import {createRouter, createWebHistory} from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/feed',
      name: 'yourFeed',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/tags/:slug',
      name: 'tag',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/articles/new',
      name: 'createArticle',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/articles/:slug/edit',
      name: 'editArticle',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue'),
    },
    {
      path: '/profiles/:slug',
      name: 'userProfile',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/profiles/:slug/favorites',
      name: 'userProfileFavorites',
      component: () => import('../views/Home.vue'),
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})
