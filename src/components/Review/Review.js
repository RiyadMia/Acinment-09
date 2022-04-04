import React from 'react';
import './Review.css'
const Review = (props) => {
     console.log(props)
    const {name,img,price}=props.car
    return (
        <div className='review-cointanir'>
            <img className='img-d' src={img} alt="" />
            <h1>welcome to Review .</h1>
        </div>
    );
};

export default Review;