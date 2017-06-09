import * as InvitationAPIUtil from '../util/invitation_api_util';
import { receiveErrors } from './error_actions';

const RECEIVE_INVITATION = 'RECEIVE_INVITATION';
const RECEIVE_ALL_SENT_INVITATIONS = 'RECEIVE_ALL_SENT_INVITATIONS';
const RECEIVE_ALL_RECEIVED_INVITATIONS = 'RECEIVE_ALL_RECEIVED_INVITATIONS';
const DELETE_INVITATION = 'DELETE_INVITATION';

const receiveInvitation = (invitation) => (
  type: RECEIVE_INVITATION,
  invitation
);

const receiveAllSentInvitations = invitations => (
  type: RECEIVE_ALL_SENT_INVITATIONS,
  invitations
);

const receiveAllReceivedInvitations = invitations => (
  type: RECEIVE_ALL_RECEIVED_INVITATIONS,
  invitations
);

const deleteInvitation = invitation => (
  type: DELETE_INVITATION,
  invitation
)

export const requestSingleInvitation = invitation => dispatch => (
  InvitationAPIUtil.showInvitation(invitation)
    .then(invitation => dispatch(receiveInvitation(invitation)))
);

export const requestReceivedInvitations = (invitations) => dispatch => (
  InvitationAPIUtil.getMadeInvitations(invitations)
    .then(invitations => dispatch(receiveAllReceivedInvitations(invitations)))
);

export const requestMadeInvitations = (invitations) => dispatch => (
  InvitationAPIUtil.getReceivedInvitations(invitations)
    .then(invitations => dispatch(receiveAllSentInvitations(invitations)))
);

export const makeInvitation = (invitation) => dispatch => (
  InvitationAPIUtil.makeInvitation(invitation)
    .then(invitations => dispatch(receiveAllSentInvitations(invitations)))
);

export const deleteReceivedInvitation = (invitation) => dispatch (
  InvitationAPIUtil.deleteReceivedInvitation(invitation)
    .then(invitations => dispatch(deleteInvitation(invitations)))
);

export const deleteSentInvitation = (invitation) => dispatch => (
  InvitationAPIUtil.deleteSentInvitation(invitation)
    .then(invitations => dispatch(deleteInvitation(invitations)))
);
