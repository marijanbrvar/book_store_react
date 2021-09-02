import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';

store.dispatch({
  type: 'addBook',
  payload: {
    title: 'LOTR The Fellowship of the Ring',
    category: 'Fantasy',
    author: 'J.R.R. Tolkien',
    pages: 606,
    completed: 35,
    chapter: 4,
  },
});

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
