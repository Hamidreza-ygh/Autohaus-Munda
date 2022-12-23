
<template>
  <div>
    
    <VeeForm ref="autoForm" @submit="sendRequest" :validation-schema="carSchema">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Auto Informationen</h3>
            <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
          </div>
        </div>
        <div class="mt-5 md:col-span-2 md:mt-0">
          
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="brand" class="block text-sm font-medium text-gray-700">Hersteller *</label>
                  <vee-field as="select" id="brand" name="brand" autocomplete="brand-name" v-model="formData.brand" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="" disabled>Wählen Hersteller</option>
                    <option v-for="(item, index) in data.hersteller" :key="index" :value="item"> {{item}} </option>
                  </vee-field>
                  <ErrorMessage class="text-small-error" name='brand'/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="model" class="block text-sm font-medium text-gray-700">Modell *</label>
                  <vee-field type="text" name="model" id="model" autocomplete="model" v-model="formData.model" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                  <ErrorMessage class="text-small-error" name='model'/>
                  <!-- <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /> -->
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="body" class="block text-sm font-medium text-gray-700">Karosserie *</label>
                  <vee-field as="select" id="body" name="body" autocomplete="body-name" v-model="formData.body" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="" disabled>Wählen Karosserie</option>
                    <option v-for="(item, index) in data.karosserie" :key="index" :value="item"> {{item}} </option>
                  </vee-field>
                  <ErrorMessage class="text-small-error" name='body'/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="gearType" class="block text-sm font-medium text-gray-700">Getriebeart *</label>
                  <vee-field as="select" name="gearType" autocomplete="gearType-name" v-model="formData.gearType" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="" disabled>Wählen Getriebeart</option>
                    <option v-for="(item, index) in data.getriebeart" :key="index" :value="item"> {{item}} </option>
                  </vee-field>
                  <ErrorMessage class="text-small-error" name='gearType'/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="fuel" class="block text-sm font-medium text-gray-700">Kraftstoff *</label>
                  <vee-field as="select" name="fuel" autocomplete="fuel-name" v-model="formData.fuel" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="" disabled>Wählen Kraftstoff</option>
                    <option v-for="(item, index) in data.kraftstoff" :key="index" :value="item"> {{item}} </option>
                  </vee-field>
                  <ErrorMessage class="text-small-error" name='fuel'/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="color" class="block text-sm font-medium text-gray-700">Farbe *</label>
                  <vee-field as="select" name="color" autocomplete="color-name" v-model="formData.color" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="" disabled>Wählen Farbe</option>
                    <option v-for="(item, index) in data.farbe" :key="index" :value="item"> {{item}} </option>
                  </vee-field>
                  <ErrorMessage class="text-small-error" name='color'/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="age" class="block text-sm font-medium text-gray-700">Erstzulassung *</label>
                  <vee-field as="select" name="age" autocomplete="age" v-model="formData.age" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="" disabled>Wählen Erstzulassung</option>
                    <option v-for="(item, index) in data.age" :key="index" :value="item"> {{item}} </option>
                  </vee-field>
                  <ErrorMessage class="text-small-error" name='age'/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="power" class="block text-sm font-medium text-gray-700">Leistung (PS)</label>
                  <vee-field type="text" name="power" id="power" autocomplete="power" v-model="formData.power" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="kmStand" class="block text-sm font-medium text-gray-700">Km-Stand *</label>
                  <vee-field as="select" name="kmStand" autocomplete="kmStand-name" v-model="formData.kmStand" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="" disabled>Wählen Km-Stand</option>
                    <option v-for="(item, index) in data.kmStand" :key="index" :value="item"> {{item}} </option>
                  </vee-field>
                  <ErrorMessage class="text-small-error" name='kmStand'/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="suggestionPrice" class="block text-sm font-medium text-gray-700">Preisvorstellung</label>
                  <vee-field type="text" name="suggestionPrice" id="suggestionPrice" autocomplete="suggestionPrice" v-model="formData.suggestionPrice" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="serviceHandbook" class="block text-sm font-medium text-gray-700">Serviceheft *</label>
                  <vee-field type="radio" name="serviceHandbook" value="Ja" autocomplete="serviceHandbook-name" v-model="formData.serviceHandbook" class="mr-1 border border-gray-300  shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />Ja
                  <vee-field type="radio" name="serviceHandbook" value="Nein" autocomplete="serviceHandbook-name" v-model="formData.serviceHandbook" class="mr-1  border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />Nein
                  <ErrorMessage class="text-small-error" name='serviceHandbook'/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="pikerlMonat" class="block text-sm font-medium text-gray-700">§57a Gutachten/Pickerl bis *</label>
                  <vee-field as="select" name="pikerlMonat" autocomplete="pikerlMonat-name" v-model="formData.pikerlMonat" class="mt-1 inline w-1/4 mr-5 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="" disabled>Monat</option>
                    <option v-for="(item, index) in data.pikerlMonat" :key="index" :value="item"> {{item}} </option>
                  </vee-field>
                  <ErrorMessage class="text-small-error" name='pikerlMonat'/>
                  <label for="pikerlJahr" class="hidden">§57a Gutachten/Pickerl bis *</label>
                  <vee-field as="select" name="pikerlJahr" autocomplete="pikerlJahr-name" v-model="formData.pikerlJahr" class="mt-1 inline w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="" disabled>Jahr</option>
                    <option v-for="(item, index) in data.pikerlJahr" :key="index" :value="item"> {{item}} </option>
                  </vee-field>
                  <ErrorMessage class="text-small-error" name='pikerlJahr'/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="equipment" class="block text-sm font-medium text-gray-700">Ausstattung</label>
                  <div class="mt-1">
                    <vee-field as="textarea" id="equipment" name="equipment" rows="3" v-model="formData.equipment" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">Brief description for options of your Auto</p>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="condition" class="block text-sm font-medium text-gray-700">Zustand</label>
                  <div class="mt-1">
                    <vee-field as="textarea" id="condition" name="condition" rows="3" v-model="formData.condition" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"  />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">Brief description for your Auto</p>
                </div>
              </div>
            </div>
            <!-- <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Anfrage senden</button>
            </div> -->
          </div>
          
        </div>
      </div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200" />
        </div>
      </div>

      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Persönliche Informationen</h3>
              <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="bg-white px-4 py-5 sm:p-6">
                <div class="grid grid-cols-6 gap-6">

                  <!-- First Name -->
                  <div class="col-span-6 sm:col-span-3">
                    <label for="firstName" class="block text-sm font-medium text-gray-700">Vorname</label>
                    <vee-field type="text" name="firstName" id="firstName" autocomplete="given-name" v-model="formData.firstName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <ErrorMessage class="text-small-error" name="firstName" />
                  </div>
                  
                  <!-- Last Name -->
                  <div class="col-span-6 sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Nachname</label>
                    <vee-field type="text" name="lastName" id="lastName" autocomplete="family-name" v-model="formData.lastName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <ErrorMessage class="text-small-error" name="lastName" />
                  </div>
                  
                  <!-- Email -->
                  <div class="col-span-6 sm:col-span-4">
                    <label for="emailAddress" class="block text-sm font-medium text-gray-700">E-mail Address</label>
                    <vee-field type="text" name="emailAddress" id="emailAddress" autocomplete="email" v-model="formData.emailAddress" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <ErrorMessage class="text-small-error" name="emailAddress" />
                  </div>

                  <div class="col-span-6">
                    <label for="address" class="block text-sm font-medium text-gray-700">Addresse(Straße/Hausnummer/Stiege/Türnummer)</label>
                    <vee-field type="text" name="address" id="address" autocomplete="address" v-model="formData.address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="city" class="block text-sm font-medium text-gray-700">Stadt</label>
                    <vee-field type="text" id="city" name="city" autocomplete="city" v-model="formData.city" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal-code" class="block text-sm font-medium text-gray-700">Postleitzahl</label>
                    <vee-field type="text" name="postalCode" id="postalCode" autocomplete="postal-code" v-model="formData.postalCode" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button type="submit" @click.prevent="sendRequest" class="inline-flex justify-center rounded-md border border-transparent bg-red-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Anfrage senden</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200" />
        </div>
      </div>
    </VeeForm>
  </div>

  <!-- <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>

  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Persönliche Informationen</h3>
          <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <vee-form :validation-schema="personSchema" @submit="sendRequest">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">

                First Name
                <div class="col-span-6 sm:col-span-3">
                  <label for="firstName" class="block text-sm font-medium text-gray-700">Vorname</label>
                  <vee-field type="text" name="firstName" id="firstName" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                  <ErrorMessage class="text-small-error" name="firstName" />
                </div>
                
                Last Name
                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Nachname</label>
                  <vee-field type="text" name="lastName" id="lastName" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                  <ErrorMessage class="text-small-error" name="lastName" />
                </div>
                
                Email
                <div class="col-span-6 sm:col-span-4">
                  <label for="emailAddress" class="block text-sm font-medium text-gray-700">E-mail Address</label>
                  <vee-field type="text" name="emailAddress" id="emailAddress" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                  <ErrorMessage class="text-small-error" name="emailAddress" />
                </div>

                <div class="col-span-6">
                  <label for="address" class="block text-sm font-medium text-gray-700">Addresse(Straße/Hausnummer/Stiege/Türnummer)</label>
                  <vee-field type="text" name="address" id="address" autocomplete="address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="city" class="block text-sm font-medium text-gray-700">Stadt</label>
                  <vee-field type="text" id="city" name="city" autocomplete="city-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="postal-code" class="block text-sm font-medium text-gray-700">Postleitzahl</label>
                  <vee-field type="text" name="postalCode" id="postalCode" autocomplete="postal-code" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-red-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Anfrage senden</button>
            </div>
          </div>
        </vee-form>
      </div>
    </div>
  </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div> -->

  <!-- <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
          <p class="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
              <fieldset>
                <legend class="sr-only">By Email</legend>
                <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
                <div class="mt-4 space-y-4">
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="comments" class="font-medium text-gray-700">Comments</label>
                      <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                      <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="offers" class="font-medium text-gray-700">Offers</label>
                      <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend class="contents text-base font-medium text-gray-900">Push Notifications</legend>
                <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                <div class="mt-4 space-y-4">
                  <div class="flex items-center">
                    <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Everything</label>
                  </div>
                  <div class="flex items-center">
                    <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">Same as email</label>
                  </div>
                  <div class="flex items-center">
                    <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">No push notifications</label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div> -->
