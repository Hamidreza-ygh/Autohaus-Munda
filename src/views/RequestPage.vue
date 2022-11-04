<template>
  <div class="bg-white dark:bg-gray-900">
   <FormComponent></FormComponent>
  </div>
</template>

<script>
  import FormComponent from '@/components/FormComponent.vue';
  export default {
    name: 'RequestPage',
    components: { FormComponent, },
    props: [],
    emits: [],
    methods: {
    },
  }
</script>