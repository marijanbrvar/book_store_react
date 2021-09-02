/* eslint-disable import/prefer-default-export */
import * as actions from '../actionTypes';

export const addBook = (book) => ({
  type: actions.ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: {
    id,
  },
});
