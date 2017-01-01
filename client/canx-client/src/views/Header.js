import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
   	constructor(...args){
		super(...args);
		this.state = {
			open: false
		}
	};

	toggleState(){
		return () => this.setState({open: !this.state.open});
	}
	render() {
		return (
    	  	<div className="header container">
				<div className="row"> 
					<Link to='/home'><div className="header-left col-xs-3"> CANX </div> </Link>
					<div className="header-right col-xs-2 col-xs-offset-7" onClick={()=> this.setState({open: !this.state.open})}> 
						<div className={(this.state.open ? 'header-right-open' : 'header-right-closed') + ' header-right-into'} > </div>
					</div> 
	  			</div>
	
		<div className={"collapsable " + (this.state.open ? 'uncolapse' : 'colapse')}>

			<Link to='/categories' onClick={this.toggleState()}> <div className='nav-bar'><span className='nav-icon categories-icon'></span> DRAW </div></Link>
			<Link to='/profile' onClick={this.toggleState()}> <div className='nav-bar'><span className='nav-icon profile-icon'></span>  PROFILE </div></Link>
			<Link to='/help' onClick={this.toggleState()}> <div className='nav-bar'><span className='nav-icon help-icon'></span>  HELP </div></Link>
			<Link to='/logout' onClick={this.toggleState()}> <div className='nav-bar'><span className='nav-icon logout-icon'></span>  LOGOUT </div></Link>
		
			<div className={this.state.open ? 'clear-dropdown' : ''}> </div>
		</div> 

 		</div>
	 
	);}
}

export default Header;
