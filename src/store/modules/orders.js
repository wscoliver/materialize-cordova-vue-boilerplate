// store/modules/products.js
import * as types from '../mutation-types'
// State Code here.
const state = {
  all: []
}

// Mutation Code here.
const mutations = {
  [types.ADD_TO_ORDER] (state, { id }) {
    const record = state.all.find(p => parseInt(p.id) === parseInt(id))
    if(!record) {
      state.all.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  [types.REMOVE_FROM_ORDER] (state, { id }) {
    const record = state.all.find(p => parseInt(p.id) === parseInt(id))
    if(record.quantity == 1) {
      state.all = state.all.filter(p => parseInt(p.id) !== parseInt(id))
    } else {
      record.quantity--
    }
  },
}

export default {
  state,
  mutations
}
