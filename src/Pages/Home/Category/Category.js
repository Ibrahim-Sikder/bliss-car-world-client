import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../share/Loading/Loading';
import ShowCategories from './ShowCategories';

const Category = () => {

    const [categories, setCategories] = useState([]);

    // useEffect( () => {
    //     fetch(`http://localhost:5000/mobileCategory`)
    //     .then( res => res.json())
    //     .then( data => setCategories(data))
    //     .catch( err => console.error(err));
    // } , [])


    const {data: mobileCategory, isLoading} = useQuery({
        queryKey: ['mobileCategory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mobileCategory`);
            const data = await res.json();
            return data;
        }
            
        });


        if(isLoading) {
            return <Loading></Loading>
        }


    // Load data using react query 
   

    return (
        <div>
            <h2 className='text-4xl text-center mt-14 mb-5 font-semibold'> Chooice Any <span className='text-[#006CEA]'>Brand</span> And Find Your <span className='text-[#006CEA]'>Best Mobile</span> </h2>
            <div className='grid lg:grid-cols-3 gap-9'>
                {
                    mobileCategory?.map( category => <ShowCategories
                    key={category._id}
                    category={category}
                    ></ShowCategories>)
                }
            </div>
        </div>
    );
};

export default Category;