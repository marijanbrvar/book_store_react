/* eslint-disable no-plusplus */
const initialState = {};

let lastId = 0;
const ADD_BOOK = 'bookStore/books/addBook';
const REMOVE_BOOK = 'bookStore/books/removeBook';
const UPDATE = 'bookStore/books/updateBooks';

export function loadBooks(apiState) {
  return {
    type: UPDATE,
    payload: apiState,
  };
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          category: action.payload.category,
          author: action.payload.author,
          pages: action.payload.pages,
          completed: action.payload.completed,
          chapter: action.payload.chapter,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}
