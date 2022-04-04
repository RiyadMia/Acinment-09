import React from 'react';
import './Review.css'
const Review = (props) => {
    const {name,img,price}=props.product
    
    return (
        <div className='review-cointanir'>
           <img className='img-d' src={img} alt="" /> 
          <h3>{name}</h3>
          <h2>{price}</h2>
        </div>
    );
};

export default Review;