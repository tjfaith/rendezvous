import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/events/:page_number",
    name: "Events",
    component: () => import("@/views/EventPage.vue"),
  },
  {
    path: "/event/:event_id",
    name: "Single Event",
    component: () => import("@/views/SingleEventPage.vue"),
  },
  {
    path: "/:catchAll(.*)", // Matches any route that hasn't been defined
    name: "NotFound",
    component: () => import("@/views/404.vue"), // Create a NotFoundPage component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
