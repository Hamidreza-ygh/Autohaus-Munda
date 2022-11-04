import { createStore } from 'vuex'

export default createStore({
  state: {
    currentPage: 'Unsere Fahrzeuge',
    navigationData: [
      { name: 'Unsere Fahrzeuge', routerName: 'home', current: true },
      { name: 'Service', href: '#', current: false },
      { name: 'Anfrage', routerName: 'request', current: false },
      // { name: 'Angebot', href: '#', current: false },
      { name: 'Tipps', href: '#', current: false },
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
  }
})
