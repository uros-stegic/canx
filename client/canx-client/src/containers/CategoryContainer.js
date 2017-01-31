import { connect } from 'react-redux';
import Category from '../views/Category';
import { getFilteredCategory, getBeforeCategory, getAfterCategory} from '../utils';


// class CategoryContainer extends React.Component {
//    	constructor(...args){
// 		super(...args);
// 		this.state = {
// 			categories: [{name: "Uppercase",
//       						  value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//       						  },
//       						  {name:  "Lowercase",
//       						   value: "abcdefghijklmnopqrstuvwxyz"
//       						  },
//       						  {name: "Numbers",
//       						   value: "0123456789"
//       							},
//       						  {name: "Math",
//       						   value: "[]{}().*/\\!@#$%^&_-+=><"
//       							}]
// 		}
// 	};
//
// 	render(){
// 		const catName = this.props.params.category;
// 		const cats = this.state.categories;
// 		const category = cats.find((cat) => cat.name.toLowerCase() === catName);
// 		const ind = cats.map((c) => c.name).indexOf(category.name);
// 		const beforeInd = (ind === 0) ? (cats.length-1) : ind-1;
// 		const afterInd = (ind === cats.length-1) ? 0 : ind+1;
// 		const args = {
//       category: category,
//       before: cats[beforeInd].name.toLowerCase(),
//       after: cats[afterInd].name.toLowerCase()};
//
// 		return (
//     		<Category args={args}/>
// 		);
// 	};
// }

const mapStateToProps = (state, ownProps) => {
  return {
		args: {
	    category: getFilteredCategory(state.categories, ownProps.params.category),
			before: getBeforeCategory(state.categories, ownProps.params.category),
			after: getAfterCategory(state.categories, ownProps.params.category)
		}
  }
}

const CategoryContainer = connect(
  mapStateToProps
)(Category)


export default CategoryContainer;
