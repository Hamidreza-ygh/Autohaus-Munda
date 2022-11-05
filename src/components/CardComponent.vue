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
      <div class="flex flex-row gap-x-8 justify-between">
        <h3 class="order-first basis-3/4 self-start text-sm text-gray-700 h-16 dark:text-small-dark">
          <router-link :to="{ name: 'carDetails', params: {carId: item.CarID} }">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ carTitle(item) }}
          </router-link>
        </h3>
        <div class="bg-red-600 px-1 h-[28px] basis-1/4 text-center rounded-md">
          <p class="text-sm lg:text-base font-bold text-white">€ {{ priceShowing(item.PriceSelling) }}</p>
        </div>
      </div>
      <div class="flex flex-col justify-start">
        <div class="grid grid-cols-2 gap-x-32 sm:gap-x-16 md:gap-x-32 text-sm text-gray-500 dark:text-small-dark">
          <p class="mt-1">{{ item.GearType }}</p>
          <p class="mt-1">{{ item.HorsePowerKW }} kW ( {{ psConverter(item.HorsePowerKW )}} PS)</p>
          <p class="mt-1">{{ item.Mileage }} km</p>
          <p class="mt-1">{{ item.FuelType }}</p>
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
  methods: {
    carTitle(item) {
      return item.Make + ' ' + item.Model + ' ' + item.Submodel
    },
    psConverter(kw) {
      return Math.round(kw*1.36)
    },
    priceShowing(price){
      let price_st = price.toString();
      let newPrice = price_st.slice(0, -3) + '.' + price_st.slice(-3);
      return newPrice;
    }
  },
  // computed: {
    
  // }
};
</script>

<style scoped>

</style>
