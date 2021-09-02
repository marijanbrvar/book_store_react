import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const state = useSelector((state) => state);
  const books = state.books.map((book) => (
    <div key={book.id}>
      <Book book={book} />
    </div>
  ));

  return books;
};

export default Books;
