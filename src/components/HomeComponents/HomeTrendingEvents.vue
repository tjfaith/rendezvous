<script setup lang="ts">
import useEvents from "@/composables/events";
import EventCard from "@/components/EventComponents/EventCard.vue";
import AppLoader from "@/components/GeneralComponents/AppLoader.vue";

const { all_events, search_result, searched, loading } = useEvents();
</script>
<template>
  <div class="md:px-20 px-5 py-10">
    <div class="flex justify-between w-full sm:flex-row flex-col md:gap-0 gap-5">
      <h1 class="text-xl font-bold">Trending events</h1>
      <router-link
        to="/events/1"
        class="flex items-center space-x-2 text-primary"
      >
        <span>View all trending events</span>
        <img src="@/assets/icons/ArrowUpRight.svg" alt="Arrow Icon" />
      </router-link>
    </div>
    <div class="flex w-full gap-6 flex-wrap md:flex-row flex-col mt-10" v-if="!loading">
      <event-card
        v-if="!searched"
        v-for="(event, index) in all_events.allEvents?.slice(0, 3)"
        :key="index"
        :event="event"
      />
      <event-card
        v-else-if="searched && search_result?.length > 0"
        v-for="(s_event, s_index) in search_result"
        :key="s_index"
        :event="s_event"
      />
      <div
        class="font-bold w-full text-xl uppercase flex items-center justify-center h-40-screen text-secondaryGray"
        v-else-if="searched && search_result.length === 0"
      >
        No Result found
      </div>
    </div>
    <app-loader v-else />
  </div>
</template>
