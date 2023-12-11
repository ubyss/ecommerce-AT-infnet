import React from 'react';

function RatingStars({ rating }) {
  const totalStars = 5;
  let stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>★</span>); 
    } else if (i - rating < 1) {
      stars.push(<span key={i}>☆</span>); 
    }
  }

  return <div>{stars}</div>;
}

export default RatingStars;
