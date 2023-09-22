import { useEvents } from "@/store/events";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

export default () => {
  const single_event = computed(() => useEvents().single_event);
  const loading = computed(() => useEvents().loading);

  const route = useRoute();
  const eventId = computed(() => route.params.event_id);


  onMounted(() => {
    useEvents().getSingleEvent(eventId.value as string);
  });
  return {
    single_event,
    loading,
  };
};
