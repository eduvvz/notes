import update from 'react-addons-update';
import {
  ADD_PRIMARY_COLOR,
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  HIDE_BACK_BUTTON,
  SHOW_BACK_BUTTON,
} from './constants';

const INITIAL_STATE = {
  pallete: {
    accentColor: null,
  },
  sidebar: {
    open: false,
  },
  appbar: {
    showBackButton: false,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRIMARY_COLOR:
      return update(state, {
        pallete: { accentColor: { $set: action.payload } },
      });
    case CLOSE_SIDEBAR:
      return update(state, {
        sidebar: { open: { $set: false } },
      });
    case OPEN_SIDEBAR:
      return update(state, {
        sidebar: { open: { $set: true } },
      });
    case SHOW_BACK_BUTTON:
      return update(state, {
        appbar: { showBackButton: { $set: true } },
      });
    case HIDE_BACK_BUTTON:
      return update(state, {
        appbar: { showBackButton: { $set: false } },
      });
    default:
      return state;
  }
};

export default reducer;
