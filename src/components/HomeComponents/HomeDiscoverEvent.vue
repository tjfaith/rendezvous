<script setup lang="ts">
import AppButton from "../GeneralComponents/AppButton.vue";
</script>
<template>
  <div class="md:px-20 px-5 flex justify-between md:flex-row flex-col md:space-x-10 md:gap-0 gap-10 mt-10 mb-20">
    <div class="flex-grow">
      <h2 class="text-3xl font-bold mb-5">
        Discover a World of Events Tailored Just for You.
      </h2>
      <app-button label="View all events" />
    </div>
    <div class="flex flex-wrap gap-4  ">
      <div class="relative rounded-md  ">
        <img class="rounded-md" src="@/assets/img/img1.png" alt="Image 1" />
        <div class="rounded-md text-xl px-20 h-full flex flex-col absolute inset-0 bg-overlay bg-black/50 text-white font-bold items-center justify-center">
        Online&nbsp;Events
        </div>
      </div>
      <div class="rounded-md relative ">
        <img class="rounded-md" src="@/assets/img/img2.png" alt="Image 2" />
        <div class=" rounded-md text-xl px-20 h-full flex flex-col absolute inset-0 bg-overlay bg-black/50 text-white font-bold items-center justify-center">
       Physical&nbsp;Events
        </div>
        
      </div>
      
         <div class="rounded-md relative ">
        <img class="rounded-md" src="@/assets/img/img3.png" alt="Image 3" />
        <div class="rounded-md text-xl px-20 h-full flex flex-col absolute inset-0 bg-overlay bg-black/50 text-white font-bold items-center justify-center">
        Hybrid&nbsp;Events
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
