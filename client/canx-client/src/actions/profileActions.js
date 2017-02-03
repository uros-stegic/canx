import * as types from './actionTypes';
import profileApi from '../api/ProfileApi';

export function updateProfileSuccess(user) {
  return {type: types.UPDATE_PROFILE_SUCCESS, user}
}

export function updateProfile(user) {
  return function (dispatch) {
    return profileApi.update(user).then(user => {
      dispatch(updateProfileSuccess(user));
    }).catch(error => {
      throw(error)
    })
  }
}

export function registerSuccess(user) {
  return {type: types.REGISTER_SUCCESS, user}
}

export function register(user) {
  return function (dispatch) {
    return profileApi.register(user).then(user => {
      dispatch(registerSuccess(user));
    }).catch(error => {
      throw(error)
    })
  }
}
