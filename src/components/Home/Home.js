
import { useNavigate } from 'react-router-dom';
import useCars from '../../hooks/Hooks';
import Products from '../Dashboard/product/Products';
import './Home.css'
const Home = () => {
  const [products,setProducts]=useCars()
  const sliceRsult =products.slice(0,3)
   let navegat =useNavigate()
    return (
        <div>
             <div className="home-contanier">
                 <div className="cars-name">
                   <h1>Classic car insurance to protect the cars you love</h1>
                   <br />
                   <br />
                   <p> 
                   As avid classic car owners and enthusiasts, Hagerty is the UK's leading specialist classic car insurance company.Niche product offerings allow us to provide you with the best coverage for your vehicle.Classics were made to be driven. Whether you’re going to a show or just taking a cruise to the ice cream shop, you’re protected.

                   </p>
                 </div>
                 <div className="bast-cars">
                    <img src="https://www.hagerty.co.uk/wp-content/uploads/2021/09/Classic-Car-1-scaled.jpg" alt="" /> 
                 </div>
                 </div>  
                 <h1>Costomer Reviews (3)</h1> 
                 <div className='img-grid'>
                   {
                       sliceRsult.map(product=><Products
                        key={product.id}
                        product={product}
                       > 
                    </Products>)
                   }

                 </div>
                <button onClick={()=>navegat('/review')} className='review-btn'>See All Reviews</button>
                 </div>  
    );
};

export default Home;