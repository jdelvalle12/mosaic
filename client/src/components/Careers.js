import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import '../App.css';

const Careers = () => {    
    return (
        <div className='career-section'>
           <h2>Careers</h2> 
            <h3>Come Join Our Team</h3>
                <p>We're on an ambitious journey, and we want you to
                   be a part of it. Your skills can help shape the 
                   future at Mosaic. Explore exciting career opportunities 
                   with us today!
                </p>
                <Link to='/careers' className='careers-link'>Join the team</Link>
        </div>
    );
};

export default Careers;