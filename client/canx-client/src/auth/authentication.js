class Auth {
  static login(jwt) {
    localStorage.addtem('jwt', jwt);
  }

  static loggedIn() {
    return !!localStorage.jwt;
  }

  static logOut() {
    localStorage.removeItem('jwt');
  }
}

export default Auth;
