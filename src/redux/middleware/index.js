import { loadBooks, addBook, removeBook } from '../books';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = 'FiLEYLO9D393O8341t3l';

export const loadBooksApi = () => async (dispatch) => {
  const result = await fetch(`${url}/apps/${key}/books`);
  const res = await result.json();
  dispatch(loadBooks(res));
};

export const addBookApi = (title, author, category, id) => async (dispatch) => {
  await fetch(`${url}/apps/${key}/books`, {
    method: 'POST',
    headers: new Headers({ 'Content-type': 'application/json; charset=UTF-8' }),
    body: JSON.stringify({
      item_id: id,
      title,
      category,
      author,
    }),
  });
  dispatch(addBook(title, author, category, id));
};

export const removeBookApi = (id) => async (dispatch) => {
  await fetch(`${url}/apps/${key}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
  });
  dispatch(removeBook(id));
};
