import React from 'react';
import './style.css';


class App extends React.Component {
	render(){
   	return (
      <div className="app"> 
	  	{this.props.children}
	  </div>
    );}
}

export default App;
