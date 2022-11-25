import React from 'react';
import carBg from '../../../images/carBg.jpg';
import icon from '../../../images/carIcon.png';
import icon3 from '../../../images/icon3.png';


const SpecialSection = () => {
    return (
        <div className='p-20'
        style={{
            background:`url(${carBg})`
        }}
        >
           <div className='grid mt-24 place-content-center gap-10 h-auto grid-cols-1 md:grid-cols-2'>
           <div className='bg-[#FAB637] p-20 flex mx-auto h-3/5 items-center justify-center'>
                <div className='mr-5 w-38'>
                    <img src={icon} alt="" />
                </div>
                <div>
                    <h2 className='text-3xl font-bold'>Do you want to sell a car ? </h2>
                    <p className='text-white'>What’s your car worth? Receive the absolute best value for your trade-in vehicle. We even handle all paperwork. Schedule your appointment today!</p>
                </div>
           </div>
           <div  className='bg-[#FF4848] p-10 flex mx-auto h-3/5 items-center justify-center mr-10'>
           <div className='mr-5 w-38'>
                    <img className='bg-black' src={icon3} alt="" />
                </div>
                <div>
                    <h2  className='text-3xl font-bold'>Are you looking a car for you?</h2>
                    <p className='text-white'>Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.</p>
                </div>
           </div>
           </div>
            
        </div>
    );
};

export default SpecialSection;