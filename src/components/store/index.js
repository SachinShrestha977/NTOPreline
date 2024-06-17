import { createStore } from "vuex";

const store = createStore({
  state: {
    selectedItem: null, // State to hold the selected item
  },
  mutations: {
    SET_SELECTED_ITEM(state, item) {
      state.selectedItem = item;
    },
  },
  actions: {
    setSelectedItem({ commit }, item) {
      commit("SET_SELECTED_ITEM", item);
    },
  },
  getters: {
    selectedItem(state) {
      return state.selectedItem;
    },
  },
});

export default store;
