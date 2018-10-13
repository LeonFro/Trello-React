import { combineReducers } from 'redux';
import cards from './card';
import columnNames from './column';
import name from './name';

export const rootReducer = combineReducers({
  cards,
  columnNames,
  name,
});

