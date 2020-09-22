import { combineReducers } from 'redux';
import layout from './components/Layout/reducer';
import user from './components/User/reducer';
import notes from './components/Note/reducer';

export const Reducers = combineReducers({
  layout,
  user,
  notes,
});
