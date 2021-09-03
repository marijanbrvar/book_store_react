/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './combinedReducer';

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
