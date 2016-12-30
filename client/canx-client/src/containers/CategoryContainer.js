import React from 'react';
import Category from '../views/Category';

class CategoryContainer extends React.Component {
   	constructor(...args){
		super(...args);
		this.state = {
			categories: [{name: "Uppercase",
						  value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
						  },
						  {name:  "Lowercase",
						   value: "abcdefghijklmnopqrstuvwxyz"
						  },
						  {name: "Numbers",
						   value: "0123456789"
							},
						  {name: "Math",
						   value: "[]{}().*/\\!@#$%^&_-+=><"
							}]
		}
	};
 
	render(){
		const prop=this.state.categories.find((cat) => cat.name.toLowerCase() === this.props.params.category);
		return (
    		<Category category={prop}/>
		);
	};
}

export default CategoryContainer;
