import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import AlertMessage from '../shared/AlertMessage';
import Layout from '../shared/Layout';
import ReviewItem from './ReviewItem';
import Header from '../shared/Header';
import { getReviews } from '../utils/utils';
import Progress from '../shared/Progress';
import ErrorBoundary from '../shared/ErrorBoundary';
import ErrorPage from '../shared/Errorpage';

export default function Reviews() {
  const [alert] = useState(null);
  const [page, setPage] = useState(1);
  const { status, data, error } = useQuery({
    queryKey: ['reviews', page],
    queryFn: () => getReviews({ page }),
    keepPreviousData: true,
  });

  const handlePagination = (_event, pageNum) => {
    setPage(pageNum);
  };

  if (status === 'loading') {
    return <Progress />;
  }

  if (status === 'error') {
    return <ErrorPage message={error.message} />;
  }

  const { data: reviews } = data;

  return (
    <Layout>
      { alert && <AlertMessage type={alert.type} message={alert.message} /> }
      <Header title="Reviews" subTitle="People are liking their beers! Or not" />
      <ErrorBoundary>
        <Container maxWidth="md" data-testid="reviews-page">
          <Grid container spacing={4}>
            {reviews && reviews.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <ReviewItem props={item} />
              </Grid>
            ))}
          </Grid>
          <Grid container sx={{ mt: 3 }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination count={5} page={page} color="secondary" onChange={handlePagination} />
            </Grid>
          </Grid>
        </Container>
      </ErrorBoundary>
    </Layout>
  );
}
