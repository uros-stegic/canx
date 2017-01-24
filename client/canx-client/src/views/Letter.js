import React from 'react';
import Footer from './Footer';
import Modal from 'react-modal';
import {modalStyle} from '../modalStyle.js';

class Letter extends React.Component {
	constructor(...args){
		super(...args);
		this.ctx = null;
		this.canvas = null;
		this.rect = null;
		this.points = [];
		this.lastPoint = null;

		this.state = {
			modalIsOpen: false,
			strokes: [],
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleOnMouseUp = this.handleOnMouseUp.bind(this);
		this.handleOnMouseDown = this.handleOnMouseDown.bind(this);
		this.handleOnMouseMove = this.handleOnMouseMove.bind(this);
		this.handleOnTouchEnd = this.handleOnTouchEnd.bind(this);
		this.handleOnTouchStart = this.handleOnTouchStart.bind(this);
		this.handleOnTouchMove = this.handleOnTouchMove.bind(this);
		this.onUp = this.onUp.bind(this);
		this.onDown = this.onDown.bind(this);
		this.onMove = this.onMove.bind(this);
	};

	openModal(){
	 	this.setState({modalIsOpen: true});
	};

	closeModal(){
		this.setState({modalIsOpen: false});
	};

	componentWillMount(){
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	};

	componentWillUnmount(){
		document.getElementsByTagName('body')[0].style.overflow = 'scroll';
	};

	midPoint(p1, p2) {
  		return {
    		x: p1.x + (p2.x - p1.x) / 2,
    		y: p1.y + (p2.y - p1.y) / 2
 		 };
	};

	currentPoint(x, y) {
		return {
			x: Math.round((x-this.rect.left)/(this.rect.right-this.rect.left)*this.canvas.width),
			y: Math.round((y-this.rect.top)/(this.rect.bottom-this.rect.top)*this.canvas.height)
		};
	};

	componentDidMount(){
		this.canvas = document.getElementById('canvas');
		this.rect = this.canvas.getBoundingClientRect();
		this.ctx = document.getElementById('canvas').getContext('2d');
		this.ctx.lineWidth = 5;
		this.ctx.lineJoin = this.ctx.lineCap = 'round';
		this.ctx.strokeStyle = '#cccccc';
	};

	onDown(x,y) {
		let current = this.currentPoint(x, y);
		this.points.push(current);
		this.lastPoint = current;
		this.ctx.beginPath();
		this.ctx.moveTo(current.x, current.y);
		this.isDrawing = true;
	};

	onUp(){
		let newStrokes = this.state.strokes;
		newStrokes.push(this.points);
		this.isDrawing = false;
		this.points = [];
		this.lastPoint = null;
		this.setState({
				strokes: newStrokes
			});
	};

	onMove(x, y){
		let current = this.currentPoint(x, y);
		this.points.push(current);
		let midPoint = this.midPoint(this.lastPoint, current);
		this.ctx.quadraticCurveTo(this.lastPoint.x, this.lastPoint.y, midPoint.x, midPoint.y);
		this.ctx.stroke();
		this.lastPoint = current;
	};

	handleOnMouseDown(e){
		this.onDown(e.clientX, e.clientY);
	};

	handleOnMouseMove(e){
  	if (!this.isDrawing) return;
			this.onMove(e.clientX, e.clientY);
	};

	handleOnMouseUp(){
		this.onUp();
	};

	handleOnTouchStart(e){
		if(e.touches) {
        if (e.touches.length == 1) {
            this.onDown(e.touches[0].pageX,e.touches[0].pageY);
        }
    }
	}

	handleOnTouchMove(e){
  	if (!this.isDrawing) return;
		if(e.touches) {
				if (e.touches.length == 1) {
            this.onMove(e.touches[0].pageX,e.touches[0].pageY);
					}
    }
	}

	handleOnTouchEnd(){
		this.onUp();
	}

	render(){

		const argsFoot = {left: "/categories/"+this.props.args.title+"/letters/"+this.props.args.letter,
						  right: "/categories/"+this.props.args.title+"/letters/"+this.props.args.letter};
		return (
		<div className='letter-page'>
				<h1 className='letter-h1'>
					 {this.props.args.letter}
				</h1>
				<canvas id='canvas'
						className='letter-canvas'
						onMouseDown={this.handleOnMouseDown}
						onMouseUp={this.handleOnMouseUp}
						onMouseMove={this.handleOnMouseMove}
						onTouchStart={this.handleOnTouchStart}
						onTouchEnd={this.handleOnTouchEnd}
						onTouchMove={this.handleOnTouchMove}
				></canvas>
    			<div className='letter-btn-left' onClick={this.openModal} > </div>
				<div className='letter-btn-right' onClick={this.openModal} > </div>
				<Modal isOpen={this.state.modalIsOpen}
					   onRequestClose={this.closeModal}
					   contentLabel="Modal"
					   shouldCloseOnOverlayClick={true}
					   style={modalStyle}
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
