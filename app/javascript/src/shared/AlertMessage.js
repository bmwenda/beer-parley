import React from 'react';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@mui/material';

export default function AlertMessage({ type, message }) {
  return (
    <Alert severity={type} sx={{ justifyContent: 'center', width: '100%' }}>
      <AlertTitle>{type}</AlertTitle>
      {message}
    </Alert>
  );
}

AlertMessage.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
