/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { parseDate } from '../utils/utils';

export default function ReviewItem({ props }) {
  const { beer, user } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={(
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user?.first_name.charAt(0)}
          </Avatar>
        )}
        action={(
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        )}
        title={beer?.name}
        subheader={parseDate(props?.created_at)}
      />
      <CardMedia
        component="img"
        height="194"
        image={beer?.image_url}
        alt={beer?.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Rating name="read-only" value={props.rating} readOnly />
      </CardActions>
    </Card>
  );
}

ReviewItem.propTypes = {
  beer: PropTypes.shape({}),
  user: PropTypes.shape({}),
  name: PropTypes.string,
  first_name: PropTypes.string,
  description: PropTypes.string,
  created_at: PropTypes.string,
};
