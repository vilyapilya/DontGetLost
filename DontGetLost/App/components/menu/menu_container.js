import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Menu from './menu';


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Menu);
