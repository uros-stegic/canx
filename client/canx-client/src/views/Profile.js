import React from 'react';

class Profile extends React.Component {
   	constructor(...args){
		super(...args);
		this.state = {
			openName: false,
			openEmail: false,
			openPass: false
		}
	};

	setOpen(opened) {
		console.log(opened + " OPEN");
		return () => {
			let newState = this.state;
			newState[opened] = true;
			this.setState(newState);
		}
	};
	
	unsetOpen(opened) {
		console.log(opened + " CLOSED");
		return () => {
			let newState = this.state;
			newState[opened] = false;
			this.setState(newState);
		}
	};
	
	render()
	{ 
	   	return (
		  <div className='profile' >
			<h1 className='profile-title'> PROFILE </h1>
			
			<div className='profile-pic-row'>
				<div className='profile-pic-container profile-no-pic'>
					<input type='file' className='profile-pic-input'/>
				</div>
	
				<div className='profile-name-container'>

					<h4> Name: </h4> 
					<div className='sup'  onClick={this.setOpen("openName")}  > </div>
					<div className={(this.state.openName ? "display-none ":"")+"name-text"} > Pera Lazic </div>
					<div className={(!this.state.openName ? "display-none ":"") + "name-input-container"} > 
						<input type='text' className='form-control'/>
						<input type='submit' className='btn' onClick={this.unsetOpen("openName")} value="Save"/>
					</div>		
				</div>
	
			</div>	
			
			<div className='profile-email-container'>
				<h4> Email: </h4> 
				<div className='sup' onClick={this.setOpen("openEmail")} > </div>
				<div className={(this.state.openEmail ? "display-none ":"")+"email-text"}> pera.lazic@gmail.com </div>
				<div className={(!this.state.openEmail ? "display-none ":"") + "email-input-container"}> 
					<input type='email' className='form-control'/>
					<input type='submit' className='btn' onClick={this.unsetOpen("openEmail")} value="Save"/>
				</div>
			</div>
		
		  <div className='profile-pass-container'>
				<h4> Password: </h4> 
				<div className='sup' onClick={this.setOpen("openPass")} > </div>
				<div className={(this.state.openPass ? "display-none ":"")+"pass-text"}> asdasd </div>
				<div className={(!this.state.openPass ? "display-none ":"") + "pass-input-container"}>
					<input type='password' className='form-control'/>
					<input type='submit' className='btn' onClick={this.unsetOpen("openPass")} value="Save"/>
				</div>
		  </div>
		 </div>
	
	    );

	}
}

export default Profile;
