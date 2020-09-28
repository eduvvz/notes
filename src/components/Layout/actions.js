import {
  ADD_PRIMARY_COLOR,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  SHOW_BACK_BUTTON,
  HIDE_BACK_BUTTON,
} from './constants';

export const setAccentColor = (payload) => ({
  type: ADD_PRIMARY_COLOR,
  payload,
});

export const openSidebar = () => ({
  type: OPEN_SIDEBAR,
});

export const closeSidebar = () => ({
  type: CLOSE_SIDEBAR,
});

export const showBackButton = () => ({
  type: SHOW_BACK_BUTTON,
});

export const hideBackButton = () => ({
  type: HIDE_BACK_BUTTON,
});
