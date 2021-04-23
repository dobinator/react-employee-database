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

//set up frunctions that deal with the changing of state, so that when they typr a user, that employees gets filteres to only include names of that user

render(){
  return (
    //out the tabler head
    //searchbar componet
    
<div class="container-fluid">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
      {this.state.filtered.map(employee =>(
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
      }
</table>
     </div>
  )
}

}
 







 export default App;


