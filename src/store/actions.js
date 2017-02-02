import * as types from './mutation-types'

export const setPageTitle = ({ commit }, page_title) => {
  commit(types.SET_PAGE_TITLE, { page_title })
}

