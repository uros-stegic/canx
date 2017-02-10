class Auth {
  static login(jwt) {
    localStorage.setItem('jwt', jwt);
  }

  static loggedIn() {
    return !!localStorage.jwt;
  }

  static logOut() {
    localStorage.removeItem('jwt');
  }

  static authHeaders() {
    return {'AUTHORIZATION': `${localStorage.jwt}`}
  }
}

export default Auth;
