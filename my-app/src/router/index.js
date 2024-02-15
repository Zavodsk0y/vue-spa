import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";
import Logout from "@/components/Logout.vue";
import Products from "@/components/Products.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import LogoutView from "@/views/LogoutView.vue";
import ProductsView from "@/views/ProductsView.vue";
import CartView from "@/views/CartView.vue";
import OrderView from "@/views/OrderView.vue";


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/products');
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductsView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
