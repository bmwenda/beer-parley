import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AlertMessage from '../shared/AlertMessage';
import Layout from '../shared/Layout';
import BeerItem from './BeerItem';
import { getRecommendations } from '../utils/utils';
import Header from '../shared/Header';

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    getRecommendations()
      .then((response) => {
        const { data } = response;
        setRecommendations(data);
      })
      .catch((err) => {
        setAlert({ type: 'error', message: (err.response?.statusText || 'An error occurred') });
      });
  }, []);

  return (
    <Layout>
      { alert && <AlertMessage type={alert.type} message={alert.message} /> }
      <Container maxWidth="md" data-testid="recommendations-page">
        {recommendations.length < 1 ? (
          <Header title="Nothing to see yet" subTitle="Rate a few beers to get recommendations!" />
        ) : (
          <>
            <Header title="Recommendations" subTitle="We heard you love these type of beers. There's more you could like!" />
            <Grid container spacing={4}>
              {recommendations && recommendations.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <BeerItem props={item} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Layout>
  );
}
