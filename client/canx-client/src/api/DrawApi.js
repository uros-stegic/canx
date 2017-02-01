class DrawApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${localStorage.jwt}`}
  }

  // TODO: implement draw process logic
  static postDraw(draw) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3000/api/user/draw`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({draw: draw})
    })

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error
    })
  }
}

export default DrawApi
