import React from 'react';

const ElectricCar = ({electric}) => {
    const {name, img, description, new_price, resale_price, location} = electric;
    return (
        <div>
        <div className="card shadow-xl">
         <figure><img src={img} alt="Shoes" /></figure>
         <div className="card-body ">
         <h2 className="font-bold text-2xl ">{name}</h2>
         <p>{`${description.slice(0, 250)} ` + '...'}</p>
         <p>New Price: {new_price}</p>
         <p>Resale Price: {resale_price}</p>
         <p>Location: {location}</p>
         <div className="card-actions justify-center">
       <button className="btn btn-primary">Buy Now</button>
     </div>
   </div>
 </div>

    </div>
    );
};

export default ElectricCar;