/* eslint-disable no-plusplus */
import intiData from '../../data/tempdata';

let lastId = 0;
const ADD_BOOK = 'addBook';
const REMOVE_BOOK = 'removeBook';

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

export default function reducer(state = intiData, action) {
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
    default:
      return state;
  }
}
