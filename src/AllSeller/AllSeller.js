import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import DisplayAllSeller from './DisplayAllSeller';

const AllSeller = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email)
    const {data: sellers, isLoading} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`https://bliss-car-world-server-ibrahim-sikder.vercel.app/users`);
            const data = await res.json();
            return data;

        }
            
        });
        // console.log(seller)


    return (
        <div>
        <h2 className='text-3xl'>All Sellers</h2>
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
  sellers &&
    sellers.map((seller, i)=> <tr key={seller._id}>
        <th>{i+1}</th>
        <td>{seller.name}</td>
        <td>{seller.email}</td>
        <td>{seller.role}</td>
      
      </tr>)
  }
</tbody>
</table>
</div>
        
    </div>
    );
};

export default AllSeller;