import * as types from '../actions/actionTypes'
import initialState from './initialState'
import {browserHistory} from 'react-router'

export default function profileReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.REGISTER_SUCCESS: {
      browserHistory.push(`/home`)
      return Object.assign({}, action.user)
    }
    case types.UPDATE_NAME_SUCCESS: {
      const newState = Object.assign({}, state)
      newState.user.name = action.name
      return newState
    }
    case types.UPDATE_EMAIL_SUCCESS: {
      const newState = Object.assign({}, state)
      newState.user.email = action.email
      return newState
    }
    case types.UPDATE_PASS_SUCCESS: {
      const newState = Object.assign({}, state)
      newState.user.pass = action.pass 
      return newState
    }
    default:
      return state
  }
}
