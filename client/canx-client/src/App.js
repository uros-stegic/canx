import React, { Component } from 'react';
import './style.css';
import Nav from './Nav.js';

class App extends Component {
  render() {
   	return (
      <div className="app"> 
		<figure>
			<img src="img/logo.jpg" alt="Logo" className="logo"/>
		</figure>
		<h1 className="title"> CANX </h1>

		<div className="login-btn"> LOGIN </div>
		<div className="login-btn"> SIGN UP </div>
		<Nav />
	  </div>
    );
  }
}

export default App;
