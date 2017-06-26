import { connect } from 'react-redux';
import { login, receiveCurrentUser } from '../../actions/session_actions';

import Login from './login';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
