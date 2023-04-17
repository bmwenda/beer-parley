import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Typography from '@mui/material/Typography';

export default function Layout({ children }) {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <SportsBarIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Beers
          </Typography>
        </Toolbar>
      </AppBar>
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
