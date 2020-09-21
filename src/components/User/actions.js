import { SET_USER_DATA, SET_USER_TOKEN, USER_LOGOUT } from './constants';

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

export const setUserToken = (payload) => ({
  type: SET_USER_TOKEN,
  payload,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
