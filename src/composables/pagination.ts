import { ref, computed } from "vue";
export default (
  totalPages: number,
  currentPageProp: number,
  emit: (event: string, ...args: any[]) => void
) => {
  const currentPage = ref(isNaN(currentPageProp) ? 1 : currentPageProp);

  const pages = computed(() => {
    const start = Math.max(1, currentPage.value - 2);
    const end = Math.min(totalPages, start + 3);
    const pageArray = [];
    for (let i = start; i <= end; i++) {
      pageArray.push(i);
    }
    return pageArray;
  });

  const setCurrentPage = (page: number) => {
    currentPage.value = page;
    emit("page-changed", page);
  };
  return { currentPage, totalPages, pages, setCurrentPage };
};
