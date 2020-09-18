import update from 'react-addons-update';
import { ADD_PRIMARY_COLOR } from './constants';

const INITIAL_STATE = {
  pallete: {
    primaryColor: null,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRIMARY_COLOR:
      return update(state, {
        pallete: { primaryColor: { $set: action.payload } },
      });
    default:
      return state;
  }
};

export default reducer;
