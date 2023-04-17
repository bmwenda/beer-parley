/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Collapse, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ReviewForm from './ReviewForm';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// eslint-disable-next-line react/prop-types
export default function BeerItem({ props }) {
  const [expanded, setExpanded] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const {
    name, tagline, first_brewed, description, image_url, abv, ibu, srm, volume: { value: volume },
  } = props;
  const beer = {
    name, tagline, first_brewed, description, image_url, abv, ibu, srm, volume,
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <ReviewForm
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        beerProps={beer}
      />
      <Card
        sx={{
          height: '100%', maxWidth: 345, display: 'flex', flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={image_url}
          alt={name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tagline}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container>
            <Grid item sm={6}>
              <Button size="small" onClick={handleDialogOpen}>Review</Button>
            </Grid>
            <Grid item sm={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Grid>
          </Grid>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}

BeerItem.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  first_brewed: PropTypes.string,
  description: PropTypes.string,
  image_url: PropTypes.string,
  abv: PropTypes.string,
  ibu: PropTypes.string,
  srm: PropTypes.string,
  volume: PropTypes.string,
};
