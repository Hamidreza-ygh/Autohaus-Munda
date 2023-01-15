import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

export default createStore({
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ],
  state: {
    currentPage: 'Unsere Fahrzeuge',
    navigationData: [
      { name: 'Unsere Fahrzeuge', routerName: 'home', current: true },
      { name: 'Service', href: '#', current: false },
      { name: 'Fahrzeug Verkaufen', routerName: 'request', current: false },
      // { name: 'Angebot', href: '#', current: false },
      { name: 'Tipps', routerName: 'tipps', current: false },
      { name: 'Kontakt', routerName: 'contact', current: false },
    ],
    footerLinks: [
      { name: 'Datenschutz', routerName: 'dataProtection', current: true },
      { name: 'Service', href: '#', current: false },
      { name: 'Impressum', routerName: 'impressum', current: false },
      { name: 'Tipps', routerName: 'tipps', current: false },
      { name: 'Kontakt', routerName: 'contact', current: false },
    ],
    cars: null,
    carsObject: null,
  },
  getters: {
    currentPage: (state) => state.currentPage,
    // navigationData: (state) => state.navigationData,
  },
  mutations: {
    // getCarDetails(state) {
    //   let result = state.cars.reduce(function (r, a) {
    //       r[a.CarID] = r[a.CarID] || [];
    //       r[a.CarID].push(a);
    //       return r;
    //   }, Object.create(null));
    //   return result;
    // },
  },
  actions: {
  },
  modules: {
  },
})
