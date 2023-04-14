import React from 'react';
import PropTypes from 'prop-types';

function HelloWorld({ greeting }) {
  return (
    <>
      {greeting}
      from /src!
    </>
  )
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};

export default HelloWorld;
