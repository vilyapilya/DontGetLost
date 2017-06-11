import { connect } from 'react-redux';
import GroupDetail from './group_detail';


const mapStateToProps = ( {groups, currentUser} ) => ({

  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);
