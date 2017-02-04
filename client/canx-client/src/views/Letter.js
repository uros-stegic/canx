import React from 'react'
import Footer from './Footer'
import Modal from 'react-modal'
import {modalStyle} from '../style/modalStyle.js'

class Letter extends React.Component {
	constructor(...args) {
		super(...args)
		this.ctx = null
		this.canvas = null
		this.rect = null
		this.points = []
		this.lastPoint = null
		this.startTime = null

		this.state = {
			deleteModalIsOpen: false,
			saveModalIsOpen: false,
			strokes: [],
		}
		this.openDeleteModal = this.openDeleteModal.bind(this)
		this.openSaveModal = this.openSaveModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.clearCanvas = this.clearCanvas.bind(this)
		this.saveCanvas = this.saveCanvas.bind(this)
		this.handleOnMouseUp = this.handleOnMouseUp.bind(this)
		this.handleOnMouseDown = this.handleOnMouseDown.bind(this)
		this.handleOnMouseMove = this.handleOnMouseMove.bind(this)
		this.handleOnTouchEnd = this.handleOnTouchEnd.bind(this)
		this.handleOnTouchStart = this.handleOnTouchStart.bind(this)
		this.handleOnTouchMove = this.handleOnTouchMove.bind(this)
		this.onUp = this.onUp.bind(this)
		this.onDown = this.onDown.bind(this)
		this.onMove = this.onMove.bind(this)
	}

	openDeleteModal() {
	 	this.setState({deleteModalIsOpen: true})
	}

	openSaveModal() {
	 	this.setState({saveModalIsOpen: true})
	}

	closeModal() {
		this.setState({deleteModalIsOpen: false, saveModalIsOpen: false})
	}

	componentWillMount() {
		document.getElementsByTagName('body')[0].style.overflow = 'hidden'
	}

	componentWillUnmount() {
		document.getElementsByTagName('body')[0].style.overflow = 'scroll'
		document.removeEventListener('onmouseup', this.handleOnMouseUp, false)
	}

	componentDidMount() {
		document.addEventListener('onmouseup', this.handleOnMouseUp, false)
		this.canvas = document.getElementById('canvas')
		this.rect = this.canvas.getBoundingClientRect()
		this.ctx = this.canvas.getContext('2d')
		let style = window.getComputedStyle(this.canvas)
		this.ctx.canvas.width = parseInt(style.getPropertyValue('width'), 10)
		this.ctx.canvas.height = parseInt(style.getPropertyValue('height'), 10)
		this.ctx.lineWidth = 10
		// this.ctx.shadowBlur = 1;
		// this.ctx.shadowColor = "#cccccc";
		this.ctx.lineJoin = 'round'
		this.ctx.lineCap = 'round'
		this.ctx.strokeStyle = '#cccccc'
	}

	midPoint(p1, p2) {
  		return {
    		x: p1.x + (p2.x - p1.x) / 2,
    		y: p1.y + (p2.y - p1.y) / 2
 		 }
	}

	currentPoint(x, y) {
			return {
				x: Math.round((x-this.rect.left)/(this.rect.right-this.rect.left)*this.canvas.width),
				y: Math.round((y-this.rect.top)/(this.rect.bottom-this.rect.top)*this.canvas.height)
			}
	}

	onDown(x,y) {
		let current = this.currentPoint(x, y)
		this.points.push(current)
		this.lastPoint = current
		this.isDrawing = true
		this.startTime = (new Date()).getTime()
		this.ctx.beginPath()
		this.ctx.arc(current.x, current.y, 1, 0, 2 * Math.PI, true)
		this.ctx.stroke()
		this.ctx.beginPath()
		this.ctx.moveTo(current.x, current.y)
	}

	onUp() {
		let newStrokes = {
			points: this.points,
			startTime: this.startTime,
			endTime: (new Date()).getTime()
		}
		this.isDrawing = false
		this.points = []
		this.lastPoint = null
		this.setState({
				strokes: [ ...this.state.strokes, newStrokes]
			})
	}

	onMove(x, y) {
		let current = this.currentPoint(x, y)

		let midPoint = this.midPoint(this.lastPoint, current)
		this.ctx.quadraticCurveTo(this.lastPoint.x, this.lastPoint.y, midPoint.x, midPoint.y)
		this.ctx.stroke()

		this.points.push(current)
		this.lastPoint = current
	}

	handleOnMouseDown(e) {
		this.onDown(e.clientX, e.clientY)
	}

	handleOnMouseMove(e) {
  	if (!this.isDrawing) return
		this.onMove(e.clientX, e.clientY)
	}

	handleOnMouseUp() {
		this.onUp()
	}

	handleOnTouchStart(e) {
		if(e.touches)
        if(e.touches.length === 1)
            this.onDown(e.touches[0].pageX,e.touches[0].pageY)
  }

	handleOnTouchMove(e) {
  	if(!this.isDrawing) return
		if(e.touches)
				if(e.touches.length === 1)
            this.onMove(e.touches[0].pageX,e.touches[0].pageY)
	}

	handleOnTouchEnd() {
		this.onUp()
	}

	clearCanvas() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		this.closeModal()
	}

	saveCanvas() {
		this.closeModal()
	}

	render() {
		const argsFoot = {left: "/categories/"+this.props.args.title+"/letters/"+this.props.args.before,
						  				right: "/categories/"+this.props.args.title+"/letters/"+this.props.args.after,
											onClick: this.clearCanvas}
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
    			<div className='letter-btn-left' onClick={this.openDeleteModal} > </div>
				<div className='letter-btn-right' onClick={this.openSaveModal} > </div>
				<Modal isOpen={this.state.deleteModalIsOpen}
					   onRequestClose={this.closeModal}
					   contentLabel="Delete"
					   shouldCloseOnOverlayClick={true}
					   style={modalStyle}
					>

					<h2> Are you sure? </h2>

					<button className='modal-yes modal-trash' type='button'  onClick={this.clearCanvas}> </button>

					<button className='modal-no modal-close' type='button' value='No' onClick={this.closeModal}> </button>

				</Modal>

				<Modal isOpen={this.state.saveModalIsOpen}
						 onRequestClose={this.closeModal}
						 contentLabel="Save"
						 shouldCloseOnOverlayClick={true}
						 style={modalStyle}
					>

					<h2> Are you sure? </h2>

					<button className='modal-yes modal-check' type='button'  onClick={this.saveCanvas}> </button>

					<button className='modal-no modal-close' type='button' value='No' onClick={this.closeModal}> </button>

				</Modal>
				<div className='footer-back'></div>
				<Footer args={argsFoot}/>

			</div>
		)
	}
}

export default Letter
