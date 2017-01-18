import React from 'react';
import Header from './Header';

class MainLayout extends React.Component {
   	
	render(){
		return (
    	  <div > 
			<Header />
			<div className='footer-back'></div>
			{this.props.children}
  	</div>
    );}
}

export default MainLayout;
