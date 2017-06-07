import * as GroupAPIUtil from '../util/group_api_util';

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
