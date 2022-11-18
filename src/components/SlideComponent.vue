<template>
  
<div  class="relative">
    <!-- Carousel wrapper -->
    <div class="relative h-[320px] overflow-hidden rounded-lg sm:h-[480px]">
         <!-- Items -->
        <div v-for="(item, index) in data" :key="index" class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" v-show="currentSlide === index" @mouseenter="stopSlideTimer" @mouseout="startSlideTimer">
            <img :src="item.imageSrc" class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <!-- <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 ">
      <button type="button"  v-for="(item, index) in data.length" :key="index" class="w-3 h-3 rounded-full bg-sky-600" :class="currentSlide === index ? 'opacity-100' : 'opacity-50'" @click.prevent="setCurrentSlide(index)"></button>
    </div> -->
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click.prevent="prev">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-sky-300/60 dark:bg-sky-600/60 group-hover:bg-sky-500/50 dark:group-hover:bg-sky-800 group-focus:ring-2 group-focus:ring-sky dark:group-focus:ring-sky-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click.prevent="next">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-sky-300/60 dark:bg-sky-600/60 group-hover:bg-sky-500/50 dark:group-hover:bg-sky-800 group-focus:ring-2 group-focus:ring-sky dark:group-focus:ring-sky-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

</template>

<script>
export default {
  name: "SlideComponent",
  props: {
    data: Array,
    index: Number,
  },
  watch: {
    index() {
      this.setCurrentSlide(this.index);
    }
  },
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
    };
  },
  methods: {
    setCurrentSlide(index){
       this.currentSlide = index;
    },
    _next(){
      const index = this.currentSlide < this.data.length -1 ? this.currentSlide +1 : 0;
      this.setCurrentSlide(index);
    },
    next(){
      this._next();
      this.startSlideTimer();
    },
    prev(){
      const index = this.currentSlide > 0 ? this.currentSlide -1 : this.data.length -1;
      this.setCurrentSlide(index);
      this.startSlideTimer();
    },
    startSlideTimer(){
      this.stopSlideTimer();
      this.slideInterval = setInterval( () => {
        this._next();
      }, 5000)
    },
    stopSlideTimer(){
      clearInterval(this.slideInterval);
    },
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  }
};
</script>

<style scoped>

</style>
