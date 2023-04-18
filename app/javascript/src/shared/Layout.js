import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import Link from '@mui/material/Link';
import ProfileMenu from '../components/ProfileMenu';
import AuthContext from '../contexts/AuthContext';

export default function Layout({ children }) {
  const currentUser = useContext(AuthContext);
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Grid container>
            <Grid item xs={6}>
              <Link href="/" underline="none" variant="h6" sx={{ color: 'white' }}>
                <SportsBarIcon sx={{ mr: 2, color: 'white' }} fontSize="large" />
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {currentUser ? (<ProfileMenu />) : (
                  <Link href="/login" variant="h6" noWrap>
                    Login
                  </Link>
                )}
              </Box>
            </Grid>
          </Grid>
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
