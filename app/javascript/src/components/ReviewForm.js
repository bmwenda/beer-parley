/* eslint-disable react/prop-types */
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
import Rating from '@mui/material/Rating';
import AlertMessage from '../shared/AlertMessage';
import { postReview } from '../utils/utils';

export default function ReviewForm({ dialogOpen, setDialogOpen, beerProps }) {
  const [alert, setAlert] = useState(null);
  const [rating, setRating] = useState(0);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reviewData = {
      description: data.get('description'),
      user_rating: rating,
    };

    postReview(reviewData, beerProps)
      .then(() => {
        setAlert({ type: 'success', message: 'Review sent' });
      })
      .catch((err) => {
        setAlert({ type: 'error', message: err.response.data.error });
      });

    setDialogOpen(false);
  };

  return (
    <div>
      { alert && <AlertMessage type={alert.type} message={alert.message} /> }
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
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
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
  setDialogOpen: PropTypes.func.isRequired,
};
