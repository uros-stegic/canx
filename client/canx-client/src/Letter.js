import React from 'react';
import './style.css';

function Letter(props) {
   const letter = props.letter; 
   	return (
      <div className="letter-col col-xs-3"> 
		<div className="letter-container">
		   <div className="letter">	
			{letter}
	       </div>
	   </div>
	  </div>
    );
}

export default Letter;
