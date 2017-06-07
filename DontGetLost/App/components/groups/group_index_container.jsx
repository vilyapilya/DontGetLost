import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { selectAllGroups } from '../../reducers/selectors';
import {
  requestAllGroups,
  deleteGroup
}
from '../../actions/group_actions';


const mapStateToProps = ( {groups, currentUser} ) => ({
  groups: selectAllGroups(groups),
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllGroups: () => dispatch(requestAllGroups()),
  deleteGroup: (id) => dispatch(deleteGroup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);
