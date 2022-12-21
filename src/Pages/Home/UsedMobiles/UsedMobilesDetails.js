import React from 'react';

const UsedMobilesDetails = ({mobile, setTreatment}) => {
    const {name, location, mobileImg, originalPrice, publishDate, resalePrice, yearsOfUsed, information} = mobile;
    return (
        <div className='p-5 rounded-lg border '>
            <img className='w-11/12 h-96 object-cover' src={mobileImg} alt="" />
            <h2 className="text-2xl">{name}</h2>
            <p>{location}</p>
            <p>Orginal price: {originalPrice}</p>
            <p>Resale price: {resalePrice}</p>
            <p>Date: {publishDate}</p>
            <p>Use of years: {yearsOfUsed}</p>
            <p>{information}</p>
            {/* <button className='btn btn-outline w-full mt-3'>Book Now</button> */}
            <label 
            className='btn btn-outline w-full mt-3' 
            onClick={() => setTreatment(mobile)}
            htmlFor="booking-modal"
            >Book Now</label>
        </div>
    );
};

export default UsedMobilesDetails;