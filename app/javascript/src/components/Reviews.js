import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AlertMessage from '../shared/AlertMessage';
import Layout from '../shared/Layout';
import ReviewItem from './ReviewItem';
import Header from '../shared/Header';
import { getReviews } from '../utils/utils';

export default function Reviews() {
  const [alert, setAlert] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews()
      .then((response) => {
        const { data } = response;
        setReviews(data);
      })
      .catch((err) => {
        setAlert({ type: 'error', message: err.response.data.error });
      });
  }, []);

  return (
    <Layout>
      { alert && <AlertMessage type={alert.type} message={alert.message} /> }
      <Header title="Reviews" subTitle="People are liking their beers! Or not" />
      <Container maxWidth="md" data-testid="reviews-page">
        <Grid container spacing={4}>
          {reviews && reviews.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <ReviewItem props={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
