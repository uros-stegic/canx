import * as types from './actionTypes'
import authApi from '../api/AuthApi'
import auth from '../auth/authentication'


export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
  return function(dispatch) {
    return authApi.login(credentials).then(response => {
      auth.login(response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error)
    })
  }
}

export function logOutUser() {
  auth.logOut()
  return {type: types.LOG_OUT}
}
