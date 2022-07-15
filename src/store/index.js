import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
const vuexLocal = new VuexPersist({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logintoken: {},
    currentCity: '北京'
  },
  getters: {
  },
  mutations: {
    setToken (state, payload) {
      state.logintoken = payload
    },
    setcurrentCity (state, payload) {
      state.currentCity = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
