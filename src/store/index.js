import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/index';
import logger from 'redux-logger';

export const store = createStore(
    rootReducer,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f),
    applyMiddleware(logger)
);

