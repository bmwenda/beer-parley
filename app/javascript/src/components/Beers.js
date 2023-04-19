import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AlertMessage from '../shared/AlertMessage';
import Layout from '../shared/Layout';
import BeerItem from './BeerItem';
import { fetchBeers } from '../utils/utils';
import Header from '../shared/Header';

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
      <Header title="Beer Catalog" subTitle="Review your favourite beers!" />
      <Container maxWidth="md" data-testid="beers-page">
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
