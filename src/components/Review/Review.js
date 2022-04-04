
import useCars from '../../hooks/Hooks';
import Products from '../Dashboard/product/Products';
import './Review.css'
const Review = () => {
    const [products,setProducts]=useCars()
    return (
        <div className='review-cointanir'>
            {
               products.map(product=><Products
                   key={product.id}
                   product={product}
                  > 
                   </Products>)
            }
        </div>
    );
};

export default Review;