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
// import img1 from '/Users/hamidreza/Projects/Munda-Vue-static/munda/src/assets/download.jpeg'
// const products = [
//   {
//     CarID: 1,
//     name: 'Land Rover Range Rover Sport',
//     href: '1022',
//     Image1: [{imageSrc: img1,}],
//     imageAlt: "",
//     PriceSelling: 59900,
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
  