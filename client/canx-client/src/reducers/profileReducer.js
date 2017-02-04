import * as types from '../actions/actionTypes'
import initialState from './initialState'
import {browserHistory} from 'react-router'

export default function profileReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.REGISTER_SUCCESS: {
      browserHistory.push(`/home`)
      return Object.assign({}, action.user)
    }
    case types.UPDATE_PROFILE_SUCCESS: {
      return Object.assign({}, state, action.user)
    }
    case types.LOG_OUT: {
      browserHistory.push(`/`)
      return Object.assign(state, {user: {},
                                   logged: false})
    }
    default:
      return state
  }
}
