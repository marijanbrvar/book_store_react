import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { name } = props;
  return (
    <div>
      <p>
        Books
        {name}
      </p>
    </div>
  );
};

Books.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Books;
