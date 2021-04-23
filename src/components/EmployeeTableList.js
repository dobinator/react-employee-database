import React, { Component } from 'react'
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API2"; 
import Navbar from "./Navbar"; 
import moment from "moment"; 

class EmployeeTableList extends Component{
    state= {
        employee: [],
        filtered: [],
    }
    componentDidMount(){
        API.getUsers()
        .then(response =>{
         this.setState({ employee: response.data.results,
          filtered: response.data.results,  
         })  
        })
    }
    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //       [name]: value
    //     });
    //   };

    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchMovies(this.state.search);
    //   };
    

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
                Dob= {moment(employee.dob.date).format('MM-DD-YYYY')}
           />
        ))
        )
    }
    
}












export default EmployeeTableList;

