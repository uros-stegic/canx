import React from 'react';
import './style.css';

class Categories extends React.Component {
   	render(){
		return (
    	  <div>
			<h1> CATEGORIES </h1> 
			{this.props.children}	  
		  </div>
    	);
	}
}

export default Categories;
