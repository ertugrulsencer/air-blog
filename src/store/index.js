import Vue from "vue";
import Vuex from "vuex";
import blog from "./modules/blog";
import personal from "./modules/personal";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    blog,
    personal,
  },
});
