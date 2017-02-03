import * as types from './mutation-types'
import menu from '../data/menu.js'
export const setPageTitle = ({ commit }, page_title) => {
  commit(types.SET_PAGE_TITLE, { page_title })
}
export const getMenu = ({ commit }) => {
  menu.getMenu().then((menuItems) => commit(types.RECEIVE_MENU, { menuItems }))
}
