import React, { Component } from 'react';
import './style.css';
  
class Nav extends Component {
  render() {        
    return (
	 <div className="control-nav container-fluid">
        <div className="row">
         	<div className="col-xs-2 col-sm-2 "> </div>
            <div className="col-xs-2 col-sm-2 "> </div>
            <div className=" col-xs-2 col-sm-2 col-xs-offset-6 col-sm-offset-6 "> </div>
        </div>
    </div>
);}
}

export default Nav;
