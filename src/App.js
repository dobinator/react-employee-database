import React from "react";
import moment from "moment"; 
import API from "./utils/API2"; 
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
import Footer from "./components/Footer";


class App extends React.Component {
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









 export default App;


