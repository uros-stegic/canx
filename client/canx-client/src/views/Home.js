import React from 'react' 
import Modal from 'react-modal' 
import {Link} from 'react-router' 
import Logo from './Logo' 
import {modalStyle} from '../style/modalStyle' 

class Home extends React.Component {
   	constructor(...args) {
		super(...args) 
		this.state = {
			openLogoutModal: false
		} 
		this.openModal = this.openModal.bind(this) 
		this.closeModal = this.closeModal.bind(this) 
	} 

  openModal() {
	 	this.setState({openLogoutModal: true}) 
	} 

	closeModal() {
		this.setState({openLogoutModal: false}) 
	} 

	render() {
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
			<Modal isOpen={this.state.openLogoutModal}
				   onRequestClose={this.closeModal}
				   contentLabel="Logout"
				   shouldCloseOnOverlayClick={true}
				   style={modalStyle}>

	      <h2> Are you sure? </h2>
        <input className='modal-yes' type='button' value='Yes' onClick={this.closeModal}/>
        <input className='modal-no' type='button' value='No' onClick={this.closeModal}/>
      </Modal>
    </div>
    ) }
}

export default Home 
