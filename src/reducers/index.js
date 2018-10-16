import { combineReducers } from 'redux';
import cards from './cards';
import columnNames from './columnNames';
import name from './name';
import comments from './comments';

export const rootReducer = combineReducers({
  cards,
  columnNames,
  name,
  comments
});

