import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Main/MainPage.vue') },
      { path: '/login', component: () => import('pages/Main/LoginPage.vue') },
      { path: '/register', component: () => import('pages/Main/RegisterPage.vue') }
    ]
  },
  {
    path: '/index',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: '/index', component: () => import('src/pages/Index/IndexPage.vue') },
      { path: '/cart', component: () => import('pages/Index/CartPage.vue') },
      { path: '/products', component: () => import('pages/Index/ProductPage.vue') },
      { path: '/sale', component: () => import('pages/Index/SalePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
