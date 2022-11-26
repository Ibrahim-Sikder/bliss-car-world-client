import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ElectricCar from './ElectricCar';

const ElectricCars = () => {
    const [electricCars, setElectricCars] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/electricCars')
        .then(res => res.json())
        .then(data => setElectricCars(data))
       },[])



    return (
        <div>
        <div className='mt-16'>
      <Link>  <h2 className='btn btn-outline text-2xl font-bold text-center mb-8'>Electric Car </h2></Link>
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {
              electricCars.map((electric, i)=> <ElectricCar
              key={electric.i}
              electric={electric}
              ></ElectricCar> )
            }
        </div>
        
    </div>
   </div>
    );
};

export default ElectricCars;