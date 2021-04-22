import React, { Component } from 'react'
import EmployeeTable from "./EmployeeTable";
import api from "../utils/api2"; 

class EmployeeTableList extends Component{
    state= {
        employee: [],
        filtered: [],
    }
    componentDidMount(){
        api.getUsers()
        .then(response =>{
         this.setState({ employee: response.data.results,
          filtered: response.data.results,  
         })  
        })
    }
    render(){
        return (
            this.state.filtered.map(employee =>(
            <EmployeeTable
                key ={employee.login.uuid}
                image ={employee.picture.thumbnail}
                firstName ={employee.name.first}
                lastName= {employee.name.last}
                email={employee.email}
                phone= {employee.phone}
                Dob= {employee.dob.age}
           />
        ))
        )
    }
    
}



export default EmployeeTableList;

