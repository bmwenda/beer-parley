import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import AlertMessage from '../shared/AlertMessage';
import Layout from '../shared/Layout';
import ReviewItem from './ReviewItem';
import Header from '../shared/Header';
import { getReviews } from '../utils/utils';
import Progress from '../shared/Progress';
import ErrorBoundary from '../shared/ErrorBoundary';
import ErrorPage from '../shared/Errorpage';

export default function Reviews() {
  const limit = 9;
  const [alert] = useState(null);
  const {
    status, data, error, fetchNextPage, hasNextPage, isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
    keepPreviousData: true,
    getNextPageParam: (lastPage) => {
      if (lastPage?.response?.data.length < limit) return undefined;
      return lastPage.pageParam;
    },
  });

  if (status === 'loading') {
    return <Progress />;
  }

  if (status === 'error') {
    return <ErrorPage message={error.message} />;
  }

  return (
    <Layout>
      { alert && <AlertMessage type={alert.type} message={alert.message} /> }
      <Header title="Reviews" subTitle="People are liking their beers! Or not" />
      <ErrorBoundary>
        <Container maxWidth="md" data-testid="reviews-page">
          <Grid container spacing={4}>
            {data?.pages?.map((pageItem) => (
              pageItem?.response?.data.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <ReviewItem props={item} />
                </Grid>
              ))
            ))}
          </Grid>
          <Grid container sx={{ mt: 3 }}>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Fab
                variant="extended"
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage && 'Loading...'}
                {hasNextPage ? 'Load More' : 'Nothing more to load'}
              </Fab>
            </Grid>
          </Grid>
        </Container>
      </ErrorBoundary>
    </Layout>
  );
}
