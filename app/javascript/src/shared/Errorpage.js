import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Layout from './Layout';

export default function ErrorPage({ message }) {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} mt={10} sx={{ display: 'flex', justifyContent: 'center' }}>
          <p>{message || 'An error occurred'}</p>
        </Grid>
      </Grid>
    </Layout>
  );
}

ErrorPage.defaultProps = {
  message: '',
};

ErrorPage.propTypes = {
  message: PropTypes.string,
};
