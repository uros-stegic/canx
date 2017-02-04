import { connect } from 'react-redux'
import Letter from '../views/Letter'
import { getBeforeLetter, getAfterLetter} from '../utils'

function mapStateToProps(state, ownProps) {
  return {
		args: {
	    letter: ownProps.params.letter,
			before: getBeforeLetter(state.categories, ownProps.params),
			after: getAfterLetter(state.categories, ownProps.params),
			title: ownProps.params.category
		}
  }
}

const LetterContainer = connect(
  mapStateToProps
)(Letter)

export default LetterContainer
