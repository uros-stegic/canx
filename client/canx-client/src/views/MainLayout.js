import React from 'react';
import Header from './Header';

function MainLayout(props) {
   	return (
    	  <div>
    			<Header />
    			<div className='footer-back'></div>
    			{props.children}
  	   </div>
    );
}

export default MainLayout;
