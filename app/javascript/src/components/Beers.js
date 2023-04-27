import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import AlertMessage from '../shared/AlertMessage';
import Layout from '../shared/Layout';
import BeerItem from './BeerItem';
import { fetchBeers } from '../utils/utils';
import Header from '../shared/Header';
import Progress from '../shared/Progress';
import ErrorPage from '../shared/Errorpage';

export default function Beers() {
  const [page, setPage] = useState(1);
  const [alert] = useState(null);
  const { status, data, error } = useQuery({
    queryKey: ['beers', page],
    queryFn: () => fetchBeers({ page }),
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

  const { data: beers } = data;

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
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination count={15} page={page} color="secondary" onChange={handlePagination} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
