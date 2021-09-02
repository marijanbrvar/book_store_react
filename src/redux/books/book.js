/* eslint-disable no-plusplus */
import * as actions from '../actionTypes';

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BOOK:
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
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
