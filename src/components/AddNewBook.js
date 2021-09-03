import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books';
import './addNewBook.css';

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const options = ['Fantasy', 'Philosophy', 'ScienceFiction'];
  const category = options.map((o) => (
    <option key={o}>{o}</option>
  ));

  const addNeBook = (e) => {
    const form = document.querySelector('FORM');
    e.preventDefault();
    const book = {
      title,
      author,
      category: form.category.value,
      pages: 100,
      completed: 0,
      chapter: 0,
    };

    dispatch(addBook(book));
  };

  return (
    <div className="new-book">
      <div>
        <h3>Add new Book</h3>
      </div>
      <div>
        <form
          onSubmit={addNeBook}
        >
          <input type="text" name="title" placeholder="Title" required onChange={(e) => setTitle(e.target.value)} />
          <input type="text" name="author" placeholder="Author" required onChange={(e) => setAuthor(e.target.value)} />
          <select name="category" required>
            {category}
          </select>

          <button type="submit" className="submit-btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBook;
