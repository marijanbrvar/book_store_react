import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddNewBook from './AddNewBook';

const Books = () => {
  const state = useSelector((state) => state);
  const bookList = state.books.map((book) => (
    <div key={book.id}>
      <Book
        title={book.title}
        category={book.category}
        pages={book.pages}
        author={book.author}
        completed={book.completed}
        chapter={book.chapter}
        id={book.id}
      />
    </div>
  ));

  return (
    <>
      {bookList}
      <AddNewBook />
    </>
  );
};

export default Books;
