import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import selection from './modules/selection'

Vue.use(Vuex) 

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  actions,
  modules: {
    selection
  },
  strict: debug
})

export default store