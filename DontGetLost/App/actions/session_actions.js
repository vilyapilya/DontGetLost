import * as LoginAPIUtil from '../util/login_api_util';
import { AsyncStorage } from 'react-native';
import { receiveErrors } from './error_actions';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const register = user => dispatch => {
  return LoginAPIUtil.register(user)
      .then(
        (resp) => {
          if (resp.ok) {
            resp.json()
              .then((currentUser) => {
                dispatch(receiveCurrentUser(currentUser));
                AsyncStorage.setItem('sessionToken', currentUser.session_token);
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

export const login = user => dispatch => {
  return LoginAPIUtil.login(user)
      .then(
        (resp) => {
          if (resp.ok) {
            resp.json()
              .then((currentUser) => {
                dispatch(receiveCurrentUser(currentUser));
                AsyncStorage.setItem('sessionToken', currentUser.session_token);
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

export const logout = () => dispatch => (
  LoginAPIUtil
    .logout()
    .then((user) => {
      dispatch(receiveCurrentUser(null));
      AsyncStorage.removeItem('sessionToken');
    })
);
