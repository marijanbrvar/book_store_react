const initialState = {};

const ADD_BOOK = 'bookStore/books/addBook';
const REMOVE_BOOK = 'bookStore/books/removeBook';
const UPDATE = 'bookStore/books/updateBooks';

export function loadBooks(apiState) {
  return {
    type: UPDATE,
    payload: apiState,
  };
}

export const addBook = (title, author, category, id) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
    category,
    completed: 0,
    chapter: 'Introduction',
    id,
  },
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
    {
      const newState = JSON.parse(JSON.stringify(state));
      newState[action.payload.id] = [action.payload];
      return newState;
    }
    case REMOVE_BOOK:
    {
      const { [action.payload.id]: r, ...newState } = state;
      return newState;
    }
    case UPDATE:
      return action.payload;
    default:
      return state;
  }
}
