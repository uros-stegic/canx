import auth from '../auth/authentication'

class UserApi {

  static register(user) {
    const headers = Object.assign({'Content-Type': 'application/json'}, auth.authHeaders());
    const request = new Request(`http://localhost:3000/api/users`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(user)
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error
    })
  }

  static login(credentials) {
    const headers = Object.assign({'Content-Type': 'application/json'}, auth.authHeaders());
    const request = new Request(`http://localhost:3000/auth/credentials`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(credentials)
    })

    return fetch(request).then(response => {
      const jwt = response.headers.get("authorization")
      return response.json().then((res) => Object.assign({}, res, {jwt: jwt}))
    }).catch(error => {
      return error
    })
  }

  static update(user) {
    const headers = Object.assign({'Content-Type': 'application/json'}, auth.authHeaders());
    const request = new Request(`http://localhost:3000/api/users/${user.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(user)
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error
    })
  }
}

export default UserApi
