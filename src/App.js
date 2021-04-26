import React from "react";
import moment from "moment";
import API2 from "./utils/API2";
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    employee: [],
    filtered: [],
    search: " ", 
    sort: true,
  };
// call to get the information from the api
  componentDidMount() {
    API2.getUsers().then((response) => {
      this.setState({
        employee: response.data.results,
        filtered: response.data.results,
      });
    });
  }
// creating the search bar event for the employees
  handleInputChange = (event) => {
    // console.log(event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    this.setState ({
    [name]: value,
    });
  };
  // creating the function to sort employees
  //using the ternary operator
  handleSortByName = (event)=> {
  const sortEmployees = this.state.employees.sort((a, b)=> 
  a.name > b.name ? 1: -1
  );
  this.setState({ results: sortEmployees });

    switch (this.state.sort){
    case true:
    this.setState ({ sort: false});
    break; 
    case false:
    this.setState({ sort: true });
    sortEmployees.reverse(); 
    break;

    default:
    console.log ("Something isn't right");
    break;
} }
  
  render() {
    return (
      //out the table head
     <div className= "container-flex">
        <Navbar
          value ={this.state.search}
         handleInput={this.handleInput} 
         />
        <table>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">phone</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          {this.state.filtered.map((employee) => (
            <EmployeeTable
              key={employee.login.uuid}
              image={employee.picture.thumbnail}
              firstName={employee.name.first}
              lastName={employee.name.last}
              email={employee.email}
              phone={employee.phone}
              Dob={moment(employee.dob.date).format("MM-DD-YYYY")}
            />
          ))}

        </table>
        <Footer />
        </div>
    
    );
  }
}

export default App;
