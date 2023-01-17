import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    products: [],
    product: {},
    categories: [],
    carts: [],
  },
  //   getters: {
  //     product: (state) => state.product,
  //   },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    SET_CATEGORY(state, categories) {
      state.categories = categories;
    },
    UPDATE_CART(state, cart) {
      // let productInCart = state.carts.find((items) => {
      //   return items.products.id === products.id;
      // });
      // if (productInCart) {
      //   products.quantity += quantity;
      //   return;
      // }
      state.carts = cart;
    },
    REMOVE_FROM_CART(state, item) {
      state.carts = state.carts.filter((items) => {
        return items.id !== item.id;
      });
    },
  },
  actions: {
    getProducts({ commit }) {
      axios.get("https://dummyjson.com/products").then((resp) => {
        commit("SET_PRODUCTS", resp.data.products);
      });
    },

    getProduct({ commit }, productId) {
      axios.get(`https://dummyjson.com/products/${productId}`).then((resp) => {
        commit("SET_PRODUCT", resp.data);
      });
    },
    getCategory({ commit }) {
      axios.get("https://dummyjson.com/products/categories").then((resp) => {
        commit("SET_CATEGORY", resp.data);
      });
    },

    addToCart(context, id) {
      const cart = context.state.carts;
      cart.push(id);
      context.commit("UPDATE_CART", cart);
    },
    removeFromCart({ commit }, items) {
      commit("REMOVE_FROM_CART", items);
    },
  },
  getters: {
    cartItemCount(state) {
      return state.carts.length;
    },

    cartTotalPrice(state) {
      let total = 0;
      state.carts.forEach((items) => {
        total += items.price;
      });
      return total;
    },
  },
});
export default store;
