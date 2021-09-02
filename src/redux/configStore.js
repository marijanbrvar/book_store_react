import { createStore } from 'redux';
import reducer from './books/book';

const store = createStore(reducer);

export default store;
