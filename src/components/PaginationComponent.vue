<template>
  <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div class="flex flex-1 justify-between sm:hidden">
      <a  @click.prevent="setPage(pager.currentPage-1)" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" :class="{'disabled': pager.currentPage<=0}"> {{ '< ' }} Previous Page </a>
      <a  @click.prevent="setPage(pager.currentPage+1)" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" :class="{'disabled': pager.currentPage+1>=pager.pages.length}">Next Page {{ ' >' }}</a>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          <span class="font-medium">{{ pager.startIndex+1}}</span>
          {{ ' ' }}
          bis
          {{ ' ' }}
          <span class="font-medium">{{ pager.endIndex }}</span>
          {{ ' ' }}
          von
          {{ ' ' }}
          <span class="font-medium">{{ items.length }}</span>
          {{ ' ' }}
          Ergebnissen
        </p>
      </div>
      <div>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <!-- <a href="#" class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </a> -->
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a v-for="page in pager.pages" :key="page" @click.prevent="setPage(page)" aria-current="page" class="cursor-pointer relative inline-flex items-center  bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 rounded-md" :class="{'relative z-10 inline-flex items-center border border-red-500 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 focus:z-20': pager.currentPage === page}">{{ page +1 }}</a>
          <!-- <a href="#" aria-current="page" class="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">1</a>
          <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">2</a>
          <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">3</a>
          <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
          <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">8</a>
          <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">9</a>
          <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">10</a> -->
          <!-- <a href="#" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </a> -->
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
</script>


<script>
export default {
  name: "PaginationComponent",
  props: {
    items: {
      type: Array,
      required: true
    },
    initialPage: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    // maxPages: {
    //   type: Number,
    //   default: 10
    // },
  },
  data() {
    return {
      pager: {},
    };
  },
  created() {
    // set page if items array isn't empty
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  },
  methods: {
    setPage(page) {
      function paginate(itemsLenght, currentPage, pageSize) {
        let output = {};
        let n = Math.ceil(itemsLenght/pageSize)
        output.pages = Array.from(Array(n).keys());
        output.currentPage = currentPage;
        output.startIndex = (currentPage)*pageSize;
        output.endIndex = (currentPage +1) === n ? itemsLenght:(currentPage +1)*pageSize;
        return output;
      }

      const { items, pageSize} = this;

      // get new pager object for specified page
      const pager = paginate(items.length, page, pageSize);

      // get new page of items from items array
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex);

      // update pager
      this.pager = pager;

      // emit change page event to parent component
      this.$emit('changePage', pageOfItems);
    },
  },
};
</script>

<style scoped>
.disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0.6;
}
</style>
