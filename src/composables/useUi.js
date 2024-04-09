import { useStore } from "vuex";
import { computed } from "vue";
export const useUi = () => {
  const store = useStore();

  return {
    sideMenuOpen: computed(() => store.getters["ui/sideMenuOpen"]),
    toggleSideMenu() {
      store.commit("ui/toggleSideMenu");
    },
  };
};
