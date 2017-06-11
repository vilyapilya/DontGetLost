import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import groupsReducer from './groups_reducer';
import sessionReducer from './session_reducer';
import invitationReducer from './invitation_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  groups: groupsReducer,
  currentUser: sessionReducer,
  invitations: invitationReducer
});

export default rootReducer;
