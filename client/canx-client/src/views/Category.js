import React from 'react';
import Letters from './Letters'

function Category(props) {
	console.log(props.category.value);
	const category = props.category;   
	return (
		<Letters title={category.name} letters={category.value}/> 
    );
}

export default Category;
