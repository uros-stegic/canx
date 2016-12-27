import React from 'react';
import './style.css';
import Footer from './Footer';
import Header from './Header';

class Main extends React.Component {
   render(){
		return (
    	  <div > 
			<Header />
			{this.props.children}
			<Footer />
	  	</div>
    );}
}

export default Main;
