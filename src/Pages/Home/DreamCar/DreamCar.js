import React from 'react';
import car from '../../../images/car.jpg';
import car1 from '../../../images/car1.jpg';
import car2 from '../../../images/car2.jpg';
const DreamCar = () => {
return (
    <div className='bg-black py-24'>
        <h2 className='text-5xl text-center font-bold text-white mb-8'>Special</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
            <div className="card w-96 text-white bg-[#373C3F] shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={car} alt="Shoes" className="rounded-xl h-1/3" />
            </figure>
                <div className="card-body items-center text-center">
            <h2 className="card-title">BMW NEW CAR </h2>
            <p>BMW, in full Bayerische Motoren Werke AG, German automaker noted for quality sports sedans and motorcycles. Headquarters are in Munich.</p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
            </div>
            </div>
            <div>
            <div className="card w-96 text-white bg-[#373C3F] shadow-xl">
            <figure className="px-10 pt-10">
                <img src={car1} alt="Shoes" className="rounded-xl" />
            </figure>
                <div className="card-body items-center text-center">
            <h2 className="card-title">BMW NEW CAR </h2>
            <p>BMW, in full Bayerische Motoren Werke AG, German automaker noted for quality sports sedans and motorcycles. Headquarters are in Munich.</p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
            </div>
            </div>
            <div>
            <div className="card w-96 text-white bg-[#373C3F] shadow-xl">
            <figure className="px-10 pt-10">
                <img src={car2} alt="Shoes" className="rounded-xl" />
            </figure>
                <div className="card-body items-center text-center">
            <h2 className="card-title">BMW NEW CAR </h2>
            <p>BMW, in full Bayerische Motoren Werke AG, German automaker noted for quality sports sedans and motorcycles. Headquarters are in Munich.</p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
            </div>
            </div>
            
        </div>
    </div>
);
};

export default DreamCar;