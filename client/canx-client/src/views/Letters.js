import React from 'react';
import LetterLink from "./LetterLink"

function Letters(props) {
   const letters = props.letters.split(""); 
   const title = props.title;
 
   	return (
      <div className="letters row">
		 <div className="letters-title col-xs-12"> {title} </div>  
		 { letters.map((letter) => <LetterLink key={letter} letter={letter} category={title} />)}	  
	 </div>
    );
}

export default Letters;
