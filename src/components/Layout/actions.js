import { ADD_PRIMARY_COLOR, OPEN_SIDEBAR, CLOSE_SIDEBAR } from './constants';

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
