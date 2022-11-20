<template>
  <section class="bg-white dark:bg-gray-900 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 sm:px-10 lg:grid-cols-2 lg:px-20 xl:gap-x-8">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" >
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-start text-gray-900 dark:text-white">Lageplan</h2>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe height="600" class="w-full" id="gmap_canvas" src="https://maps.google.com/maps?q=Biberhaufenweg%2019A,%201220%20Wien&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <a href="https://123movies-a.com"></a><br>
         
          <a href="https://www.embedgooglemap.net"></a>
          
        </div>
      </div>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
    </div>
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md order-first md:order-last">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Kontakt</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Mit diesem Formular können Sie mit uns Kontakt aufnehmen</p>
        <VeeForm :validation-schema="contactSchema" @submit="sendEmail" class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
              <vee-field type="text" name="emailAddress" id="emailAddress" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="info@munda-autohaus.com" />
              <ErrorMessage class="text-small-error" name="emailAddress" />
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Betreff</label>
                <vee-field type="text" name="subject"  id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" />
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Nachricht</label>
                <vee-field as="textarea" type="text" name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." />
            </div>
            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-900 sm:w-fit hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Senden</button>
        </VeeForm>
    </div>
  </section>
</template>

<script setup>
import { ErrorMessage } from 'vee-validate';
import emailjs from '@emailjs/browser';

</script>
  
<script>
export default {
    name: "KontaktPage",
    props: [],
    emits: [],
    data() {
      return {
        contactSchema: {
          emailAddress: "required|min:3|max:100|email",
        },
      };
    },
    methods: {
      sendEmail(values) {
        console.log(values);
        emailjs.send('contact_service','contact_template', values, 'WH7VjLlIWAm1Q3Aw_')
      },
    },
    components: { ErrorMessage }
}
</script>
  