import React from 'react'

function EmployeeCard(props) {
    return (
        <div className = "md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300">
          <img 
          style={{ maxWidth: "60px" }}  
          className= "rounded-full shadow-md border border-gray-300"
          src= {props.image}
          alt="employee"
          />
          <p className ="font-bold text-md">{props.firstName} {props.lastName}</p>
          <p className ="text-blue-500">{props.email}</p>
          <p>{props.phone}</p>
          <p>{props.Dob}</p>
        </div>
    )
}



export default EmployeeCard;
