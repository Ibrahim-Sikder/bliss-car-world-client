import React from 'react';
import img from '../../images/404.png';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
           <img className='notFound' src={img} alt="" />
        </div>
    );
};

export default NotFound;