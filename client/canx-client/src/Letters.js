import React from 'react';
import './style.css';
import Letter from "./Letter"

function Letters(props) {
   const letters = props.route.letters.split(""); 
   const title = props.route.title;
 
   	return (
      <div className="letters row">
		 <div className="letters-title col-xs-12"> {title} </div>  
		 { letters.map((letter) => <Letter key={letter} letter={letter} />)}	  
	 </div>
    );
}

export default Letters;
