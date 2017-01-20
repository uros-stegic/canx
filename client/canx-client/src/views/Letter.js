import React from 'react';
import Footer from './Footer';
import Modal from 'react-modal';

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
},
  overlay : {
	zIndex 				  : '20'	
  }
};


class Letter extends React.Component {
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
	
	componentWillMount(){
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	}
	
	
	componentWillUnmount(){
		document.getElementsByTagName('body')[0].style.overflow = 'scroll';
	}

	render(){
		const argsFoot = {left: "/categories/"+this.props.args.title+"/letters/"+this.props.args.letter,
						  right: "/categories/"+this.props.args.title+"/letters/"+this.props.args.letter};
		return ( 
		<div className='letter-page'>
				<h1 className='letter-h1'>
					 {this.props.args.letter}
				</h1>
				<canvas className='letter-canvas'></canvas> 
    			<div className='letter-btn-left' onClick={this.openModal} > </div>
				<div className='letter-btn-right' onClick={this.openModal} > </div>
				<Modal isOpen={this.state.modalIsOpen}
					   onRequestClose={this.closeModal}
					   contentLabel="Logout"
					   shouldCloseOnOverlayClick={true}
					   style={customStyles}
					>
				
					<h5> Are you sure? </h5>
	
					<input className='modal-yes' type='button' value='Yes' onClick={this.closeModal}/> 
	
					<input className='modal-no' type='button' value='No' onClick={this.closeModal}/> 
	
				</Modal>
				<div className='footer-back'></div>
				<Footer args={argsFoot} />
	
			</div>
		);
	};
}

export default Letter;
