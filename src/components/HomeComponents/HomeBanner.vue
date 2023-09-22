<script setup lang="ts">
import NavBar from "@/components/GeneralComponents/AppNavBar.vue";
import EventSearch from "@/components/EventComponents/EventSearch.vue";
</script>
<template>
  <div class="relative bg-no-repeat bg-cover bg-center banner h-60-screen">
    <div class=" md:px-20 px-5 h-full flex flex-col justify-between absolute inset-0 bg-overlay bg-black/50">
      <nav-bar />
      <div class="flex justify-between mb-10 md:flex-row md:gap-0 gap-6 flex-col">
        <p class="text-white font-bold text-2xl md:w-1/4">
          Ready to Rock? Discover the Hottest Events Here – Your Calendar's New
          Best Friend!
        </p>
        <event-search />
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-image: url("../../assets/img/Banner.png");
}
</style>
