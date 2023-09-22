import { onMounted, onUnmounted, ref, watch } from "vue";

export default () => {
  const windowWidth = ref(0);
  const toggle_menu = ref(false);

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", handleResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  watch(windowWidth, () => {
    if (windowWidth.value <= 767) {
      toggle_menu.value = false;
    } else {
      toggle_menu.value = true;
    }
  });
  return { toggle_menu };
};
