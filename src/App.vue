<template>
  <div class="min-h-full">
    <app-navbar />
    <main class="dark:bg-gray-900">
      <!-- <Loading v-if="showLoading"></Loading> -->
      <Suspense>
        <!-- component with nested async dependencies -->
        <template #default>
          <!-- <Loading v-if="showLoading"></Loading> -->
          <router-view/>
          <!-- <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <router-view/>
          </div> -->
        </template>
        <!-- loading state via #fallback slot -->
        <template #fallback>
          <!-- <Loading v-if="showLoading"></Loading> -->
        </template>
      </Suspense>
    </main>
    <app-footer />
  </div>
</template>

<script>
  import AppNavbar from "./components/TheNavbar.vue";
  import AppFooter from "./components/TheFooter.vue"
  // import Loading from "./components/LoadingComponent.vue";
  // import CarService from '@/services/CarService';
  export default {
    props: [],
    emits: [],
    data() {
        return {
          // showLoading: false,
        };
    },
    
    methods: {},
    components: {  AppFooter, AppNavbar,}
  }
</script>

<style>

</style>
