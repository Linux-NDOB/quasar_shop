import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Main/MainPage.vue') },
      { path: '/login', component: () => import('pages/Main/LoginPage.vue') },
      { path: '/admin', component: () => import('pages/Main/AdminPage.vue') },
      { path: '/provider', component: () => import('pages/Main/ProviderPage.vue') }
    ]
  },
  {
    path: '/index',
    component: () => import('layouts/UserLAyout.vue'),
    children: [
      { path: '', name: '/index', component: () => import('src/pages/Index/IndexPage.vue') },
      { path: '/cart', component: () => import('pages/Index/CartPage.vue') },
      { path: '/products', component: () => import('pages/Index/ProductPage.vue') },
      { path: '/sale', component: () => import('pages/Index/SalePage.vue') },

      { path: '/hats', component: () => import('pages/Index/HatsPage.vue') },
      { path: '/belts', component: () => import('pages/Index/BeltsPage.vue') },
      { path: '/fabrics', component: () => import('pages/Index/FabricsPage.vue') },
      { path: '/bags', component: () => import('pages/Index/BagsPage.vue') },
      { path: '/pots', component: () => import('pages/Index/PotsPage.vue') }
    ]
  },
  {
    path: '/admin-main',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: '/admin-admin', component: () => import('src/pages/Admin/IndexPage.vue') },
      { path: '/product-list', name: '/product-list', component: () => import('src/pages/Admin/ProductListPage.vue') },
      { path: '/product-edit', name: '/product-edit', component: () => import('src/pages/Admin/ProductEditPage.vue') },
      { path: '/product-create', name: '/product-create', component: () => import('src/pages/Admin/ProductCreatePage.vue') },
      { path: '/user-list', name: '/user-list', component: () => import('src/pages/Admin/UserListPage.vue') },
      { path: '/user-edit', name: '/user-edit', component: () => import('src/pages/Admin/UserEdit.vue') }

    ]
  },
  {
    path: '/provider-main',
    component: () => import('layouts/ProviderLayout.vue'),
    children: [
      { path: '', name: '/provider-main', component: () => import('src/pages/Provider/MainPage.vue') },
      { path: '/provider-data', name: '/provider-data', component: () => import('src/pages/Provider/EditDataPage.vue') },
      { path: '/provider-product', name: '/provider-product', component: () => import('src/pages/Provider/CreateProduct.vue') },
      { path: '/provider-edit', name: '/provider-edit', component: () => import('src/pages/Provider/EditProductPage.vue') },
      { path: '/provider-list', name: '/provider-list', component: () => import('src/pages/Provider/ProductPage.vue') }

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
