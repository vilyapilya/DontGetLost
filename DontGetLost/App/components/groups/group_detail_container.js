import { connect } from 'react-redux';
import GroupDetail from './group_detail';

import {
  requestSingleGroup,
  deleteGroup
}
from '../../actions/group_actions';

<<<<<<< HEAD

const mapStateToProps = ( {groupDetail, currentUser} ) => ({
  groupDetail: groupDetail,
=======
const mapStateToProps = ( {group, currentUser} ) => ({
  group: group,
>>>>>>> loc
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
  requestSingleGroup: (id) => dispatch(requestSingleGroup(id)),
  deleteGroup: (id) => dispatch(deleteGroup(id))
=======

>>>>>>> loc
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
