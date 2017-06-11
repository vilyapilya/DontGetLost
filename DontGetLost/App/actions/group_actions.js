import * as GroupAPIUtil from '../util/group_api_util';
import * as MembershipAPIUtil from '../util/group_membership_util';
import { receiveErrors } from './error_actions';

// joinGroup leaveGroup

export const JOIN_GROUP = 'JOIN_GROUP';
export const LEAVE_GROUP = 'LEAVE_GROUP';

export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const REMOVE_GROUP = 'REMOVE_GROUP';

const receiveGroup = group => {
  return {
    type: RECEIVE_GROUP,
    group
  };
};

const receiveAllGroups = groups => {
  return {
    type: RECEIVE_ALL_GROUPS,
    groups
  };
};

const removeGroup = group => {
  return {
    type: REMOVE_GROUP,
    group
  };
};

export const joinGroup = group_id => dispatch => (
  MembershipAPIUtil.joinGroup(group_id)
    .then(data => dispatch(receiveGroup(data)))
)

export const leaveGroup = membership_id => dispatch => (
  MembershipAPIUtil.leaveGroup(membership_id)
    .then(data => dispatch(receiveAllGroups(data)))
)

export const requestSingleGroup = id => dispatch => {
  return (
    GroupAPIUtil
      .getGroup(id)
      .then(group => dispatch(receiveGroup(group)))
  );
};

export const requestAllGroups = () => dispatch => {
  return (
    GroupAPIUtil
      .getGroups()
      .then(groups => dispatch(receiveAllGroups(groups)))
  );
};

export const deleteGroup = id => dispatch => {
  return (
    GroupAPIUtil
      .deleteGroup(id)
      .then(group => dispatch(removeGroup(group)))
  );
};

export const createGroup = group => dispatch => {
  return (
    GroupAPIUtil
      .createGroup(group)
      .then(group => dispatch(receiveGroup(group)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const updateGroup = group => dispatch => {
  return (
    GroupAPIUtil
      .updateGroup(group)
      .then(group => dispatch(receiveGroup(group)))
  );
};
