import React from 'react';
import Modal from 'react-modal';
import {modalStyle} from '../modalStyle';

class Register extends React.Component {
    constructor(...args){
      super(...args);
      this.state = {
        openModal: false
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    };

    openModal(e){
      e.preventDefault();
      this.setState({openModal: true});
    };

    closeModal(){
      this.setState({openModal: false});
    };

   render() {
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
    				<input type='submit' onClick={this.openModal} className='btn form-group login-btn sign-group' value='REGISTER' />
    			</form>

          <Modal isOpen={this.state.openModal}
               onRequestClose={this.closeModal}
               contentLabel="Register"
               shouldCloseOnOverlayClick={true}
               style={modalStyle}>
            <h2> Success! </h2>
            <input className='modal-ok' type='button' value='OK' onClick={this.closeModal}/>
          </Modal>
    		</div>
        );
      };
}

export default Register;
