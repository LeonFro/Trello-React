import { combineReducers } from 'redux';
import card from './card';
import column from './column';
import name from './name';
import addName from './name';

export const rootReducer = combineReducers({
  card,
  column,
  name,
});

export function getUserName(state) {
  return addName(state.name.name);
}
