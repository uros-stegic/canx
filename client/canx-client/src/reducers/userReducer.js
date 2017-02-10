import * as types from '../actions/actionTypes'
import {browserHistory} from 'react-router'

export default function userReducer(state = {}, action) {
  switch(action.type) {
    case types.REGISTER_SUCCESS: {
      browserHistory.push(`/login`)
      return action.user
    }
    case types.LOG_IN_SUCCESS: {
      browserHistory.push('/home')
      return action.credentials
    }
    case types.LOG_OUT_SUCCESS: {
      browserHistory.push('/')
      return Object.assign({}, state, { logged: !!localStorage.jwt}, {user: {}})
    }
    case types.UPDATE_PROFILE_SUCCESS: {
      return action.user
    }
    default:
      return state
  }
}
