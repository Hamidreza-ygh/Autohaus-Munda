import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import KontaktPage from "../views/KontaktPage.vue"
import CarDetailsPage from "../views/CarDetailsPage.vue"
import RequestPage from "../views/RequestPage.vue"
import TippView from "../views/TippView.vue"
import ImpressumPage from "../views/ImpressumPage.vue"
import DatenschutzPage from "../views/DatenschutzPage.vue"

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
    path: '/tipps',
    name: 'tipps',
    component: TippView
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: KontaktPage
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumPage
  },
  {
    path: '/datenschutz',
    name: 'dataProtection',
    component: DatenschutzPage
  },
  {
    path: '/car/:carId',
    name: 'carDetails',
    props:true,
    component: CarDetailsPage,
    meta: { scrollToTop: true }
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
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
