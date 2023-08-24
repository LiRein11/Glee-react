import { Rating } from '@mui/material';
import React, { FC } from 'react';
import { IRating } from './products.interface';

const RatingStars: FC<IRating> = ({ clickRating, isAuth, ratingVal, isAccessRating }) => {

  if (isAuth && isAccessRating) {
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
    return (
      <div style={{ display: 'flex' }}>
        <Rating
          style={{ marginRight: '10px' }}
          name='read-only'
          value={ratingVal}
          readOnly
          size='large'
        />
        <span>Спасибо за оценку!</span>
      </div>
    );
  }
};

export default RatingStars;
