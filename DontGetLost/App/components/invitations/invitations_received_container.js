import { connect } from 'react-redux';
import {
  requestSingleInvitation,
  requestReceivedInvitations,
  requestMadeInvitations,
  makeInvitation,
  deleteReceivedInvitation,
  deleteSentInvitation
 } from '../../actions/invitation_actions';

 import {
   joinGroup,
   leaveGroup
 } from '../../actions/group_actions';

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
  deleteReceivedInvitation: (invitation_id) => dispatch(deleteReceivedInvitation(invitation_id)),
  joinGroup: (group_id) => dispatch(joinGroup(group_id)),
  // leaveGroup: (membership_id) => dispatch(leaveGroup(membership_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(InvitationsReceived);
