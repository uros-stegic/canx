import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router';
import Logo from './Logo';

const customStyles = {
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
	width				  : '90vw',
	height				  : '50vw',
    transform             : 'translate(-50%, -50%)',
	color				  : '#cccccc',
	backgroundColor		  : '#2f3238',
	borderRadius		  : '0'  
}
};

class Home extends React.Component {
   	constructor(...args){
		super(...args);
		this.state = {
			modalIsOpen: false
		};	
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	};

	openModal(){
	 	this.setState({modalIsOpen: true});
	};

	closeModal(){
		this.setState({modalIsOpen: false});
	};
	
	render(){
		return (
		<div className='home-container'>
			
			<Logo />
			<div>
				<Link to='/categories'>
					<div className='home-btn-container'>
						<div className='categories-icon home-btn'> </div>

	   		 		</div>
				</Link>
				<Link to='/profile'>
					<div className='home-btn-container'>
						<div className='profile-icon home-btn'> </div>
	   		 		</div>
				</Link>
			</div>	
			<div>
				<Link to='/help'>
					<div className='home-btn-container'>
						<div className='help-icon home-btn'> </div>
	   		 		</div>
				 </Link>
					<div className='home-btn-container' onClick={this.openModal}>
						<div className='logout-icon home-btn'> </div>
	   			 	</div>
			</div>
			<Modal isOpen={this.state.modalIsOpen}
				   onRequestClose={this.closeModal}
				   contentLabel="Logout"
				   shouldCloseOnOverlayClick={true}
				   style={customStyles}
				>
			
				<h5> Are you sure? </h5>

				<input className='logout-modal-yes' type='button' value='Yes' onClick={this.closeModal}/> 

				<input className='logout-modal-no' type='button' value='No' onClick={this.closeModal}/> 

			</Modal>
	
		</div>
    );}
}

export default Home;
