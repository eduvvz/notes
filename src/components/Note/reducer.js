import update from 'react-addons-update';
import {
  SHOW_BOX_NEW_NOTE,
  HIDE_BOX_NEW_NOTE,
  SET_MY_NOTES,
  ADD_NEW_MY_NOTE,
  ADD_NEW_FOLDER,
  SET_FOLDERS,
  HIDE_BOX_NEW_FOLDER,
  SHOW_BOX_NEW_FOLDER,
  REMOVE_NOTE,
  SHOW_BOX_VISUAL_NOTE,
  HIDE_BOX_VISUAL_NOTE,
} from './constants';

const INITIAL_STATE = {
  boxNewNote: {
    show: false,
  },
  boxVisualNote: {
    show: false,
    noteData: null,
  },
  boxNewFolder: {
    show: false,
  },
  myNotes: [],
  folders: [],
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
    case SET_MY_NOTES:
      return update(state, {
        myNotes: { $set: action.payload },
      });
    case ADD_NEW_MY_NOTE:
      return update(state, {
        myNotes: { $set: [action.payload, ...state.myNotes] },
      });
    case SET_FOLDERS:
      return update(state, {
        folders: { $set: action.payload },
      });
    case ADD_NEW_FOLDER:
      return update(state, {
        folders: { $set: [action.payload, ...state.folders] },
      });
    case SHOW_BOX_NEW_FOLDER:
      return update(state, {
        boxNewFolder: { show: { $set: true } },
      });
    case HIDE_BOX_NEW_FOLDER:
      return update(state, {
        boxNewFolder: { show: { $set: false } },
      });
    case REMOVE_NOTE:
      return update(state, {
        myNotes: {
          $set: state.myNotes.filter((note) => note.id !== action.payload),
        },
      });
    case SHOW_BOX_VISUAL_NOTE:
      return update(state, {
        boxVisualNote: {
          show: { $set: true },
          noteData: { $set: action.payload },
        },
      });
    case HIDE_BOX_VISUAL_NOTE:
      return update(state, {
        boxVisualNote: { show: { $set: false }, noteData: { $set: null } },
      });
    default:
      return state;
  }
};

export default reducer;
