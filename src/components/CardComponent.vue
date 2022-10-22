<template>
  <div v-for="item in data" :key="item.CarID" class="group relative">
    <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none">
      <img :src="item.Image1[0].imageSrc" alt="" class="h-full w-full object-contain object-center lg:h-full lg:w-full" />
    </div>
    <div class="mt-4 flex justify-between">
      <div class="basis-3/4">
        <h3 class="text-sm text-gray-700">
          <router-link :to="{ name: 'carDetails', params: {carId: item.CarID} }">
            <span aria-hidden="true" class="absolute inset-0" />
            {{ carTitle(item) }}
          </router-link>
        </h3>
        <div class="grid grid-cols-2">
          <p class="mt-1 text-sm text-gray-500">{{ item.GearType }}</p>
          <p class="mt-1 text-sm text-gray-500">{{ item.HorsePowerKW }} kW ( {{ psConverter(item.HorsePowerKW )}} PS)</p>
          <p class="mt-1 text-sm text-gray-500">{{ item.Mileage }} km</p>
          <p class="mt-1 text-sm text-gray-500">{{ item.FuelType }}</p>
        </div>
      </div>
      <div class="basis-1/4 flex justify-end">
        <p class="text-sm font-medium text-gray-900">€ {{ item.PriceSelling }}</p>
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
  },
};
</script>

<style scoped>

</style>
