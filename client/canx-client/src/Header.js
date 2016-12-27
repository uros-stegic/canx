import React, {Component} from 'react';
import {Link} from 'react-router';
import './style.css';

class Header extends Component {
   	constructor(...args){
		super(...args);
		this.state = {
			open: false
		}
	};

	toggleState(){
		this.setState({open: !this.state.open});
	}
	render() {
		return (
    	  	<div className="header container">
				<div className="row"> 
					<div className="header-left col-xs-3"> CANX </div>
					<div className={(this.state.open ? 'header-right-open' : 'header-right-closed') + " header-right col-xs-2 col-xs-offset-7 "} onClick={()=> this.setState({open: !this.state.open})}></div> 
	  			</div>
	
		<div className={"collapsable " + (this.state.open ? 'uncolapse' : 'colapse')}>

			<Link to='/categories' onClick={()=> this.setState({open: !this.state.open})}> <div className='nav-bar'> CATEGORIES </div></Link>
			<Link to='/profile' onClick={()=> this.setState({open: !this.state.open})}> <div className='nav-bar'> PROFILE </div></Link>
			<Link to='/help' onClick={()=> this.setState({open: !this.state.open})}> <div className='nav-bar'> HELP </div></Link>
			<Link to='/logout' onClick={()=> this.setState({open: !this.state.open})}> <div className='nav-bar'> LOGOUT </div></Link>
		
			<div className={this.state.open ? 'clear-dropdown' : ''}> </div>
		</div> 

 		</div>
	 
	);}
}

export default Header;
