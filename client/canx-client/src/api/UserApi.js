import auth from '../auth/authentication'

class UserApi {

  static register(user) {
    const headers = Object.assign({'Content-Type': 'application/json'})
    const request = new Request(`http://localhost:3000/auth/registration`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(user)
    })

    return fetch(request).then(response => {
      const jwt = response.headers.get("authorization")
      return response.json().then((res) => Object.assign({user: res, jwt})) })
                            .catch(error => { return error })
  }

  static login(credentials) {
    const headers = Object.assign({'Content-Type': 'application/json'})// auth.authHeaders());
    const request = new Request(`http://localhost:3000/auth/credentials`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(credentials)
    })

    return fetch(request).then(response => {
      const jwt = response.headers.get("authorization")
      return response.json().then((res) => Object.assign({ user: res, jwt }) )
    }).catch(error => {
      return error
    })
  }

  static update(user) {
    const headers = Object.assign({'Content-Type': 'application/json'}, auth.authHeaders())
    const request = new Request(`http://localhost:3000/api/users/${user.id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(user)
    })

    return fetch(request).then(response => {
      return response
    }).catch(error => {
      return error
    })
  }

  static updatePhoto(user) {
    const headers = Object.assign({'Content-Type': 'application/json', 'Accept': 'application/json'}, auth.authHeaders())
    const tokens = user.avatar.match(/data:(.*)\/(.*);base64,(.*)/)
    const body = { format: tokens[2] ,
                   content: tokens[3]}
    const request = new Request(`http://localhost:3000/api/users/${user.id}/avatar`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(body)
    })

    return fetch(request).then(response => {
      return response.text().then((r) => r)
    }).catch(error => {
      return error
    })
  }
}

export default UserApi
