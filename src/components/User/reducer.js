import update from 'react-addons-update';
import { SET_USER_DATA, SET_USER_TOKEN, USER_LOGOUT } from './constants';

const INITIAL_STATE = {
  data: null,
  token: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return update(state, {
        data: { $set: action.payload },
      });
    case SET_USER_TOKEN:
      return update(state, {
        token: { $set: action.payload },
      });
    case USER_LOGOUT:
      return update(state, {
        $set: INITIAL_STATE,
      });
    default:
      return state;
  }
};

export default reducer;
