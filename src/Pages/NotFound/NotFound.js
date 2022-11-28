import React from 'react';
import img from '../../images/heroImg/404.jpg';
const NotFound = () => {
    return (
        <div>
           <div className='flex items-center justify-center mt-20'>
               <div>
               <h2 className='text-center mb-5 text-5xl font-bold'>Page not found</h2>
                <img src={img} alt="" />
               </div>
           </div>
        </div>
    );
};

export default NotFound;