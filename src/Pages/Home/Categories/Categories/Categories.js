import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category';

const Categories = () => {
    const [products, setProducts ] = useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setProducts(data))
       },[])




    return (
      <div>
              <div>
            <h2 className='text-5xl font-bold text-center mb-10'>Poducts Categories </h2>
            <Link> <button className='btn btn-outline mb-5 ml-10'>Luxury Car</button> </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    products.map((product, i) => <Category
                        key={product.i}
                        product={product}
                    ></Category>)
                }
            </div>
        </div>

      
      




      </div>
    );
};

export default Categories;