<template>
  <div class="min-h-full">
    <app-navbar />
    <main class="dark:bg-gray-900">
      <Suspense>
        <!-- component with nested async dependencies -->
        <template #default>
          <router-view/>
          <!-- <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <router-view/>
          </div> -->
        </template>
        <!-- loading state via #fallback slot -->
        <template #fallback>
          Loading...
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
  import CarService from '@/services/CarService';
  export default {
    props: [],
    emits: [],
    data() {
        return {};
    },
    created() {
      CarService.getCars()
        .then((response) => {
          this.$store.state.cars = response.data.Cars;
          response.data.Cars.forEach(i => {
            let innerMap = {};
            innerMap['imageSrc'] = i['Image1'];
            i['Image1'] = [];
            i['Image1'].push(innerMap);
          });
          this.$store.state.carsObject = response.data.Cars.reduce(function (r, a) {
            r[a.CarID] = r[a.CarID] || [];
            r[a.CarID].push(a);
            return r;
          }, Object.create(null));
          console.log(response.data.Cars);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {},
    components: {  AppFooter, AppNavbar}
  }
</script>

<style>

</style>
