import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import groupsReducer from './groups_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  groups: groupsReducer,
  currentUser: sessionReducer
});

export default rootReducer;
