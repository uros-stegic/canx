class ProfileApi {

  static requestHeaders() {
    return {}//AUTHORIZATION': `Bearer ${localStorage.jwt}`}
  }

  static update(user) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
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

  static register(user) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
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
}

export default ProfileApi
