import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DisplayAllBuyers from './DisplayAllBuyers';

const AllBuyer = () => {
    const {data: buyers, isLoading} = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://bliss-car-world-server-ibrahim-sikder.vercel.app/buyers`);
            const data = await res.json();
            return data;
        }
            
        });



    return (
        <div>
            <h2 className='text-3xl'>All Buyers</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
         
          </tr>
    </thead>
    <tbody>
      { 
      buyers &&
        buyers.map((buyer, i)=> <tr key={buyer._id}>
            <th>{i+1}</th>
            <td>{buyer.name}</td>
            <td>{buyer.email}</td>
            <td>{buyer.role}</td>
          
          </tr>)
      }
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllBuyer;