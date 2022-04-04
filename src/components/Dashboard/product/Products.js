import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'
import Rating from 'react-rating';
const Products = (props) => {
    const {name,img,price,rating,review,reviews}=props.product
    return (
 <div>
    <div className='review-cointanir'>
         <img className='img-d' src={img} alt="" />    
     </div>  
      <h3>{name}</h3>
      <h2>price : $ {price}</h2>
      <Rating
       initialRating={4.5}
       emptySymbol={<FontAwesomeIcon icon={faStar} />}
       fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
       readonly
      ></Rating>
      <h5>{reviews}</h5>
      <p>{review}</p>
     </div>
    );
};

export default Products;