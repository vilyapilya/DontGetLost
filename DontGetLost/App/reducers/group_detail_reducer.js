import merge from 'lodash/merge';

import {
  RECEIVE_GROUP,
  REMOVE_GROUP
}
from '../actions/group_actions';

const groupDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_GROUP:
      return action.group;
    default:
      return state;
  }
};

export default groupDetailReducer;
