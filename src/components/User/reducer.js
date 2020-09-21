import update from 'react-addons-update';
import { SET_USER_DATA } from './constants';

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
    default:
      return state;
  }
};

export default reducer;
