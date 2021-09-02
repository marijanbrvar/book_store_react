import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books';
import './addNewBook.css';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const options = ['Fantasy', 'Philosophy', 'ScienceFiction'];
  const category = options.map((o) => (
    <option key={o}>{o}</option>
  ));

  return (
    <div className="new-book">
      <div>
        <h3>Add new Book</h3>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            const form = document.querySelector('FORM');
            e.preventDefault();
            const book = {
              title: form.title.value,
              author: form.author.value,
              category: form.category.value,
              pages: 100,
              completed: 0,
              chapter: 0,
            };

            dispatch(addBook(book));
          }}
        >
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="author" placeholder="Author" required />
          <select name="category" required>
            {category}
          </select>

          <button type="submit" className="submitBtn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewBook;
