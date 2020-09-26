import update from 'react-addons-update';
import { SHOW_BOX_NEW_NOTE, HIDE_BOX_NEW_NOTE } from './constants';

const INITIAL_STATE = {
  boxNewNote: {
    show: false,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_BOX_NEW_NOTE:
      return update(state, {
        boxNewNote: { show: { $set: true } },
      });
    case HIDE_BOX_NEW_NOTE:
      return update(state, {
        boxNewNote: { show: { $set: false } },
      });
    default:
      return state;
  }
};

export default reducer;
