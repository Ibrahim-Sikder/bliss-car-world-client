import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MicrobusCar from './MicrobusCar';

const MicrobusCars = () => {
    const [microbusCar, setMicrobusCar] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/microbusCar')
        .then(res => res.json())
        .then(data => setMicrobusCar(data))
       },[])


    return (
       <div>
            <div className='mt-16'>
          <Link>  <h2 className='btn btn-outline text-2xl font-bold text-center mb-8'>Microbus Car </h2></Link>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                  microbusCar.map((micro, i)=> <MicrobusCar
                  key={micro.i}
                  micro={micro}
                  ></MicrobusCar> )
                }
            </div>
            
        </div>
       </div>
              
    );
};

export default MicrobusCars;