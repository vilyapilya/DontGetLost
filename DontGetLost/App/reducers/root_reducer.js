import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import groupsReducer from './groups_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  groups: groupsReducer
});

export default rootReducer;
