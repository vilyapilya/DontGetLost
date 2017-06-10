import * as InvitationAPIUtil from '../util/invitation_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_INVITATION = 'RECEIVE_INVITATION';
export const RECEIVE_ALL_SENT_INVITATIONS = 'RECEIVE_ALL_SENT_INVITATIONS';
export const RECEIVE_ALL_RECEIVED_INVITATIONS = 'RECEIVE_ALL_RECEIVED_INVITATIONS';
export const DELETE_INVITATION = 'DELETE_INVITATION';

const receiveInvitation = (invitation) => (
  type: RECEIVE_INVITATION,
  invitation
);

// const receiveAllSentInvitations = invitations => (
//   type: RECEIVE_ALL_SENT_INVITATIONS,
//   invitations
// );

const receiveAllSentInvitations = invitations => ({
    type: RECEIVE_ALL_SENT_INVITATIONS,
    invitations
});

const receiveAllReceivedInvitations = invitations => ({
  type: RECEIVE_ALL_RECEIVED_INVITATIONS,
  invitations
});

const deleteInvitation = invitation => ({
  type: DELETE_INVITATION,
  invitation
})

export const requestSingleInvitation = invitation => dispatch => (
  InvitationAPIUtil.showInvitation(invitation)
    .then(invitation => dispatch(receiveInvitation(invitation)))
);

export const requestReceivedInvitations = (invitations) => dispatch => (
  InvitationAPIUtil.getReceivedInvitations(invitations)
    .then(invitations => dispatch(receiveAllReceivedInvitations(invitations)))
);

export const requestMadeInvitations = () => dispatch => (
  InvitationAPIUtil.getMadeInvitations()
    .then(data => dispatch(receiveAllSentInvitations(data)))
);

export const makeInvitation = (invitation) => dispatch => (
  InvitationAPIUtil.makeInvitation(invitation)
    .then(invitations => dispatch(receiveAllSentInvitations(invitations)))
);

export const deleteReceivedInvitation = (invitation) => dispatch (
  InvitationAPIUtil.deleteReceivedInvitation(invitation)
    .then(invitations => dispatch(deleteInvitation(invitations)))
);

export const deleteSentInvitation = (invitation_id) => dispatch => (
  InvitationAPIUtil.deleteSentInvitation(invitation_id)
    .then(invitation => dispatch(deleteInvitation(invitation)))
);
