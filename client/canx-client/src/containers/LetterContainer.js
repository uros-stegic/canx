import React from 'react';
import Letter from '../views/Letter';

class LetterContainer extends React.Component {
	render(){
		const args = {letter: this.props.params.letter,
					  title: this.props.params.category};
		return (
    		<Letter args={args} />
		);
	};
}

export default LetterContainer;
