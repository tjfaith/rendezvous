<script setup lang="ts">
import AppButton from "@/components/GeneralComponents/AppButton.vue";
import useEvents from "@/composables/events"

const {searchEvent, event_category}= useEvents()
</script>
<template>
  <div class=" bg-white flex items-center rounded-2xl md:h-10 md:py-10 py-5 md:px-5 md:space-x-6 px-3 md:flex-row flex-col">
    <div class="flex items-center w-full  md:w-auto space-x-3 ">
      <img src="/src/assets/icons/SearchIcon.svg" />
      <input type="text" placeholder="Search for an Event" class="outline-none text-secondaryGray" />
    </div>

    <select v-model="event_category" class="text-secondaryGray md:border-l-2 border-slate-200 md:pl-6 h-10 w-full outline-none">
      <option value="" disabled selected>Categories</option>
      <option value="">All</option>
      <option value="conference">Conference</option>
      <option value="summit">Summit</option>
      <option value="musical">Musical</option>
      <option value="fundraising">Fundraising</option>
      <option value="fitness">Fitness</option>
      <option value="meetup">Meetup</option>
      <option value="tech">Tech</option>
      <option value="fashion">Fashion</option>
      <option value="health">Health</option>
      <option value="health">Health</option>
      <option>Others</option>
    </select>
    <app-button v-on:button-function="searchEvent" label="Search" />
  </div>
</template>

<style scoped></style>
