import React from 'react';
import './Products.css'
const Products = (props) => {
    const {name,img,price}=props.product
    return (
 <div>
    <div className='review-cointanir'>
         <img className='img-d' src={img} alt="" />    
     </div>  
      <h3>{name}</h3>
      <h2>{price}</h2>
     </div>
    );
};

export default Products;