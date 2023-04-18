import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Layout({ children }) {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Link href="/"><SportsBarIcon sx={{ mr: 2, color: 'white' }} /></Link>
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