</template>


<script>
import { ErrorMessage } from 'vee-validate';

export default {
  name: "FormComponent",
  props: {
      data: Object,
  },
  data() {
      return {
          carSchema: {
            brand: "required",
            model: "required",
            body: "required",
            gearType: "required",
            fuel: "required",
            color: "required",
            age: "required",
            kmStand: "required",
            serviceHandbook: "required",
            pikerlMonat: "required",
            pikerlJahr: "required",
            firstName: 'nameRequired',
            lastName: 'lastNameRequired',
            emailAddress:'required|min:3|max:100|email',
            city: "required",
          },
          formData: {
            brand: '',
            model: '',
            body: '',
            gearType: '',
            fuel: '',
            color: '',
            age: '',
            power: '',
            kmStand: '',
            suggestionPrice: '',
            serviceHandbook: '',
            pikerlMonat: '',
            pikerlJahr: '',
            condition: '',
            equipment: '',
            firstName: '',
            lastName: '',
            emailAddress:'',
            address:'',
            city: '',
            postalCode: '',
          }
          // personSchema: {
          //   firstName: 'nameRequired',
          //   lastName: 'lastNameRequired',
          //   emailAddress:'required|min:3|max:100|email',
          //   city: "required",
          // },
      };
  },
  
  methods: {
    // sendRequest (values) {
    //   console.log(values);
    //   console.log('salam');
    // },
    sendRequest () {
      console.log(this.formData);
      console.log('salam');
    },
    // sendRequest () {
    //   for( var index = 0; index < document.forms.length; index++ ) {
        
    //     console.log(document.forms[index].submit());
    //   }
    // },
  },
  components: { ErrorMessage }
};
</script>

<style scoped>

</style>
