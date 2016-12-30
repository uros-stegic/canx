import React from 'react';

function Login(props) {
   	return (
		<div>
			<h1> LOGIN </h1> 
			<form>
				<div className='form-group sign-group'>
					<label> Email: </label>
					<input type='email' name='email' className='form-control'/>
				</div>
				<div className='form-group sign-group'>
					<label> Password: </label>
					<input type='password' name='password' className='form-control'/>
				</div>
				<div className='form-group login-btn sign-group'> LOGIN </div>
			</form>
		</div>
    );
}

export default Login;
