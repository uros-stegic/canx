import * as types from '../actions/actionTypes'
import initialState from './initialState'
import {browserHistory} from 'react-router'

export default function authReducer(state = initialState.logged, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      browserHistory.push('/home')
      return !!localStorage.jwt
    case types.LOG_OUT:
      browserHistory.push('/')
      return !!localStorage.jwt
    default:
      return state
  }
}
