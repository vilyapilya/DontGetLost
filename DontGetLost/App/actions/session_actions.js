import * as LoginAPIUtil from '../util/login_api_util';
import { AsyncStorage } from 'react-native';
import { receiveErrors } from './error_actions';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const register = user => dispatch => {
  return LoginAPIUtil.register(user)
      .then(
        (resp) => {
          if (resp.ok) {
            resp.json()
              .then((obj) => {
                dispatch(receiveCurrentUser(obj));
                // AsyncStorage.setItem('sessionToken', obj.sessionToken);
              });
          } else {
            resp.json()
              .then((err) => {
                dispatch(receiveErrors(err));
              });
          }
        }
      );
};
