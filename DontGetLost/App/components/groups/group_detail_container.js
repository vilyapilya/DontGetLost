import { connect } from 'react-redux';
import GroupDetail from './group_detail';

import {
  requestSingleGroup,
  deleteGroup
}
from '../../actions/group_actions';


const mapStateToProps = ( {groupDetail, currentUser} ) => ({
  groupDetail: groupDetail,
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleGroup: (id) => dispatch(requestSingleGroup(id)),
  deleteGroup: (id) => dispatch(deleteGroup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
