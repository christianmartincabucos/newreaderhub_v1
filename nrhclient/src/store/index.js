import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import post from './post'
import profile from './profile'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    post,
    profile,
  }
})
