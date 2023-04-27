import { Rating } from '@mui/material';
import React, { FC } from 'react';
import { IRating } from './products.interface';

const RatingStars: FC<IRating> = ({ clickRating, isAuth = false, ratingVal }) => {
  React.useEffect(() => {}, [clickRating, ratingVal]);

  if (isAuth) {
    return (
      <Rating
        name='simple-controlled'
        precision={1}
        onChange={(event, newValue) => {
          clickRating(newValue);
        }}
        size='large'
        value={ratingVal}
      />
    );
  } else {
    return <Rating name='read-only' value={ratingVal} readOnly size='large' />;
  }
};

export default RatingStars;
