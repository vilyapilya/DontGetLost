import { connect } from 'react-redux';
import {
  requestSingleInvitation,
  requestReceivedInvitations,
  requestMadeInvitations,
  makeInvitation,
  deleteReceivedInvitation,
  deleteSentInvitation
 } from '../../actions/invitation_actions';

import InvitationsReceived from './invitations_received';

const mapStateToProps = ({invitations, errors}) => {
  return {
    invitations: invitations,
    errors: errors
  }
}

const mapDispatchToProps = (dispatch) => ({
  // requestSingleInvitation: (invitation) => dispatch(requestSingleInvitation(invitation)),
  requestReceivedInvitations: (invitations) => dispatch(requestReceivedInvitations(invitations)),
  // requestMadeInvitations: () => dispatch(requestMadeInvitations()),
  // makeInvitation: (invitation) => dispatch(makeInvitation(invitation)),
  deleteReceivedInvitation: (invitation_id) => dispatch(deleteReceivedInvitation(invitation_id)),
  // deleteSentInvitation: (invitation_id) => dispatch(deleteSentInvitation(invitation_id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InvitationsReceived);
