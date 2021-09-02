import React from 'react';
import { useSelector } from 'react-redux';

const Books = () => {
  const state = useSelector((state) => state);
  const books = state.books.map((book) => (
    <li key={book.id}>{book.title}</li>
  ));

  return books;
};

export default Books;
