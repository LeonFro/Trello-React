import {combineReducers} from 'redux';
import card from './card';
import column from './column';
import name from './name';

export const rootReducer = combineReducers({
    card,
    column,
    name,
});



