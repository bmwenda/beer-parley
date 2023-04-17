import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { postReview } from '../utils/utils';

export default function ReviewForm({ dialogOpen, setDialogOpen, beerProps }) {
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reviewData = {
      description: data.get('description'),
      rating: data.get('rating'),
    };

    postReview(reviewData, beerProps)
      .then((response) => {
        console.log(response.status);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    setDialogOpen(false);
  };

  return (
    <div>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Your Review</DialogTitle>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <DialogContent>
            <DialogContentText>
              Add your no holds barred review for this beer!
            </DialogContentText>
            <TextField
              autoFocus
              required
              multiline
              fullWidth
              name="description"
              margin="normal"
              id="description"
              label="Review"
              type="text"
              variant="standard"
            />
            <TextField
              autoFocus
              required
              fullWidth
              name="rating"
              margin="normal"
              id="rating"
              label="Rating"
              type="number"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

ReviewForm.defaultProps = {
  dialogOpen: false,
};

ReviewForm.propTypes = {
  dialogOpen: PropTypes.bool,
  // beerProps: PropTypes.shape,
  setDialogOpen: PropTypes.func.isRequired,
};