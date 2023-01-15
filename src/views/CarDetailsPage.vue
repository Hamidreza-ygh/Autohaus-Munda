<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <Loading v-if="showLoading"></Loading>
  <Modal @close="closeModal" :show="modalShow" :maxWidth="'4xl'">
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div @click="closeModal" class="absolute right-[15px] top-[15px] cursor-pointer">
              <img src="../assets/xmark.png" class="w-[24px] h-[24px]">
          </div>
          <h3 class="text-lg font-bold flex justify-center mt-[15px]">
            Kontakt
          </h3>
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md order-first md:order-last">
              <KontaktForm></KontaktForm>
          </div>
      </div>
  </Modal>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <router-link :to="{ name: breadcrumb.routerName }" class="mr-2 text-base font-medium text-gray-900 dark:text-gray-400">{{ breadcrumb.name }}</router-link>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-base">
            <router-link :to="{ name: 'carDetails', params: {carId: carId} }" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{ fullName }}</router-link>
          </li>
        </ol>
      </nav>
      <!-- Product info -->
      <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-20">
        <!-- Image gallery -->
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <SlideComponent :data="car.images" :index="currentIndex" class="bg-gray-50 rounded-md" ></SlideComponent>
          <div class="mt-2 bg-gray-50 overflow-x-auto items-center">
            <div class="items-center flex flex-nowrap slider ease-out duration-500">
              <div v-for="(item, index) in car.images" :key="index" @click="changeSlide(index)" class="aspect-w-3 aspect-h-2 flex-none w-32 rounded-lg cursor-pointer p-2">
                <img :src="item.imageSrc" :alt="item.alt" class=" object-contain object-center" />
              </div>
            </div>
          </div>
        </div>
        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0 flex flex-col divide-y content-center">
          <div class="flex justify-between pb-5">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ fullName }}</h1>
          </div>
          <div class="flex justify-between py-5">
            <p class="text-3xl tracking-tight text-gray-900">€ {{ priceShowing(car.PriceSelling) }}</p>
          </div>
          <div>
            <a class="flex justify-between py-10" href="https://durchblicker.at/autokredit?utm_source=as24&utm_medium=cpc&utm_campaign=tlbkredit1&value=11900">
              <p>Autokredit vergleichen</p>
              <p>DurchBlicker</p>
            </a>
          </div>
          <div>
            <a class="flex justify-between py-10" href="https://shop.ergo-versicherung.at/kfz?aid=D544&utm_source=autoscout&utm_medium=partnerlink&utm_content=kfz&utm_campaign=D544-autoscout#/shop/auto/rechner/fahrzeug">
              <p>Versicherung berechnen</p>
              <p>Ergo</p>
            </a>
          </div>
          <div class="flex justify-between py-10 hidden lg:inline-block">
            <div class="p-0.5 w-full">
              <button type="button" @click="modalShow=true" class="w-full inline-block px-3 py-2 rounded-md text-sm font-medium bg-sky-700 text-white leading-tight uppercase shadow-md hover:bg-sky-900 hover:shadow-lg focus:bg-sky-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out">
                E-Mail senden
                <!-- <a href="mailto:info@autohaus-munda.at">E-Mail senden</a> -->
              </button>
            </div>
            <div class="p-0.5 w-full">
              <button type="button" class="w-full inline-block px-3 py-2 rounded-md text-sm font-medium bg-sky-700 text-white leading-tight uppercase shadow-md hover:bg-sky-900 hover:shadow-lg focus:bg-sky-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out">
                <a href="tel:+4366488716789">+43 (0) 664-8871 6789</a>
              </button>
            </div>
          </div>
          <!-- Image gallery -->
          <!-- <div v-if="car" class="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4 py-40 lg:gap-4 lg:py-40 hidden md:grid">
            <img v-for="(item, index) in sliced(car.images)" :key="index" :src="item.imageSrc" :alt="item.alt" class="h-full w-full object-cover object-center rounded-lg bg-gray-100" />
          </div> -->
        </div>
        <!-- Description and details -->
        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          <div class="mt-5">
            <AccordionComponent v-for="(title,index) in mainTitle" :key="index" :title="title.title" :content="title.content" :show="title.show" :icon="title.icon"></AccordionComponent>
          </div>
          <div class="flex flex-col justify-between py-10 lg:hidden">
            <div class="p-0.5 w-full">
              <button type="button" class="w-full inline-block px-3 py-2 rounded-md text-sm font-medium bg-sky-700 text-white leading-tight uppercase shadow-md hover:bg-sky-900 hover:shadow-lg focus:bg-sky-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out">
                <a href="mailto:info@autohaus-munda.at">E-Mail senden</a>
              </button>
            </div>
            <div class="p-0.5 w-full">
              <button type="button" class="w-full inline-block px-3 py-2 rounded-md text-sm font-medium bg-sky-700 text-white leading-tight uppercase shadow-md hover:bg-sky-900 hover:shadow-lg focus:bg-sky-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out">
                <a href="tel:+4366488716789">+43 (0) 664-8871 6789</a>
              </button>
            </div>
          </div>
          <!-- <div>
            <h3 class="sr-only">Description</h3>
            <div class="space-y-6">
              <div v-html="car.Notes"></div>
            </div>
          </div> -->
          <!-- <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="highlight in product.highlights" :key="highlight" class="text-gray-400">
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div> -->

          <!-- <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
      </div>
    </div>
    <!-- Information in details -->
    <!-- <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div v-if="car" class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img v-for="(item, index) in sliced(car.images)" :key="index" :src="item.imageSrc" :alt="item.alt" class="h-full w-full object-cover object-center rounded-lg bg-gray-100" />
      </div>
    </div> -->
  </div>
