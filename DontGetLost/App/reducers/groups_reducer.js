import merge from 'lodash/merge';

import {
  RECEIVE_GROUP,
  RECEIVE_ALL_GROUPS,
  REMOVE_GROUP
}
from '../actions/group_actions';

const groupsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_GROUP:
      const group = action.group;
      newState[group.id] = group;
      return newState;
    case RECEIVE_ALL_GROUPS:
      const groups = action.groups;
      return groups;
    case REMOVE_GROUP:
      delete newState[action.group.id];
      return newState;
    default:
      return state;
  }
};

export default groupsReducer;
