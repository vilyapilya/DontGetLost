import { connect } from 'react-redux';
import { register } from '../../actions/session_actions';

import SignUp from './signup';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(register(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
