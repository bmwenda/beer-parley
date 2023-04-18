import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Header({ title, subTitle }) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {title}
        </Typography>
        {subTitle && (
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            {subTitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}

Header.defaultProps = {
  subTitle: null,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
