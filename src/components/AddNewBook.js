import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import bookCategory from './BookCategory';
import { addBookApi } from '../redux/middleware';
import '../styles/addNewBook.css';

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const submitNewBook = (e) => {
    const form = document.querySelector('FORM');
    e.preventDefault();

    dispatch(addBookApi(title, author, form.category.value, uuidv4()));
  };
  return (
    <div className="new-book">
      <div>
        <h3>Add new Book</h3>
      </div>
      <div>
        <form
          onSubmit={submitNewBook}
        >
          <input className="new-book-title" type="text" name="title" placeholder="Title" required onChange={(e) => setTitle(e.target.value)} />
          <input className="new-book-author" type="text" name="author" placeholder="Author" required onChange={(e) => setAuthor(e.target.value)} />
          <select className="new-book-cat" name="category" required>
            {bookCategory()}
          </select>

          <button type="submit" className="submit-btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBook;
