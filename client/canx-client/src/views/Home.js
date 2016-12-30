import React from 'react';
import {Link} from 'react-router';
import Logo from './Logo';

class Home extends React.Component {
   	render(){
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
				<Link to='/logout'>
					<div className='home-btn-container'>
						<div className='logout-icon home-btn'> </div>
	   			 	</div>
				</Link>
			</div>	
		</div>
    );}
}

export default Home;
