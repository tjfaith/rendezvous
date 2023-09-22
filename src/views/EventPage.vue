<script setup lang="ts">
import NavBar from "@/components/GeneralComponents/AppNavBar.vue";
import EventCard from "@/components/EventComponents/EventCard.vue";
import useEvents from "@/composables/events";
import AppLoader from "@/components/GeneralComponents/AppLoader.vue";
import AppFooter from "@/components/GeneralComponents/AppFooter.vue";
import AppPagination from "@/components/GeneralComponents/AppPagination.vue";
const { all_events, loading, current_page, changePage } = useEvents();
</script>
<template>
  <div class="md:px-20 px-5 mb-20">
    <nav-bar :no_background="true" />
    <div class="flex w-full gap-6 flex-wrap mt-10" v-if="!loading">
      <event-card
        v-for="(event, index) in all_events.allEvents"
        :key="index"
        :event="event"
      />
    </div>
    <app-loader v-else />
    <div class="mt-10">
      <app-pagination
        v-on:page-changed="changePage"
        :totalPages="all_events.noOfPages"
        :currentPage="Number(current_page)"
        v-if="!loading"
      />
    </div>
  </div>
  <app-footer />
</template>

<style scoped></style>
