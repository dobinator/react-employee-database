import React from 'react'
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList() {
    return (
        data.map(employee =>(
        <EmployeeCard
            key ={employee.id}
            image ={employee.image}
            name ={employee.name}
            email={employee.email}
            phone= {employee.phone}
            DOB= {employee.DOB}
       />
    ))
    )
}



export default EmployeeCardList;

