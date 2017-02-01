import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function categoriesReducer(state = initialState.categories, action) {
  switch(action.type) {
    case types.LOAD_CATEGORIES_SUCCESS:
      return Object.assign([], state, action.categories)
    default:
      return state
  }
}
