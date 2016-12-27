import React from 'react';
import {Link} from 'react-router';
import './style.css';
import Logo from './Logo';

class Home extends React.Component {
   	render(){
		return (
		<div className='home-container'>
			
			<Logo />
			<div>
				<Link to='/categories'>
					<div className='home-btn-container'>
						<div className='home-btn'> CATEGORIES </div>
	   		 		</div>
				</Link>
				<Link to='/profile'>
					<div className='home-btn-container'>
						<div className='home-btn'> PROFILE </div>
	   		 		</div>
				</Link>
			</div>	
			<div>
				<Link to='/help'>
					<div className='home-btn-container'>
						<div className='home-btn'> HELP </div>
	   		 		</div>
				 </Link>
				<Link to='/logout'>
					<div className='home-btn-container'>
						<div className='home-btn'> LOGOUT </div>
	   			 	</div>
				</Link>
			</div>	
		</div>
    );}
}

export default Home;
