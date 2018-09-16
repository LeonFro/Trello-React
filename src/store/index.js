import {createStore,compose} from 'redux';
import reducer from '../reducers';
import storage from '../store/storage';

const store = createStore(
    reducer,
    storage, 
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f));
console.log(store.getState())
export default store;