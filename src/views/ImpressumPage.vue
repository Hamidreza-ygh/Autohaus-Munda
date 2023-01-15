<template>
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
  <div class="pageLayout" >
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-start text-gray-900 dark:text-white">Impressum</h2>
    <div class="mb-8">
      <h3 class="mb-4">Anbieter ist:</h3>
      <p class="text-primary">
        Autohaus M&A e.U.<br />
        Biberhaufenweg 19A<br />
        A-1220 Wien
      </p>
    </div>
    <div class="mb-8">
      <h3 class="">Handelsgericht Wien:</h3>
      <p class="text-primary">
        FN386521p
      </p>
    </div>
    <div class="flex flex-row gap-2 items-center dark:text-small-dark">
      <img class="w-5 h-5 dark:hidden" src="../assets/telephone.png" />
      <p class="hidden dark:block">Tel:</p>
      <a href="tel:+4366488716789">+43 (0) 664-8871 6789</a>
    </div>
    <div class="flex flex-row gap-2 items-center dark:text-small-dark">
      <img class="w-5 h-5 dark:hidden" src="../assets/fax.png" />
      <p class="hidden dark:block">Fax:</p>
      <a href="tel:+4319679557">+43 (0) 1 96 79 557</a>
    </div>
    <div class="flex flex-row gap-2 items-center dark:text-small-dark">
      <img class="w-5 h-5 dark:hidden" src="../assets/email.png" />
      <p class="hidden dark:block">E-mail:</p>
      <button @click.prevent="modalShow=true">info@munda.at</button>
    </div>
    <div class="my-8">
      <p class="text-primary">
        © Das Copyright für sämtliche Texte, Fotos und die Gestaltung liegt bei Autohaus M&A e.U. Alle Rechte vorbehalten.
      </p>
    </div>
  </div>
</template>

<script setup>

import Modal from '@/components/ModalComponent.vue';
import KontaktForm from '@/components/KontaktFormComponent.vue';

</script>
  
<script>
// import VueRecaptcha from 'vue-recaptcha';
export default {
    name: "ImpressumPage",
    props: [],
    created() {
      
    },
    data() {
      return {
        modalShow:false
      };
    },
    methods: {  
      closeModal() {
        this.modalShow = false;
      },    
    },
    components: {
    }
}
</script>
  