// store/modules/products.js
import * as types from '../mutation-types'
// State Code here.
const state = {
  menu: []
}

// Mutation Code here.
const mutations = {
  [types.RECEIVE_MENU] (state, { menuItems }) {
    state.menu = menuItems
  }
}

export default {
  state,
  mutations
}
