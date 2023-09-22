import { defineStore } from "pinia";
import api from "@/services/base_url";
export const useEvents = defineStore("events", {
  state: () => ({
    all_events: [] as any,
    single_event: {} as any,
    search_result:[] as any,
    searched:false,
    loading: false,
  }),
  actions: {
    async getAllEvents(page_number = 1) {
      this.searched = false; 
      this.loading = true;
      this.all_events = [];
      await api.get(`/events?page=${page_number}`).then(
        (response) => {
          this.all_events = response.data.data;
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
    },
    async getSingleEvent(event_id: string) {
      this.loading = true;
      this.single_event = {};
      await api.get(`/events/${event_id}`).then(
        (response) => {
          this.single_event = response.data.data.event;
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
    },
    async searchEventByCategory(event_category:string) {
      this.searched =true; 
      this.loading = true;
      this.all_events = [];
      await api.get(`/events/search?category=${event_category}`).then(
        (response) => {
          this.search_result = response.data.data.event;
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
    },
  },
});
