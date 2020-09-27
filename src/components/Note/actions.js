import {
  SHOW_BOX_NEW_NOTE,
  HIDE_BOX_NEW_NOTE,
  SET_MY_NOTES,
  ADD_NEW_MY_NOTE,
  ADD_NEW_FOLDER,
  SET_FOLDERS,
  HIDE_BOX_NEW_FOLDER,
  SHOW_BOX_NEW_FOLDER,
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

export const setFolders = (payload) => ({
  type: SET_FOLDERS,
  payload,
});

export const addNewFolder = (payload) => ({
  type: ADD_NEW_FOLDER,
  payload,
});

export const showBoxNewFolder = () => ({
  type: SHOW_BOX_NEW_FOLDER,
});

export const hideBoxNewFolder = () => ({
  type: HIDE_BOX_NEW_FOLDER,
});
