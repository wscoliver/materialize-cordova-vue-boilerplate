// store/index.js
import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import auth from './modules/auth'
import navigation from './modules/navigation'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    navigation,
    products
  },
  strict: true
})