</template>

<script setup>
import SlideComponent from '@/components/SlideComponent.vue';
import AccordionComponent from '@/components/AccordionComponent.vue';
import Modal from '@/components/ModalComponent.vue';
import Loading from "@/components/LoadingComponent.vue";

// import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
// const features = [
//   { name: 'Finanzierung', description: 'Autokredit vergleichen' },
//   { name: 'Basisdaten', description: 'Karosserieform: Limousine' },
//   { name: 'Fahrzeughistorie', description: 'Kilometerstand: 69 715 km' },
//   { name: 'Technische Daten', description: 'Leistung: 335 kW (455 PS)' },
//   { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
//   { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
// ]
let product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Fahrzeuge', routerName: 'home' },
  ],
  images: [
    {
      imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/6e83759f-28e0-4fd7-a59f-dd20ceeaddc1_79fff811-bdc5-40bc-9da0-4494e1aa0387.jpg/720x540.webp',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/6e83759f-28e0-4fd7-a59f-dd20ceeaddc1_9b28de1e-8498-4868-a5a7-cd30c8dc3ea6.jpg/720x540.webp',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/6e83759f-28e0-4fd7-a59f-dd20ceeaddc1_5a8fba52-11f9-471b-9d87-b31433876646.jpg/720x540.webp',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/6e83759f-28e0-4fd7-a59f-dd20ceeaddc1_849b3fa2-f5aa-46db-a303-d46c63fb96f8.jpg/720x540.webp',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/6e83759f-28e0-4fd7-a59f-dd20ceeaddc1_d6b21f8c-32b2-40e9-bf3d-5373e3f45f28.jpg/720x540.webp',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      imageSrc: 'https://prod.pictures.autoscout24.net/listing-images/6e83759f-28e0-4fd7-a59f-dd20ceeaddc1_37c471b0-2195-433a-8ed4-1c8f648797c3.jpg/720x540.webp',
      alt: 'Model wearing plain black basic tee.',
    },
    
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
// let mainTitle = [
//   {title:'Basisdaten', show:true, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" /><path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" /><path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" /><path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" /></svg>'},
//   {title:'Fahrzeughistorie', show:false, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clip-rule="evenodd" /><path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clip-rule="evenodd" /></svg>'},
//   {title:'Technische Daten', show:false, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd" /> </svg>'},
//   {title:'Energieverbrauch', show:true, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" /></svg>'},
//   {title:'Ausstattung', show:false, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" /></svg>'},
//   {title:'Farbe und Innenausstattung', show:true, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clip-rule="evenodd" /></svg>'},
//   {title:'Fahrzeugbeschreibung', show:false, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" /></svg>'},
//   {title:'Preisbewertung', show:false, icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" /><path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd" /><path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" /></svg>'},
// ];
</script>

<script>
  import CarService from '@/services/CarService';
  import KontaktForm from '@/components/KontaktFormComponent.vue';

  export default {
    name: "CarDetailsPage",
    data() {
        return {
          car: {
              type: Object
          },
          modalShow: false,
          currentIndex: 0,
          mainTitle: [
              { title: "Basisdaten", show: true, icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path d=\"M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z\" /><path d=\"M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z\" /><path d=\"M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z\" /><path d=\"M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z\" /></svg>" },
              { title: "Fahrzeughistorie", show: false, icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z\" clip-rule=\"evenodd\" /><path fill-rule=\"evenodd\" d=\"M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z\" clip-rule=\"evenodd\" /></svg>" },
              { title: "Technische Daten", show: false, icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"> <path fill-rule=\"evenodd\" d=\"M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z\" clip-rule=\"evenodd\" /> </svg>" },
              { title: "Energieverbrauch", show: true, icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z\" clip-rule=\"evenodd\" /></svg>" },
              { title: "Ausstattung", show: false, icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z\" clip-rule=\"evenodd\" /></svg>" },
              { title: "Farbe und Innenausstattung", show: true, icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z\" clip-rule=\"evenodd\" /></svg>" },
              { title: "Fahrzeugbeschreibung", show: false, icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path d=\"M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z\" /></svg>" },
              { title: "Preisbewertung", show: false, icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path d=\"M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z\" /><path fill-rule=\"evenodd\" d=\"M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z\" clip-rule=\"evenodd\" /><path d=\"M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z\" /></svg>" },
          ],
          showLoading: false,
        };
    },
    props: ["carId"],
    emits: [],
    setup() {
      // this.car = this.$store.state.carsObject[this.carId][0];
    },
    created() {
        // console.log(this.$store.state.carsObject)
        // this.car = this.$store.state.carsObject[this.carId][0];
        // const getImages = async () => {
        //   try {
        //     const res = await CarService.getDetailCars(this.carId);
        //     console.log('resIst', res);
        //   } catch (error) {
        //     console.log(error);
        //   }
        // };
        // getImages();
        this.showLoading = true;
        CarService.getDetailCars(this.carId)
        .then((response) => {
            this.car = response;
            this.showLoading = false;
          // let outList = [];
          // response.data.Cars[0].Images.forEach(i => {
          //     let innerMap = {};
          //     innerMap["imageSrc"] = i;
          //     outList.push(innerMap);
          // });
          // this.car["images"] = outList;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    beforeMount () {
      let content = [
        [
            {
                title: "Karosserieform",
                value: this.car.BodyType
            },
            {
                title: "Zustand",
                value: this.car.CarType
            },
            {
                title: "Antriebsart",
                value: this.car.DrivetrainName
            },
            {
                title: "Sitzplätze",
                value: this.car.Seats
            },
            {
                title: "Türen",
                value: this.car.Doors
            },
            {
                title: "Garantie",
                value: "Known"
            },
        ],
        [
            {
                title: "Kilometerstand",
                value: this.car.Mileage + " km"
            },
            {
                title: "Erstzulassung",
                value: this.dateDivider(this.car.FirstRegistrationDate)
            },
            {
                title: "Pickerl bis",
                value: this.dateDivider(this.car.NextInspectionDate)
            },
            {
                title: "Scheckheftgepflegt",
                value: this.car.ServicebookAvailable
            },
        ],
        [
            {
                title: "Leistung",
                value: this.car.HorsePowerKW + " kW"
            },
            {
                title: "Getriebe",
                value: this.car.GearType
            },
            {
                title: "Gänge",
                value: "Known"
            },
        ],
        [
            {
                title: "Kraftstoff",
                value: this.car.FuelType
            },
            {
                title: "Kraftstoffverbrauch",
                value: this.car.AvgerageConsumption + " 1/100 km(komb.)"
            },
        ],
        [],
        [
            {
                title: "Außenfarbe",
                value: this.car.CarColor
            },
            {
                title: "Farbe der Innenausstattung",
                value: this.car.InteriorColor
            },
            {
                title: "Innenausstattung",
                value: this.car.Upholstery
            },
        ],
        [
            {
                title: "description",
                value: this.car.Notes
            },
        ],
        [],
      ];
      console.log("2", this.mainTitle);
      this.mainTitle.forEach((el, i) => {
          el["content"] = content[i];
      });
    },
    methods: {
        changeSlide(index) {
            this.currentIndex = index;
        },
        sliced(images) {
            if (images) {
                return images.slice(images.length - 4, images.length);
            }
        },
        priceShowing(price) {
            let price_st = price?.toString();
            let newPrice = price_st ? price_st?.slice(0, -3) + "." + price_st?.slice(-3) : '';
            return newPrice;
        },
        dateDivider(date) {
            let newDate = date ? date.slice(3): '';
            return newDate;
        },
        closeModal() {
            this.modalShow = false;
        },
    },
    computed: {
        fullName() {
            return this.car.Make + " " + this.car.Model + " " + this.car.Submodel;
        }
    },
    components: { KontaktForm }
}
</script>