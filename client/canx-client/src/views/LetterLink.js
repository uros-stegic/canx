import React from 'react';
import {Link} from 'react-router';

function LetterLink(props) {
   const letter = props.letter; 
   const category = props.category; 
   	return (
      <div className="letter-col col-xs-3"> 
		<div className="letter-container">
		   <div className="letter">	
			<Link to={"/categories/"+category.toLowerCase()+"/letters/"+letter} >{letter} </Link>
	       </div>
	   </div>
	  </div>
    );
}

export default LetterLink;
