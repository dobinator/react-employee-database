import React from 'react'

function EmployeeTable(props) {
    return (
      <table class="table">
        <thead>
         <tr>
      <th scope="col">Image</th>
      <th scope="col">First Name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
      <th scope="col">age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"/> 
      <img 
          style={{ maxWidth: "60px" }}  
          className= "rounded-full shadow-md border border-gray-300"
          src= {props.image}
          alt="employee"/>
      <td className ="font-bold text-md">{props.firstName} {props.lastName}</td>
      <td className ="text-blue-500">{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.Dob}</td>
    </tr>
    </tbody>
    </table>
    )
}


export default EmployeeTable;
