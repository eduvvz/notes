import update from 'react-addons-update';
import {
  SHOW_BOX_NEW_NOTE,
  HIDE_BOX_NEW_NOTE,
  CHANGE_COLOR_NEW_NOTE,
} from './constants';

const INITIAL_STATE = {
  boxNewNote: {
    show: false,
  },
  newNote: {
    color: null,
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
    case CHANGE_COLOR_NEW_NOTE:
      return update(state, {
        newNote: { color: { $set: action.payload } },
      });
    default:
      return state;
  }
};

export default reducer;
