<template>
  <div v-for="item in data" :key="item.CarID" class="group relative">
    <div class="aspect-w-1 aspect-h-1 h-80 w-full flex flex-col justify-center overflow-hidden rounded-md dark:bg-gray-800 bg-gray-200 group-hover:opacity-75 lg:aspect-none">
      <img :src="item.Image1[0].imageSrc" alt="" class="min-h-80 aspect-w-1 aspect-h-1" />
    </div>
    <!-- <div class="mt-4 flex justify-between gap-x-2">
      <div class="basis-3/4 flex flex-col justify-end">
        <h3 class="text-sm text-gray-700 h-16 dark:text-small-dark">
          <router-link :to="{ name: 'carDetails', params: {carId: item.CarID} }">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ carTitle(item) }}
          </router-link>
        </h3>
        <div class="grid grid-cols-2 text-sm text-gray-500 dark:text-small-dark">
          <p class="mt-1">{{ item.GearType }}</p>
          <p class="mt-1">{{ item.HorsePowerKW }} kW ( {{ psConverter(item.HorsePowerKW )}} PS)</p>
          <p class="mt-1">{{ item.Mileage }} km</p>
          <p class="mt-1">{{ item.FuelType }}</p>
        </div>
      </div>
      <div class="basis-1/4 flex flex-col justify-start">
        <div class="basis-1/4 order-first bg-red-600 px-1 h-[28px] rounded-md">
          <p class="text-sm lg:text-base font-bold text-white">€ {{ priceShowing(item.PriceSelling) }}</p>
        </div>
      </div>
    </div> -->
    <div class="mt-4 flex-col justify-between">
      <div class="flex flex-row gap-x-8 sm:gap-x-2 md:gap-x-8 justify-between">
        <h3 class="order-first basis-2/3 self-start text-sm text-gray-700 h-16 dark:text-small-dark">
          <router-link :to="{ name: 'carDetails', params: {carId: item.CarID} }">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ carTitle(item) }}
          </router-link>
        </h3>
        <div class="bg-sky-700 px-1 h-[38px] basis-1/3 text-center rounded-md flex items-center justify-center">
          <p class="text-base lg:text-lg font-bold text-white">€ {{ numberDivider(item.PriceSelling) }}</p>
        </div>
      </div>
      <div class="flex flex-col justify-start">
        <div class="grid grid-cols-2 gap-y-4 gap-x-20 sm:gap-x-4 md:gap-x-20 text-sm text-gray-500 dark:text-small-dark">
          <div class="info_container">
            <img v-if="darkMode" src="../assets/gearshift-dark.png" width="20">
            <img v-else src="../assets/gearshift.png" width="20">
            <p class="mt-1">{{ item.GearType }}</p>
          </div>
          <div class="info_container">
            <img v-if="darkMode" src="../assets/speedometer-dark.png" width="20">
            <img v-else src="../assets/speedometer.png" width="20">
            <p class="mt-1">{{ item.HorsePowerKW }} kW ( {{ psConverter(item.HorsePowerKW )}} PS)</p>
          </div>
          <div class="info_container">
            <img v-if="darkMode" src="../assets/road-dark.png" width="20">
            <img v-else src="../assets/road.png" width="20">
            <p class="mt-1">{{ numberDivider(item.Mileage) }} km</p>
          </div>
          <div class="info_container">
            <img v-if="darkMode" src="../assets/gas-station-dark.png" width="20">
            <img v-else src="../assets/gas-station.png" width="20">
            <p class="mt-1">{{ item.FuelType }}</p>
          </div>
          <div class="info_container">
            <img v-if="darkMode" src="../assets/calendar-dark.png" width="20">
            <img v-else src="../assets/calendar.png" width="20">
            <p class="mt-1">{{ dateDivider(item.FirstRegistrationDate) }}</p>
          </div>
          <div class="info_container">
            <img v-if="darkMode" src="../assets/drive-dark.png" width="20">
            <img v-else src="../assets/drive.png" width="20">
            <p class="mt-1">{{ dateDivider(item.NextInspectionDate) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    data: Array,
  },
  data () {
    return {
      darkMode: false,
    };
  },
  mounted() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.darkMode = event.matches ? true : false;
      console.log('darkMode', this.darkMode)
    });
  },
  methods: {
    carTitle(item) {
      return item.Make + ' ' + item.Model + ' ' + item.Submodel
    },
    psConverter(kw) {
      return Math.round(kw*1.36)
    },
    numberDivider(number){
      let number_st = number.toString();
      let newNumber = number_st.slice(0, -3) + '.' + number_st.slice(-3);
      return newNumber;
    },
    dateDivider(date){
      let newDate = date.slice(3);
      return newDate;
    }
  },
  // computed: {
    
  // }
};
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     const darkMode = true;
//     console.log('darkMode', darkMode);
// }
// else{
//   const darkMode = false;
//   console.log('darkMode', darkMode);
// }
// function setColorScheme(scheme) {
//   let darkMode = false;
//   switch(scheme){
//     case 'dark':
//       darkMode = true;
//       break;
//     case 'light':
//       darkMode = false;
//       break;
//   }
//   return darkMode;
// }

// function getPreferredColorScheme() {
//   if (window.matchMedia) {
//     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//       return 'dark';
//     } else {
//       return 'light';
//     }
//   }
//   return 'light';
// }

// if(window.matchMedia){
//   var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
//   colorSchemeQuery.addEventListener('change', setColorScheme(getPreferredColorScheme()));
// }
</script>

<style scoped>
.info_container {
  display: grid;
  grid-template-columns: 26px 1fr;
  align-items: center;
}
</style>
