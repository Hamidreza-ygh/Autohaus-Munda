<template>
  <VeeForm @submit="showFilter = !showFilter" class="space-y-8">
    <div class="p-4" :class="showFilter ? 'block':'hidden md:block'">
      <div class="mb-4">
        <label for="marke" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Marke</label>
        <vee-field as="select" id="brand" name="brand" v-model="formData.brand" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
          <option value="Alle" disabled>Wählen Hersteller</option>
          <option v-for="(item, index) in brands" :key="index" :value="item"> {{item}} </option>
        </vee-field>
        <ErrorMessage class="text-small-error" name="emailAddress" />
      </div>
      <div class="mb-4">
        <label for="marke" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Modell</label>
        <vee-field as="select" :disabled="formData.brand === 'Alle'" id="model" name="model" v-model="formData.model" class="shadow-sm bg-gray-50 disabled:opacity-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
          <option value="Alle" disabled>Wählen Modell</option>
          <option v-for="(item, index) in models" :key="index" :value="item"> {{item}} </option>
        </vee-field>
        <ErrorMessage class="text-small-error" name="emailAddress" />
      </div>
      <p class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Kilometerstand</p>
      <div class="mb-4 flex gap-2 items-end">
        <div class="basis-1/2">
          <label for="minKm" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300 hidden">Kilometerstand</label>
          <vee-field as="select" id="minKm" name="minKm" v-model="formData.minKm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
            <option value="Alle" >Von</option>
            <option v-for="(item, index) in kmStand" :key="index" :value="item.value"> {{item.title}} </option>
          </vee-field>
          <ErrorMessage class="text-small-error" name="emailAddress" />
        </div>
        <div class="basis-1/2">
          <label for="maxKm" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300 hidden">Kilometerstand</label>
          <vee-field as="select" id="maxKm" name="maxKm" v-model="formData.maxKm" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="VOn">
            <option value="Alle" >Bis</option>
            <option v-for="(item, index) in kmStand" :key="index" :value="item.value"> {{item.title}} </option>
          </vee-field>
          <ErrorMessage class="text-small-error" name="emailAddress" />
        </div>
      </div>
      <p class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Erstzulassung</p>
      <div class="mb-4 flex gap-2 items-end">
        <div class="basis-1/2">
          <label for="minAge" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300 hidden">Erstzulassung</label>
          <vee-field as="select" id="minAge" name="minAge" v-model="formData.minAge" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
            <option value="Alle" >Von</option>
            <option v-for="(item, index) in age" :key="index" :value="item"> {{item}} </option>
          </vee-field>
          <ErrorMessage class="text-small-error" name="emailAddress" />
        </div>
        <div class="basis-1/2">
          <label for="maxAge" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300 hidden">Erstzulassung</label>
          <vee-field as="select" id="maxAge" name="maxAge" v-model="formData.maxAge" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="VOn">
            <option value="Alle" >Bis</option>
            <option v-for="(item, index) in age" :key="index" :value="item"> {{item}} </option>
          </vee-field>
          <ErrorMessage class="text-small-error" name="emailAddress" />
        </div>
      </div>
      <p class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Preis</p>
      <div class="mb-4 flex gap-2 items-end">
        <div class="basis-1/2">
          <label for="minPrice" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300 hidden">Preis</label>
          <vee-field as="select" id="minPrice" name="minPrice" v-model="formData.minPrice" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
            <option value="Alle">Von</option>
            <option v-for="(item, index) in price" :key="index" :value="item.value"> {{item.title}} </option>
          </vee-field>
          <ErrorMessage class="text-small-error" name="emailAddress" />
        </div>
        <div class="basis-1/2">
          <label for="maxPrice" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300 hidden">Preis</label>
          <vee-field as="select" id="maxPrice" name="maxPrice" v-model="formData.maxPrice" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="VOn">
            <option value="Alle">Bis</option>
            <option v-for="(item, index) in price" :key="index" :value="item.value"> {{item.title}} </option>
          </vee-field>
          <ErrorMessage class="text-small-error" name="emailAddress" />
        </div>
      </div>
    </div> 
    <button type="submit" class="md:hidden w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-900 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Filtern</button>
  </VeeForm>
</template>

<script setup>
import { ErrorMessage } from 'vee-validate';


</script>
  
<script>
const age = [...Array(2024).keys()].splice(1990).reverse();

