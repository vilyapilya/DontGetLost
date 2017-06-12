import { connect } from 'react-redux';
import Locat from './locat';
import { requestSingleGroup } from '../../actions/group_actions';


const mapStateToProps = ( {groupDetail, currentUser} ) => ({
  groupDetail: groupDetail,
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleGroup: (id) => dispatch(requestSingleGroup(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Locat);
