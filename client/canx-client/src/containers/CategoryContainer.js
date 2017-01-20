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
		const catName = this.props.params.category;
		const cats = this.state.categories;
		const category = cats.find((cat) => cat.name.toLowerCase() === catName);
		const ind = cats.map((c) => c.name).indexOf(category.name);
		const beforeInd = (ind === 0) ? (cats.length-1) : ind-1;
		const afterInd = (ind === cats.length-1) ? 0 : ind+1;
		const args = {category: category,
      					  before: cats[beforeInd].name.toLowerCase(),
      					  after: cats[afterInd].name.toLowerCase()};

		return (
    		<Category args={args}/>
		);
	};
}

export default CategoryContainer;
