import { connect } from 'react-redux';
import Profile from '../views/Profile';

const mapStateToProps = (state, ownProps) => {
  return state.user;
}

const ProfileContainer = connect(
  mapStateToProps
)(Profile)

export default ProfileContainer;
