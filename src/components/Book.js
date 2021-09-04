import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books';
import './book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, category, author, completed, chapter, id,
  } = props;

  const delBook = (e) => dispatch(removeBook(parseInt(e.target.id, 10)));

  return (
    <div className="book">
      <div>
        <div className="book-info">
          <div>{category}</div>
          <div>
            {title}
          </div>
          <div>{author}</div>
        </div>
        <div className="book-actions">
          <li>Comments</li>
          <li>
            <button
              type="button"
              id={id}
              onClick={delBook}
            >
              Remove
            </button>
          </li>
          <li>Edit</li>
        </div>
      </div>
      <div className="book-stat">
        <div>{completed}</div>
        <div>
          <div>{completed}</div>
          <div>Completed</div>
        </div>
      </div>
      <div className="book-update">
        <div>Current Chapter</div>
        <div>
          Current
          {chapter}
        </div>
        <div>Update progress</div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
