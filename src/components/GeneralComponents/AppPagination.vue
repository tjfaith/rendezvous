<script setup lang="ts">
import usePagination from "@/composables/pagination";
const emit = defineEmits();
const props = defineProps({
  totalPages: { type: Number },
  currentPage: { type: Number },
});

const { currentPage, totalPages, pages, setCurrentPage } = usePagination(
  props.totalPages as number,
  props.currentPage as number,
  emit
);
</script>

<template>
  <nav class="flex items-center justify-center my-4">
    <!-- Previous Page Button -->
    <button
      @click="currentPage > 1 ? setCurrentPage(currentPage - 1) : null"
      :disabled="currentPage === 1"
      class="mr-2 px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-purple-200 focus:outline-none focus:border-primary2 transition"
    >
      Previous
    </button>

    <!-- Page Number Buttons -->
    <template v-for="pageNumber in pages">
      <button
        @click="setCurrentPage(pageNumber)"
        :class="{
          'bg-primary2 text-black font-extrabold': currentPage === pageNumber,
          'text-gray-700 hover:bg-purple-200': currentPage !== pageNumber,
          'mx-1': currentPage !== pageNumber,
        }"
        class="px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-purple-200 focus:outline-none focus:border-primary2 transition"
      >
        {{ pageNumber }}
      </button>
    </template>

    <!-- Next Page Button -->
    <button
      @click="currentPage < totalPages ? setCurrentPage(currentPage + 1) : null"
      :disabled="currentPage === totalPages"
      class="ml-2 px-3 py-2 rounded-lg border border-gray-300 bg-white hover:bg-purple-200 focus:outline-none focus:border-primary2 transition"
    >
      Next
    </button>
  </nav>
</template>
