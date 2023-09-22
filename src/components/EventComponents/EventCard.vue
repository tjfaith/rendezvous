<script setup lang="ts">
const props = defineProps({
  event: { type: Object },
});
</script>
<template>
  <div
    class="sm:w-1/4 max-w-md min-w-min flex-grow rounded-xl border-2 w-full border-gray-200 flex flex-col"
  >
    <div class="rounded-t-xl object-cover h-40-screen">
      <img
        class="rounded-t-xl w-full h-full"
        :src="props.event?.imageUrl"
        alt="event image"
      />
    </div>
    <div class="p-8 flex-grow">
      <div>
        <h2 class="text-xl font-bold">{{ props.event?.title }}</h2>
        <p class="text-md font-thin">
          {{ props.event?.date }} {{ props.event?.time }}
        </p>
      </div>
      <p class="mt-5 flex-grow">{{ props.event?.description.slice(0, 200) }}</p>
    </div>
    <div class="flex items-center font-bold px-8 mb-10 justify-between md:flex-row flex-col space-y-3">
      <router-link
        :to="`/event/${props.event?.id}`"
        class="text-primary space-x-2 text-lg flex items-center font-bold "
      >
        <span>View details</span>
        <img src="@/assets/icons/ArrowUpRightBig.svg" alt="Arrow Icon" />
      </router-link>
      <div class=" text-slate-500 bg-slate-200 px-3 py-0.5 flex items-center justify-center text-sm space-x-2 pb-1  rounded-xl">
      <span class="font-black">Category:</span>
        <span >{{ props.event?.category }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>
