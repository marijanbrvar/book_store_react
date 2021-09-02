/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import './book.css';

import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    title, category, author, completed, chapter,
  } = props;

  return (
    <div className="book">
      <div>
        <div className="book-info">
          <div>{category}</div>
          <div>{title}</div>
          <div>{author}</div>
        </div>
        <div className="book-actions">
          <a>Comments</a>
          <a>Remove</a>
          <a>Edit</a>
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
        <button>Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
