<template>
  <div class="bg-white dark:bg-gray-900">
   <FormComponent></FormComponent>
   <CardComponent :data="products"></CardComponent>
  </div>
</template>

<script setup>
import img1 from '/Users/hamidreza/Projects/Munda-Vue-static/munda/src/assets/image.jpg'
const products = [
  {
    CarID: 1,
    name: 'Land Rover Range Rover Sport',
    href: '1022',
    Image1: [{imageSrc: img1,}],
    imageAlt: "",
    PriceSelling: 59900,
    color: 'Red',
  },
  
  // More products...
]
</script>


<script>
  import FormComponent from '@/components/FormComponent.vue';
  import CardComponent from '@/components/CardComponent.vue';
  export default {
    name: 'RequestPage',
    components: { FormComponent, CardComponent },
    props: [],
    emits: [],
    methods: {
    },
  }
</script>