import { connect } from 'react-redux';
import { makeInvitation } from '../../actions/invitation_actions';

import InvitationForm from './invitation_form';

const mapStateToProps = ({groupDetail}) => ({
  groupDetail: groupDetail
});

const mapDispatchToProps = (dispatch) => ({
  makeInvitation: (invitation) => dispatch(makeInvitation(invitation))
});

export default connect(mapStateToProps, mapDispatchToProps)(InvitationForm)
