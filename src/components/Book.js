import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

const Book = (props) => {
  const {
    title, category, pages, author, completed, chapter,
  } = props;

  return (
    <div className="book">
      <div>
        <div className="book-info">
          <div>{category}</div>
          <div>
            {title}
            {' '}
            {pages}
          </div>
          <div>{author}</div>
        </div>
        <div className="book-actions">
          <li>Comments</li>
          <li>Remove</li>
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
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
};

export default Book;
