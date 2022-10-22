import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import KontaktPage from "../views/KontaktPage.vue"
import CarDetailsPage from "../views/CarDetailsPage.vue"
import RequestPage from "../views/RequestPage.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/anfrage',
    name: 'request',
    component: RequestPage
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: KontaktPage
  },
  {
    path: '/car/:carId',
    name: 'carDetails',
    props:true,
    component: CarDetailsPage
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
