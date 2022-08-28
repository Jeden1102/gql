import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filtersData : {
      selected_continent:{
        value : -1,
        label : "Continent",
        field : "selected_continent"
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
