import React from 'react';

function Register(props) {
   	return (
		<div>
			<h1> REGISTER </h1> 
			<form>
				<div className='form-group sign-group'>
						<label> Name and surname: </label>
						<input type='text' name='name' className='form-control'/>
				</div>
				<div className='form-group sign-group'>
						<label> Email: </label>
						<input type='email' name='email' className='form-control'/>
				</div>
				<div className='form-group sign-group'>
						<label> Password: </label>
						<input type='password' name='password' className='form-control'/>
				</div>
				<div className='form-group sign-group'>
						<label> Confirm password: </label>
						<input type='password' name='confitmPassword' className='form-control'/>
				</div>
				<div className='form-group login-btn sign-group'> REGISTER </div>
			</form>
		</div>
    );
}

export default Register;
