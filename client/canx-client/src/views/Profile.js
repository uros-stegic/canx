import React from 'react'
import {testName, testEmail, testPass} from '../utils'
import md5 from 'js-md5'


class Profile extends React.Component {
    constructor(...args){
  		super(...args)
  		this.state = {
  			openName: false,
  			openEmail: false,
  			openPassword: false
      }
      this.user = {
        name: this.props.args.user.name,
        email: this.props.args.user.email,
        password: "",
        oldPassword: this.props.args.user.password,
        avatar: this.props.args.user.avatar
      }
      this.change = this.change.bind(this)
      this.update = this.update.bind(this)
	  }

    unsetOpen(opened) {
		  return () => this.setState({[opened] : false})
    }

   toggleOpen(opened) {
      return () => this.setState({[opened] : !this.state[opened]})
   }

   change(ev) {
     let name = ev.target.name

     switch (name) {
       case "name":
         if(testName(name) === false){
           ev.target.classList.add('btn-err')
           return
         }
         break
       case "email":
         if(testEmail(ev.target.value) === false){
           ev.target.classList.add('btn-err')
           return
         }
         break
       case "password":
         if(testPass(ev.target.value, document.querySelector("input[name='password']").value) === false){
           ev.target.classList.add('btn-err')
           return
         }
         break
      }

      ev.target.classList.remove('btn-err')
   }

   testField(name, value) {
     switch (name) {
       case "name":
          return testName(value)
       case "password":
          return testPass(value)
       case "email":
          return testEmail(value)
     }
     return false
  }
   update(ev){
     ev.preventDefault()
     const name = ev.target.name
     const newValue = document.querySelector(`.form-control[name='${name}']`).value
     console.log(newValue)
     console.log("open"+ name.charAt(0).toUpperCase() + name.slice(1))
     if(this.testField(name, newValue)) {
        this.user[name] = newValue
        this.props.actions.updateProfile({name: this.user.name,
                                          email: this.user.email,
                                          password: (this.user.password === "") ? this.user.oldPassword : md5(this.user.password),
                                          avatar: this.user.avatar,
                                          ident: this.props.args.user.ident,
                                          id: this.props.args.user.id
        })
        this.unsetOpen("open"+ name.charAt(0).toUpperCase() + name.slice(1))()
      }
    console.log(this.user)
   }

   render() {
	   	return (
		  <div className='profile' >
		  <h1 className='profile-title'> PROFILE </h1>

			<div className='profile-pic-row'>
				<div className='profile-pic-container profile-no-pic'>
					<input type='file' className='profile-pic-input'/>
				</div>

				<div className='profile-name-container'>
					<h4> Name: </h4>
					<div className='sup'  onClick={this.toggleOpen("openName")}  > </div>
					<div className={(this.state.openName ? "display-none ":"")+"name-text"} > {this.user.name} </div>
					<div className={(!this.state.openName ? "display-none ":"") + "name-input-container"} >
						<input type='text' className='form-control' name='name' defaultValue={this.user.name} onChange={this.change}/>
						<input type='submit' className='btn' name='name' onClick={this.update} value="Save"/>
					</div>
				</div>

			</div>

			<div className='profile-email-container'>
				<h4> Email: </h4>
				<div className='sup' onClick={this.toggleOpen("openEmail")} > </div>
				<div className={(this.state.openEmail ? "display-none ":"")+"email-text"}> {this.user.email}</div>
          <div className={(!this.state.openEmail ? "display-none ":"") + "email-input-container"}>
          <input type='email' className='form-control' name='email' defaultValue={this.user.email} onChange={this.change}/>
					<input type='submit' className='btn' name='email' onClick={this.update} value="Save"/>
				</div>
			</div>

		  <div className='profile-pass-container'>
				<h4> New password: </h4>
				<div className='sup' onClick={this.toggleOpen("openPassword")} > </div>
				<div className={(this.state.openPassword ? "display-none ":"")+"pass-text"}> {this.user.password} </div>
				<div className={(!this.state.openPassword ? "display-none ":"") + "pass-input-container"}>
					<input type='password' className='form-control' name='password' defaultValue={this.user.password} onChange={this.change} />
					<input type='submit' className='btn' name='password' onClick={this.update} value="Save"/>
				</div>
		  </div>

		 </div>
	  )
  }
}

export default Profile