export default {
    name: "FilterFormComponent",
    emit:['filteredData'],
    props: ['cars'],
    created() {
      // let model =[];
      // this.$store.state.cars.forEach( el=>{
      //   model.push(el.Model)
      // })
    },
    data() {
      return {
        formData: {
          brand: 'Alle',
          model: 'Alle',
          minKm: 'Alle',
          maxKm: 'Alle',
          minAge: 'Alle',
          maxAge: 'Alle',
          minPrice: 'Alle',
          maxPrice: 'Alle',
        },
        brands: ['Alle'],
        kmStand: [
          // {title: 'Alle', value:'Alle'},
          {title: '2.500 km', value:2500},
          {title: '5.000 km', value:5000},
          {title: '10.000 km', value:10000},
          {title: '15.000 km', value:15000},
          {title: '20.000 km', value:20000},
          {title: '25.000 km', value:25000},
          {title: '30.000 km', value:30000},
          {title: '35.000 km', value:35000},
          {title: '40.000 km', value:40000},
          {title: '45.000 km', value:45000},
          {title: '50.000 km', value:50000},
          {title: '60.000 km', value:60000},
          {title: '70.000 km', value:70000},
          {title: '80.000 km', value:80000},
          {title: '90.000 km', value:90000},
          {title: '100.000 km', value:100000},
          {title: '110.000 km', value:110000},
          {title: '120.000 km', value:120000},
          {title: '130.000 km', value:130000},
          {title: '140.000 km', value:140000},
          {title: '150.000 km', value:150000},
          {title: '175.000 km', value:175000},
          {title: '200.000 km', value:200000},
        ],
        filterKeys: ['Make', 'Model', 'Mileage', 'Mileage', 'FirstRegistrationDate', 'FirstRegistrationDate', 'PriceSelling', 'PriceSelling'],
        price: [
          // {title: 'Alle', value:'Alle'},
          {title: '500 €', value:2500},
          {title: '1.000 km', value:1000},
          {title: '1.500 km', value:1500},
          {title: '2.000 km', value:2000},
          {title: '2.500 km', value:2500},
          {title: '3.000 km', value:3000},
          {title: '4.000 km', value:4000},
          {title: '5.000 km', value:5000},
          {title: '6.000 km', value:6000},
          {title: '7.000 km', value:7000},
          {title: '8.000 km', value:8000},
          {title: '9.000 km', value:9000},
          {title: '10.000 km', value:10000},
          {title: '12.500 km', value:12500},
          {title: '15.000 km', value:15000},
          {title: '17.500 km', value:17500},
          {title: '20.000 km', value:20000},
          {title: '25.000 km', value:25000},
          {title: '30.000 km', value:30000},
          {title: '40.000 km', value:40000},
          {title: '50.000 km', value:50000},
          {title: '75.000 km', value:75000},
          {title: '100.000 km', value:100000},
        ],
        models:['Alle'],
        age:age,
        h: window.innerHeight, 
        w: window.innerWidth,
        showFilter: window.innerWidth <= 768 ? false : true,
        showFilterBt: window.innerWidth <= 768 ? true : false,
      };
    },
    watch: {
      formData: {
        handler() {
          this.applyFilter();
        },
        deep: true
      }
    },
    beforeMount() {
      
    },
    mounted() {      
      this.$watch('$store.state.cars', (newCars)=>{
        if(newCars){
          newCars.forEach( el=>{
            if (!(this.brands.includes(el.Make)))
              this.brands.push(el.Make);
          })
        }
      });
      this.$watch('formData.brand', ()=>{
        this.formData.model='Alle';
      });
      // Object.observe(this.formData, this.applyFilter());
    },
    methods: {
      applyFilter() {
        const keys = Object.keys(this.formData);
        let filteredData = [];
        keys.forEach((key, index) => {
          switch(key){
            case 'brand':
              filteredData = this.formData[key] !== 'Alle' ? this.$store.state.cars.filter( (el)=> el[this.filterKeys[index]]===this.formData[key]): filteredData;
              this.models=['Alle'];
              filteredData?.forEach(el=>{
                if (!(this.models.includes(el.Model)))
                this.models.push(el.Model);
              });
              // if (this.formData[key] === 'Alle')
              //   this.formData['model'] = 'Alle';
            break
            case 'minKm':
              filteredData = this.formData[key] !== 'Alle' ? this.$store.state.cars.filter( (el)=> el[this.filterKeys[index]] >= this.formData[key]): filteredData;
            break
            case 'maxKm':
              filteredData = this.formData[key] !== 'Alle' ? this.$store.state.cars.filter( (el)=> el[this.filterKeys[index]] <= this.formData[key]): filteredData;
            break
            case 'minAge':
              filteredData = this.formData[key] !== 'Alle' ? this.$store.state.cars.filter( (el)=> this.dateDivider(el[this.filterKeys[index]]) >= this.formData[key]): filteredData;
            break
            case 'maxAge':
              filteredData = this.formData[key] !== 'Alle' ? this.$store.state.cars.filter( (el)=> this.dateDivider(el[this.filterKeys[index]]) <= this.formData[key]): filteredData;
            break
            case 'minPrice':
              filteredData = this.formData[key] !== 'Alle' ? this.$store.state.cars.filter( (el)=> el[this.filterKeys[index]] >= this.formData[key]): filteredData;
            break
            case 'maxPrice':
              filteredData = this.formData[key] !== 'Alle' ? this.$store.state.cars.filter( (el)=> el[this.filterKeys[index]] <= this.formData[key]): filteredData;
            break
            default:
              filteredData = this.formData[key] !== 'Alle' ? this.$store.state.cars.filter( (el)=> el[this.filterKeys[index]]===this.formData[key]): filteredData;
          }
        });
        this.$emit('filteredData', filteredData);
        window.scrollTo({ top: 450, behavior: 'smooth' });

      },
      dateDivider(date){
        let newDate = date.slice(6);
        return Number(newDate);
      }
      
      
    },
    components: { 
      ErrorMessage,
      // VueRecaptcha,
    }
}
</script>
  