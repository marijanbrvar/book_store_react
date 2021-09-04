/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React from 'react';

const Categories = (props) => {
  const { message } = props;
  return (
    <div>
      <p>
        {message}
      </p>
    </div>
  );
};

Categories.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Categories;
