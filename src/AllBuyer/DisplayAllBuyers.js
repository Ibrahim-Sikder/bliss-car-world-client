import React from 'react';

const DisplayAllBuyers = ({buyer}) => {
    const {name, email, role} = buyer ;
    return (
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
     
      <tr>
        <th>{buyer.i+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
      </tr>
     
    </tbody>
  </table>
        </div>
    );
};

export default DisplayAllBuyers;