import { SET_USER_DATA } from './constants';

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});
