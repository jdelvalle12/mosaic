import React from 'react';

import Background from '../images/abstract-image.jpg';

import '../index.css';
import '../App.css';

const services = () => {

    return (
       <div className='services-container'>

           <img src={Background} alt="background" className="background-design" />
       </div> 
    )
}

export default services;