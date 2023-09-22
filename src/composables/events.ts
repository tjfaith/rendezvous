import { useEvents } from "@/store/events";
import { computed, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default () => {
  const all_events = computed(() => useEvents().all_events);
  const search_result = computed(() => useEvents().search_result);
  const searched = computed(() => useEvents().searched);
  const loading = computed(() => useEvents().loading);
  const router = useRouter();
  const route = useRoute();
  const event_category = ref("");

  const current_page = computed(() => route.params.page_number);

  const changePage = (page_number: number) => {
    useEvents().getAllEvents(page_number);
    router.push(`/events/${page_number}`);
  };

  const validateRoute = () => {
    if (route.name == "Events") {
      const validate_page = Number(current_page.value);
      isNaN(validate_page) ? changePage(1) : changePage(validate_page);
    }
  };

  const searchEvent = () => {
    event_category.value !== ""
      ? useEvents().searchEventByCategory(event_category.value)
      : useEvents().getAllEvents();
  };

  onMounted(() => {
    useEvents().getAllEvents();
    validateRoute();
  });

  return {
    all_events,
    loading,
    current_page,
    event_category,
    search_result,
    searched,
    changePage,
    searchEvent,
  };
};
