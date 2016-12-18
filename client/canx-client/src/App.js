import React, { Component } from 'react';
import './App.css';

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
		<div className="control-nav container-fluid">
			<div className="row">
				<div className="col-xs-2 col-sm-2 "> </div>
				<div className="col-xs-2 col-sm-2 "> </div>
				<div className=" col-xs-2 col-sm-2 col-xs-offset-6 col-sm-offset-6 "> </div>

	 		</div>
	 	</div>
	  </div>
    );
  }
}

export default App;
