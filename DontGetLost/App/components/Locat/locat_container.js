import { connect } from 'react-redux';
import Locat from './locat';
import { requestSingleGroup, updateUser } from '../../actions/group_actions';


const mapStateToProps = ( {groupDetail, currentUser} ) => {{
  groupDetail = groupDetail;
  currentUser = currentUser;
  console.log("container");
  console.log(groupDetail);
  return {groupDetail, currentUser};
}};

const mapDispatchToProps = dispatch => ({
  requestSingleGroup: (id) => dispatch(requestSingleGroup(id)),
  updateUser: (id) => dispatch(updateUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Locat);
