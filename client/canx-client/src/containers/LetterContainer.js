import React from 'react';
import Letter from '../views/Letter';

class LetterContainer extends React.Component {
	render(){
		return (
    		<Letter letter={this.props.params.letter} category={this.props.params.category}/>
		);
	};
}

export default LetterContainer;
