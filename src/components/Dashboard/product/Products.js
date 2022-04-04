import React from 'react';
import './Products.css'
const Products = (props) => {
    const {name,img,price,rating,review}=props.product
    return (
 <div>
    <div className='review-cointanir'>
         <img className='img-d' src={img} alt="" />    
     </div>  
      <h3>{name}</h3>
      <h2>price : $ {price}</h2>
      <h2> Rating : {rating}</h2>
      <p>{review}</p>
     </div>
    );
};

export default Products;