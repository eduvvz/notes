import {
  SHOW_BOX_NEW_NOTE,
  HIDE_BOX_NEW_NOTE,
  CHANGE_COLOR_NEW_NOTE,
} from './constants';

export const showBoxNewNote = () => ({
  type: SHOW_BOX_NEW_NOTE,
});

export const hideBoxNewNote = () => ({
  type: HIDE_BOX_NEW_NOTE,
});

export const changeColorNewNote = (payload) => ({
  type: CHANGE_COLOR_NEW_NOTE,
  payload,
});
