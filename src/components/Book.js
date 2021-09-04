import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/middleware';
import '../styles/book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, category, author, completed, chapter, id,
  } = props;

  const delBook = (e) => dispatch(removeBookApi(e.target.id));

  return (
    <div className="book">
      <div className="book-main">
        <div className="book-info">
          <div>{category}</div>
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
        </div>
        <div className="book-actions">
          <ul>
            <li>Comments</li>
            <li>
              <button
                className="btn"
                type="button"
                id={id}
                onClick={delBook}
              >
                Remove
              </button>
            </li>
            <li>Edit</li>
          </ul>
        </div>
      </div>
      <div className="book-stat">
        <div className="chart">
          <svg>
            <circle cx="50" cy="50" r="44" />
            <circle cx="50" cy="50" r="44" />
          </svg>
        </div>
        <div className="book-stat-value">
          <div>
            {completed}
            %
          </div>
          <div>Completed</div>
        </div>
      </div>
      <div className="book-update">
        <div>
          <div>Current Chapter</div>
          <div className="book-chapter">
            Chapter
            {' '}
            {chapter}
          </div>
        </div>
        <div>
          <button type="button" className="update-progress">Update progress</button>
        </div>
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
  chapter: PropTypes.number.isRequired,
};

export default Book;
