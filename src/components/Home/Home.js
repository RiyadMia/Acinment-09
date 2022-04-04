import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
  const [cars,setCars]=useState([])
  useEffect(()=>{
      fetch('fakedb.json')
      .then(res => res.json())
      .then(data =>  setCars(data))
  },[])
   
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
                 {
               cars.map(car=><Review
                   key={car.id}
                   car={car}
               ></Review>)
   }
                 <button className='review-btn'
                 >See All Reviews</button>
                 </div>  
    );
};

export default Home;