<script setup lang="ts">
import useSingleEvent from "@/composables/single_event";
import NavBar from "@/components/GeneralComponents/AppNavBar.vue";
import AppButton from "@/components/GeneralComponents/AppButton.vue";
import AppFooter from "@/components/GeneralComponents/AppFooter.vue";
import AppLoader from "@/components/GeneralComponents/AppLoader.vue";
const { single_event, loading } = useSingleEvent();
</script>
<template>
  <div class="md:px-20 px-5 mb-10">
    <nav-bar :no_background="true" />
    <div v-if="!loading">
      <div class="rounded-t-lg h-50-screen mb-10">
        <img
          class="rounded-xl object-cover h-full w-full"
          :src="single_event?.imageUrl"
          alt="event image"
        />
      </div>
      <div class="flex gap-8 md:flex-row flex-col">
        <div class="flex-grow w-11/12">
          <h1 class="text-xl font-bold mb-5">{{ single_event?.title }}</h1>
          <div class="space-y-2 mb-8">
            <div class="space-x-3 flex">
              <div class="flex space-x-2">
                <img src="@/assets/icons/Calendar.svg" /><span>{{
                  single_event?.date
                }}</span>
              </div>
              <div class="flex space-x-2">
                <img src="@/assets/icons/Time.svg" /><span>{{
                  single_event?.time
                }}</span>
              </div>
            </div>
            <div class="flex space-x-2">
              <img src="@/assets/icons/Location.svg" /><span
                >{{ single_event.address }}, {{ single_event?.city }},
                {{ single_event.country }}</span
              >
            </div>
            <div class="flex space-x-2">
              <img src="@/assets/icons/User.svg" /><span>{{
                single_event?.organizer?.name
              }}</span>
            </div>
          </div>

          <div class="mb-8">
            <h1 class="text-lg font-bold">Event description</h1>
            <p>{{ single_event?.description }}</p>
          </div>

          <div>
            <h1 class="text-lg font-bold">Tickets Pricing</h1>
            <div class="text-primary2 font-bold mb-8 text-lg">
              <span v-if="single_event?.price > 0"
                >NGN {{ Number(single_event?.price).toLocaleString() }}</span
              >
              <span v-else>Free</span>
            </div>
            <app-button label="Buy now" />
          </div>
        </div>
        <div class="md:w-5/12 w-full">
          <h1 class="text-lg font-bold mb-6">Contact Organizers</h1>
          <div class="flex items-center space-x-3">
            <a :href="`mailto: ${single_event?.organizer?.email}`" ><img src="@/assets/icons/Email.svg" /></a>
            <a :href="single_event?.organizer?.twitterUrl" target="_blank" >
            <img src="@/assets/icons/Twitter.svg" />
            </a>
             <a :href="single_event?.organizer?.instagram" target="_blank" >
            <img src="@/assets/icons/Instagram.svg" />
             </a>
          </div>
          <div class="mt-10 space-y-8">
            <h1 class="text-lg font-bold">Directions</h1>
            <iframe
              :src="`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3939.7942469579757!2d${single_event.long}!3d${single_event.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDQnNTcuMCJOIDfCsDI5JzMwLjgiRQ!5e0!3m2!1sen!2sng!4v1695276965752!5m2!1sen!2sng`"
              :width="'100%'"
              height="450"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <app-loader v-else />
  </div>
  <app-footer />
</template>

<style scoped></style>
