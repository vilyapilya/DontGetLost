import RECEIVE_CURRENT_USER from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
  currentUser: null
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  console.log(action.type);
  console.log(action.user);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      console.log("hello");
      let currentUser = action.currentUser;
      const newState = merge({}, state, {currentUser});
      return newState;
    default:
      console.log("stuff");
      return state;
  }
};

export default sessionReducer;
