import React from 'react';
import Letter from "./Letter"

function Letters(props) {
   const letters = props.letters.split(""); 
   const title = props.title;
 
   	return (
      <div className="letters row">
		 <div className="letters-title col-xs-12"> {title} </div>  
		 { letters.map((letter) => <Letter key={letter} letter={letter} />)}	  
	 </div>
    );
}

export default Letters;
