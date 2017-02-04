import { connect } from 'react-redux'
import Profile from '../views/Profile'
import * as profileActions from '../actions/profileActions'
import {bindActionCreators} from 'redux'

function mapStateToProps(state, ownProps) {
  return {
      args: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer
