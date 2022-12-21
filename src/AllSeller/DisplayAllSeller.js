import React from 'react';

const DisplayAllSeller = ({seller}) => {
    const {name, email, role} = seller ;
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
              <th>1</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{role}</td>
            </tr>
           
          </tbody>
        </table>
              </div>
    );
};

export default DisplayAllSeller;