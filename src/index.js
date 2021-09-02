import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/configStore';
import { addBook, removeBook } from './redux/books';

const unsubscribe = store.subscribe(() => {
  console.log('Change', store.getState());
});

store.dispatch(addBook({
  title: 'LOTR The Fellowship of the Ring',
  category: 'Fantasy',
  author: 'J.R.R. Tolkien',
  pages: 606,
  completed: 35,
  chapter: 4,
}));

store.dispatch(addBook({
  title: 'LOTR The Two Towers',
  category: 'Fantasy',
  author: 'J.R.R. Tolkien',
  pages: 754,
  completed: 0,
  chapter: 1,
}));

store.dispatch(addBook({
  title: 'LOTR The Return of the King',
  category: 'Fantasy',
  author: 'J.R.R. Tolkien',
  pages: 954,
  completed: 0,
  chapter: 1,
}));

store.dispatch(removeBook(3));

unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
