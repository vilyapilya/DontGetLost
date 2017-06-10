import { connect } from 'react-redux';
import {
  requestSingleInvitation,
  requestReceivedInvitations,
  requestMadeInvitations,
  makeInvitation,
  deleteReceivedInvitation,
  deleteSentInvitation
 } from '../../actions/invitation_actions';

import InvitationsSent from './invitations_sent';

const mapStateToProps = ({invitations, errors}) => {
  return {
    invitations: invitations,
    errors: errors
  }
}

const mapDispatchToProps = (dispatch) => ({
  // requestSingleInvitation: (invitation) => dispatch(requestSingleInvitation(invitation)),
  // requestReceivedInvitations: (invitation) => dispatch(requestReceivedInvitations(invitation)),
  requestMadeInvitations: () => dispatch(requestMadeInvitations()),
  // makeInvitation: (invitation) => dispatch(makeInvitation(invitation)),
  // deleteReceivedInvitation: (invitation) => dispatch(deleteReceivedInvitation(invitation)),
  deleteSentInvitation: (invitation_id) => dispatch(deleteSentInvitation(invitation_id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InvitationsSent);
