class Auth {
  static login(user, jwt) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('jwt', jwt)
  }

  static loggedIn() {
    return !!localStorage.jwt
  }

  static logOut() {
    console.log(localStorage.user)
    localStorage.removeItem('user')
    localStorage.removeItem('jwt')
      console.log(localStorage.user)
  }

  static authHeaders() {
    return {'AUTHORIZATION': `Bearer ${localStorage.jwt}`}
  }

  static getRememberedUser() {
    return (!localStorage.user) ? null : JSON.parse(localStorage.user)
  }

  static saveUserState(user) {
    console.log('Stavi user')
    console.log(user)
    localStorage.setItem('user', JSON.stringify(user))
  }
}

export default Auth;
