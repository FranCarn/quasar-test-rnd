import { useStore } from "vuex";
import { computed } from "vue";
export const useUi = () => {
  const store = useStore();

  return {
    sideMenuOpen: computed({
      get() {
        return store.getters["ui/sideMenuOpen"];
      },
      set(val) {
        store.commit("ui/toggleSideMenu");
      },
    }),
    toggleSideMenu() {
      store.commit("ui/toggleSideMenu");
    },
  };
};
