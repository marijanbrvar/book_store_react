import { useSelector } from 'react-redux';
import Book from './Book';

const genBookList = () => {
  const state = useSelector((state) => state);
  return Object.entries(state.books).map(([k, v]) => (
    <div key={k}>
      <Book
        title={v[0].title}
        author={v[0].author || 'Author'}
        category={v[0].category}
        completed={45}
        chapter={1}
        id={k}
        key={k}
      />
    </div>
  ));
};

export default genBookList;
