<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-sky-400 sticky top-0 z-50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <div class="flex h-18 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <router-link :to="{ name: 'home' }" @click.prevent="currentUpdate('home')">
              <img class="h-16 w-200 rounded-md" src="../assets/munda_Logo.png" alt="Munda" />
            </router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link v-for="item in navigation" :key="item.name" @click.prevent="currentUpdate(item.routerName)" :to="{ name: item.routerName}" :class="[currentPage===item.routerName ? 'bg-sky-900 text-white' : 'text-black hover:bg-sky-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <!-- <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
            </button> -->

            <!-- Profile dropdown -->
            <!-- <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu> -->
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <DisclosurePanel class="md:hidden" v-slot="{close}">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <router-link v-for="item in navigation" :key="item.name" @click.prevent="currentUpdate(item.routerName, close)" :to="{ name: item.routerName}" :class="[currentPage===item.routerName ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
        </div>
        <div class="border-t border-gray-700 pt-4 pb-3">
          <div class="flex items-center px-5">
            <!-- <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
              <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
            </div> -->
            <!-- <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
            </button> -->
          </div>
          <!-- <div class="mt-3 space-y-1 px-2">
            <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">{{ item.name }}</DisclosureButton>
          </div> -->
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup>
// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Unsere Fahrzeuge', routerName: 'home', current: true },
//   { name: 'Service', href: '#', current: false },
//   { name: 'Anfrage', href: '#', current: false },
//   { name: 'Angebot', href: '#', current: false },
//   { name: 'Tipps', href: '#', current: false },
//   { name: 'Kontakt', routerName: 'kontakt', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]
</script>

<script>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { mapState } from 'vuex';
  export default {
    name: 'TheNavbar',
    props: [],
    emits: [],
    mounted() {
      this.$watch('$route.name', ()=> {
        this.$store.state.currentPage = this.$route.name;
      });
    },
    data() {
      return{
        header: this.$route.name,
        open:false,
      };
    },
    methods: {
      currentUpdate(page, close) {
        this.$store.state.currentPage = page;
        if (close) {
          close();
        }
        // this.navigation.forEach( e => {
        //   if (e.name === page) {
        //     e.current = true;
        //     // this.header = e.name
        //   }
        //   else {
        //     e.current = false;
        //   }
        // });
      }
    },
    computed: {
      ...mapState({
        navigation: 'navigationData',
        currentPage: 'currentPage'
      }),
    }
  }
</script>