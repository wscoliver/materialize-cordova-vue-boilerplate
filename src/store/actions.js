import * as types from './mutation-types'
import menu from '../data/menu.js'
export const setPageTitle = ({ commit }, page_title) => {
  commit(types.SET_PAGE_TITLE, { page_title })
}
export const getMenu = ({ commit }) => {
  menu.getMenu().then((menuItems) => commit(types.RECEIVE_MENU, { menuItems }))
}

export const addToOrder = ({ commit }, menuId) => {
  commit(types.ADD_TO_ORDER, { id: menuId })
}
export const removeFromOrder = ({ commit }, menuId) => {
  commit(types.REMOVE_FROM_ORDER, { id: menuId })
}
