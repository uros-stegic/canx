class Auth {
  static login(user, jwt) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('jwt', jwt)
  }

  static loggedIn() {
    return !!localStorage.jwt
  }

  static logOut() {
    localStorage.removeItem('user')
    localStorage.removeItem('jwt')
  }

  static authHeaders() {
    return {'AUTHORIZATION': `${localStorage.jwt}`}
  }

  static getRememberedUser() {
    return (!localStorage.user) ? null : JSON.parse(localStorage.user)
  }

  static saveUserState(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}

export default Auth;
