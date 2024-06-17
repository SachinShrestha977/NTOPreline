import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [], // All products data
    selectedProduct: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
  },
  actions: {
    loadProducts({ commit }, products) {
      commit("setProducts", products);
    },
    selectProduct({ commit }, product) {
      commit("setSelectedProduct", product);
    },
  },
  getters: {
    products: (state) => state.products,
    selectedProduct: (state) => state.selectedProduct,
  },
});

export default store;
