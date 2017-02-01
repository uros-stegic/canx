import { connect } from 'react-redux' 
import Category from '../views/Category' 
import { getFilteredCategory, getBeforeCategory, getAfterCategory} from '../utils' 

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


export default CategoryContainer 
