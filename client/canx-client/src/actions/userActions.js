import * as types from './actionTypes'
import UserApi from '../api/UserApi'
import auth from '../auth/authentication'

export function registerSuccess(user) {
  return {type: types.REGISTER_SUCCESS, user}
}

export function register(user) {
  return function (dispatch) {
    return UserApi.register(user).then(user => {
      dispatch(registerSuccess(user));
    }).catch(error => {
      throw(error)
    })
  }
}

export function loginSuccess(credentials) {
  return {type: types.LOG_IN_SUCCESS, credentials}
}

export function loginUser(credentials) {
  return function(dispatch) {
    return UserApi.login(credentials).then(response => {
      auth.login(response.jwt)
      dispatch(loginSuccess(response))
    }).catch(error => {
      throw(error)
    })
  }
}

export function logOutSuccess() {
  return {type: types.LOG_OUT_SUCCESS}
}

export function logOutUser() {
  return function(dispatch) {
      auth.logOut()
      return dispatch(logOutSuccess())
    }
}

export function updateProfileSuccess(user) {
  return {type: types.UPDATE_PROFILE_SUCCESS, user}
}

export function updateProfile(user) {
  return function (dispatch) {
    return UserApi.update(user).then(user => {
      dispatch(updateProfileSuccess(user));
    }).catch(error => {
      throw(error)
    })
  }
}
