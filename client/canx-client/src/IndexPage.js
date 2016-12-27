import React from 'react';
import {Link} from 'react-router';
import './style.css';
import Logo from './Logo'

function IndexPage(props) {
   	return (
      <div className="index">
		<Logo/> 
		<h1 className="title"> CANX</h1>

		<Link to='/login'> <div className="login-btn"> LOGIN </div> </Link> 
		<Link to='/register'><div className="login-btn">  REGISTER </div></Link> 
	  </div>
    );
}

export default IndexPage;
