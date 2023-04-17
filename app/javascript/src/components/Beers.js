import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AlertMessage from '../shared/AlertMessage';
import Layout from '../shared/Layout';
import BeerItem from './BeerItem';
import { fetchBeers } from '../utils/utils';

export default function Beers() {
  const [beers, setBeers] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetchBeers()
      .then((response) => {
        const { data } = response;
        setBeers(data);
      })
      .catch((err) => {
        setAlert({ type: 'error', message: err.response.statusText });
      });
  }, []);

  return (
    <Layout>
      { alert && <AlertMessage type={alert.type} message={alert.message} /> }
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Beer Catalog
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Review your favourite beers!
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {beers && beers.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <BeerItem props={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
