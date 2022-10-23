<template>
  <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
    <h2 class="accordion-header mb-0" id="flush-headingOne">
      <button class="accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        text-base text-gray-800 text-left font-medium
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
        aria-expanded="false" aria-controls="flush-collapseOne" @click.prevent="toggleCollapse">
        <div v-html="icon" class="h-6 w-6 mr-2" />
        {{title}}
        <ChevronDownIcon class="h-6 w-6 absolute right-0" :class="displayCollapse ? 'rotate-180': 'rotate-0'"></ChevronDownIcon>
      </button>
    </h2>
    <div v-if="displayCollapse" class="transition-all duration-1000">
      <div v-for="(item, index) in content" :key="index" class="flex justify-center md:py-4 md:px-48 py-2 px-5">
        <p class="basis-1/2 text-left mt-1 text-sm text-gray-800">{{item.title}} :</p>
        <p class="basis-1/2 text-left mt-1 text-sm text-gray-400">{{item.value}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ChevronDownIcon} from '@heroicons/vue/24/solid'
</script>

<script>
  export default {
    name: "AccordionComponent",
    data () {
      return {
        displayCollapse:this.show ? this.show : false,
      };
    },
    props: {
      title:String,
      content:Array,
      show:Boolean,
      icon:String
    },
    methods: {
      toggleCollapse () {
        this.displayCollapse = !this.displayCollapse
      }
    },
  };
</script>

<style scoped>

</style>
