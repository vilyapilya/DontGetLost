import { connect } from 'react-redux';
import Locat from './locat';


const mapStateToProps = ( {group, currentUser} ) => ({
  group: group,
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllGroups: () => dispatch(requestAllGroups()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
