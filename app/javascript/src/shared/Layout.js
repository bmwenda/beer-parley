import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <main>
        {children}
      </main>
    </>
  );
}

Layout.defaultProps = {
  children: <div />,
};

Layout.propTypes = {
  children: PropTypes.node,
};
