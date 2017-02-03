import React from 'react'
import Modal from 'react-modal'
import {modalStyle} from '../style/modalStyle'
import {testName, testEmail, testPass, testConfirmPass} from '../utils'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as registerActions from '../actions/profileActions'
import md5 from 'js-md5'

class Register extends React.Component {
    constructor(...args) {
      super(...args)
      this.state = {
        openModal: false
      }
      this.user = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.onBlur = this.onBlur.bind(this)
      this.createUser = this.createUser.bind(this)
    }

    openModal(e) {
      e.preventDefault()
      this.setState({openModal: true})
    }

    closeModal() {
      this.setState({openModal: false})
    }

    createUser(e) {
        e.preventDefault()
        if(testName(this.user.name) && testEmail(this.user.email) && testPass(this.user.password) && testConfirmPass(this.user.password, this.user.confirmPassword))
          this.props.actions.register({ name: this.user.name,
            email: this.user.email,
            password: md5(this.user.password),
            avatar: "",
            ident: ""
          })

        this.closeModal()

    }

    onBlur(ev) {
      let name = ev.target.name

      switch (name) {
        case "name":
          if(testName(name) === false){
            ev.target.classList.add('btn-err')
            return
          }
          break;
        case "email":
          if(testEmail(ev.target.value) === false){
            ev.target.classList.add('btn-err')
            return
          }
          break;
        case "password":
          if(testPass(ev.target.value, document.querySelector("input[name='password']").value) === false){
            ev.target.classList.add('btn-err')
            return
          }
          break;
        case "confirmPassword":
          if(testConfirmPass(ev.target.value) === false){
            ev.target.classList.add('btn-err')
            return
          }
          break;
      }
      ev.target.classList.remove('btn-err')
      this.user[name] = ev.target.value
    }

   render() {
     	return (
    		<div>
    			<h1> REGISTER </h1>
    			<form>
    				<div className='form-group sign-group'>
    						<label> Name and surname: </label>
    						<input type='text' name='name' onBlur={this.onBlur} className='form-control'/>
    				</div>
    				<div className='form-group sign-group'>
    						<label> Email: </label>
    						<input type='email' name='email' onBlur={this.onBlur} className='form-control'/>
    				</div>
    				<div className='form-group sign-group'>
    						<label> Password: </label>
    						<input type='password' name='password' onBlur={this.onBlur} className='form-control'/>
    				</div>
    				<div className='form-group sign-group'>
    						<label> Confirm password: </label>
    						<input type='password' name='confirmPassword' onBlur={this.onBlur} className='form-control'/>
    				</div>
    				<input type='submit' onClick={this.openModal} className='btn form-group login-btn sign-group' value='REGISTER' />
    			</form>

          <Modal isOpen={this.state.openModal}
               onRequestClose={this.closeModal}
               contentLabel="Register"
               shouldCloseOnOverlayClick={true}
               style={modalStyle}>
            <ul className='modal-register-list'>
              <li> Name: {this.user.name} </li>
              <li> Email: {this.user.email} </li>
              <li> Password length: {this.user.password.length} </li>
            </ul>
            <div className='modal-register-title'> Are you sure? </div>
            <button className='modal-yes  modal-check' onClick={this.createUser}> </button>
            <button className='modal-no  modal-close' onClick={this.closeModal}> </button>
          </Modal>
    		</div>
        )
      }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registerActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Register)
