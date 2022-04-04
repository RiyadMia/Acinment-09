import React from 'react';
import { Link } from 'react-router-dom';
import './Heder.css'
const Heder = () => {
    return (
        <div className='heder-contanier'>
             <Link to="/Home">Home</Link>
             <Link to="/Review">Review</Link>
             <Link to="/Dashboard">Dashboard</Link>
             <Link to="/Blogs">Blogs</Link>
              <Link to="/About">About</Link>  
        </div>
    );
};

export default Heder;