// store/modules/navigation.js

import * as types from '../mutation-types'
// State Code here.
const state = {
  page_title: 'Home'
}

// Mutation Code here.
const mutations = {
  [types.SET_PAGE_TITLE] (state, { page_title }) {
    state.page_title = page_title
  }
}

export default {
  state,
  mutations
}
