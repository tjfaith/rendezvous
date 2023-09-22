<script setup lang="ts">
import AppButton from "@/components/GeneralComponents/AppButton.vue";
import useNavbar from "@/composables/nav_bar";

const props = defineProps({
  no_background: { type: Boolean, default: false },
});

const { toggle_menu } = useNavbar();
</script>
<template>
  <div class="py-5">
    <div
      class="bg-white/50 rounded-2xl py-3 px-5 flex flex-col md:flex-row items-center space-x-2 justify-between relative"
      :class="{ 'bg-transparent': props.no_background }"
    >
      <div class="flex space-x-2 justify-between w-full md:w-auto items-center">
        <router-link class="font-bold text-primary text-xl" to="/"
          >rendezvous</router-link
        >
        <img
          v-if="!toggle_menu"
          @click="toggle_menu = !toggle_menu"
          class="w-10 md:hidden cursor-pointer"
          src="@/assets/icons/NavIcon.svg"
        />
        <img
          v-else
          @click="toggle_menu = !toggle_menu"
          class="w-10 md:hidden cursor-pointer"
          src="@/assets/icons/CloseIcon.svg"
        />
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <div
          v-if="toggle_menu"
          class="flex items-center absolute md:relative bg-white md:bg-transparent shadow-md md:shadow-none rounded-2xl md:p-0 py-3 px-5 right-0 top-20 md:top-0 md:justify-between w-full flex-col md:flex-row"
        >
          <div class="flex md:mt-0 mt-5 md:justify-center w-full">
            <ul
              class="flex flex-col md:flex-row justify-between gap-5 text-primary2 font-bold"
            >
              <li class="cursor-pointer">
                <router-link to="/events/1">Discover</router-link>
              </li>
              <li class="cursor-pointer">About us</li>
              <li class="cursor-pointer">FAQs</li>
              <li class="cursor-pointer">Contact us</li>
            </ul>
          </div>
          <div
            class="md:ml-auto flex md:items-center flex-shrink-0 flex-col md:flex-row"
          >
            <app-button :label="'Log in'" :button_primary="false" />
            <app-button :label="'Sign up'" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
