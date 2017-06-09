import { connect } from 'react-redux';
import { createGroup } from '../../actions/groups_actions';

import GroupForm from './login';

const mapDispatchToProps = (dispatch) => ({
  createGroup: (group) => dispatch(createGroup(group))
});

export default connect(null, mapDispatchToProps)(GroupForm);
