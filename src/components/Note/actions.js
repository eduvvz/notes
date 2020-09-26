import {
  SHOW_BOX_NEW_NOTE,
  HIDE_BOX_NEW_NOTE,
  SET_MY_NOTES,
  ADD_NEW_MY_NOTE,
} from './constants';

export const showBoxNewNote = () => ({
  type: SHOW_BOX_NEW_NOTE,
});

export const hideBoxNewNote = () => ({
  type: HIDE_BOX_NEW_NOTE,
});

export const setMyNotes = (payload) => ({
  type: SET_MY_NOTES,
  payload,
});

export const addNewMyNote = (payload) => ({
  type: ADD_NEW_MY_NOTE,
  payload,
});
