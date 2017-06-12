import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { selectAllGroups } from '../../reducers/selectors';
import {
  requestSingleGroup,
  requestAllGroups,
  deleteGroup
}
from '../../actions/group_actions';


const mapStateToProps = ( {groups, currentUser} ) => ({
  groups: selectAllGroups(groups),
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleGroup: (id) => dispatch(requestSingleGroup(id)),
  requestAllGroups: () => dispatch(requestAllGroups()),
  deleteGroup: (id) => dispatch(deleteGroup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);
