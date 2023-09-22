<script setup lang="ts">
import {defineEmits} from 'vue'
const props = defineProps({
  label: { type: String, default: "Button" },
  button_primary: { type: Boolean, default: true },
  disable_button: { type: Boolean, default: false },
});
const emit = defineEmits(['button-function']);
const buttonFunction = () => {
  emit("button-function");
};
</script>
<template>
  <button
    @click="buttonFunction"
    :disabled="disable_button"
    v-if="props.button_primary"
    class="bg-primary2 rounded-lg px-5 py-2 text-white cursor-pointer"
    :class="{'bg-primary2/50 cursor-not-allowed': disable_button}"
    :value="props.label"
  >
    {{ props.label }}
  </button>
  <button
    @click="buttonFunction"
    :disabled="disable_button"
    v-if="!props.button_primary"
    class="rounded-lg px-5 py-2 text-primary font-bold cursor-pointer"
    :class="{'bg-primary2/20 cursor-not-allowed': disable_button}"
    :value="props.label"
  >
    {{ props.label }}
  </button>
</template>
