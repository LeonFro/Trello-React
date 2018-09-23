import {combineReducers} from 'redux';
import card from './card';
import column from './column';
import name from './name';
import modal from './modal';

export const rootReducer = combineReducers({
    card,
    column,
    name,
    modal
});



