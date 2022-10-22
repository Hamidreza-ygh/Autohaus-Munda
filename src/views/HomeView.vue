<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> -->
      <SlideComponentVue :data="slideData" class="mb-20"></SlideComponentVue>
      <!-- <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 sm:px-10 lg:grid-cols-1 lg:px-20 xl:gap-x-8">
        <SlideComponentVue :data="cars" class="mb-20"></SlideComponentVue>
      </div> -->
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
        <CardComponent :data="pageOfItems"></CardComponent>
      </div>
      <!-- <div class="grid grid-cols-1 py-10 gap-x-6 sm:grid-cols-1 sm:px-10 sm:py-10 lg:grid-cols-1 lg:px-20 lg:py-10 xl:gap-x-8">
        
      </div> -->
    </div>
    <PaginationComponent class="" v-if="cars" :pageSize="12" :items="cars" @changePage="onChangePage"></PaginationComponent>
  </div>
</template>

<script setup>

// const products = [
//   {
//     id: 1,
//     name: 'Land Rover Range Rover Sport',
//     href: '1022',
//     imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/dd04486f-ec5a-4b37-8edb-f6b0d7636430_f8202e46-2429-43d4-98a0-f630e6df92a4.jpg/480x360.webp',
//     imageAlt: "",
//     price: '€59900',
//     color: 'Red',
//   },
//   {
//     id: 2,
//     name: 'Land Rover Range Rover Sport',
//     href: '1022',
//     imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/5c835e08-2e61-41ef-b06e-e82b2b4d56c6_f4947bbe-cae3-4092-81a4-3d88a048e386.jpg/720x540.webp',
//     imageAlt: "",
//     price: '€59900',
//     color: 'Red',
//   },
//   {
//     id: 3,
//     name: 'Land Rover Range Rover Sport',
//     href: '1022',
//     imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/dd04486f-ec5a-4b37-8edb-f6b0d7636430_f8202e46-2429-43d4-98a0-f630e6df92a4.jpg/480x360.webp',
//     imageAlt: "",
//     price: '€59900',
//     color: 'Red',
//   },
//   {
//     id: 4,
//     name: 'Land Rover Range Rover Sport',
//     href: '1022',
//     imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/dd04486f-ec5a-4b37-8edb-f6b0d7636430_f8202e46-2429-43d4-98a0-f630e6df92a4.jpg/480x360.webp',
//     imageAlt: "",
//     price: '€59900',
//     color: 'Red',
//   },
//   {
//     id: 5,
//     name: 'Land Rover Range Rover Sport',
//     href: '1022',
//     imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/dd04486f-ec5a-4b37-8edb-f6b0d7636430_f8202e46-2429-43d4-98a0-f630e6df92a4.jpg/480x360.webp',
//     imageAlt: "",
//     price: '€59900',
//     color: 'Red',
//   },
//   // More products...
// ]
</script>
  
<script>
  import PaginationComponent from '@/components/PaginationComponent.vue';
  import SlideComponentVue from '@/components/SlideComponent.vue';
  import CardComponent from '@/components/CardComponent.vue';
  import { mapState } from 'vuex';
  // import CarService from '@/services/CarService';
  export default {
    name: "HomePage",
    props: [],
    emits: [],
    data() {
        return {
          pageOfItems: [],
          slideData: null,
        };
    },
    beforeUpdate () {
      this.slideData = this.cars.map(value => value.Image1[0]);
    },
    methods: {
      onChangePage(pageOfItems) {
        // update page of items
        this.pageOfItems = pageOfItems;
      },
    },
    computed:{
      ...mapState({
        cars: 'cars',
      }),
    },
    components: { CardComponent, SlideComponentVue, PaginationComponent}
  }
</script>
  