<template>
  <VeeForm :validation-schema="contactSchema" @submit="sendEmail" class="space-y-8">
      <div>
        <label for="email" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">E-mail *</label>
        <vee-field type="text" name="emailAddress" id="emailAddress" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@email.com" />
        <ErrorMessage class="text-small-error" name="emailAddress" />
      </div>
      <div>
        <label for="name" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Ihr Name *</label>
        <vee-field type="text" name="name" id="name" autocomplete="given-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="z.B. Max Mustermann" />
        <ErrorMessage class="text-small-error" name="name" />
      </div>
      <div>
        <label for="phoneNumber" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-300">Ihre Telefonnummer (Optional)</label>
        <vee-field type="tel" name="phoneNumber" id="phoneNumber" autocomplete="given-phoneNumber" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="z.B. 0043 123 4567899" />
        <ErrorMessage class="text-small-error" name="phoneNumber" />
      </div>
      <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-gray-400">Nachricht</label>
          <vee-field as="textarea" :value="initialMessage" type="text" name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
      </div>
      <div id="recaptcha-main" class="g-recaptcha" data-sitekey="6Ld7ASAjAAAAAPauGCMiKEK9egntfm46N_nuh0Lw"></div>
      <div v-if="showAlert" class="block text-white text-center font-bold p-5 mb-4 rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" :class="alertSuccess ? 'bg-green-500' : 'bg-red-500'">
        {{ alertMessage }}
      </div>
      <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-900 sm:w-fit hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Senden</button>
  </VeeForm>
</template>

<script setup>
import { ErrorMessage } from 'vee-validate';
import emailjs from '@emailjs/browser';
// import { ref } from 'vue'

</script>
  
<script>
// import VueRecaptcha from 'vue-recaptcha';
export default {
    name: "KontaktFormComponent",
    props: ['initialMessage'],
    created() {
      setTimeout(() => {
          window.grecaptcha.render('recaptcha-main'); // 'recaptcha-main' is the id that was assigned to the widget
      }, 2000);
    },
    data() {
      return {
        contactSchema: {
          emailAddress: "required|min:3|max:100|email",
          name: "nameRequired",
          phoneNumber: {phoneNumber: /^[0-9]+$/},
        },
        // initialMessage: 'Guten Tag,\n\nich interessiere mich für Ihr Fahrzeug. Kontaktieren Sie mich bitte.\n\nMit freundlichen Grüßen',
        showAlert: false,
        alertSuccess:false,
        alertMessage: 'Ihre Nachricht wurde erfolgreich gesendet.',
        // refCaptcha: ref(),
      };
    },
    methods: {
      async sendEmail(values) {
        const token = window.grecaptcha.getResponse();
        values['subject'] = 'Kontakt';
        values['g-recaptcha-response'] = token;
        console.log(values);
        emailjs.send('contact_service','contact_template', values, 'WH7VjLlIWAm1Q3Aw_')
        .then( () => {
          this.showAlert = true;
          this.alertSuccess = true;
        })
        .catch( () => {
          this.showAlert = true;
          this.alertMessage = 'Bitte füllen Sie die Captcha-Überprüfung aus';
          this.alertSuccess = false;
        });

        this.showAlert = false;
        this.alertMessage = 'Ihre Nachricht wurde erfolgreich gesendet.';
        this.alertSuccess = false;
      },
      
    },
    components: { 
      ErrorMessage,
      // VueRecaptcha,
    }
}
</script>
  