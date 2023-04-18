import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../contexts/AuthContext';
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
