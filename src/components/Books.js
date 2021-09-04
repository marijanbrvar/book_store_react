import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadBooksApi } from '../redux/middleware';
import AddNewBook from './AddNewBook';
import genBookList from './BooksList';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksApi());
  }, []);

  return (
    <>
      {genBookList()}
      <AddNewBook />
    </>
  );
};

export default Books;
