import React from "react";
import moment from "moment";
import API2 from "./utils/API2";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import EmployeeTable from "./components/EmployeeTable";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    employee: [],
    filtered: [],
  };

  componentDidMount() {
    API2.getUsers().then((response) => {
      this.setState({
        employee: response.data.results,
        filtered: response.data.results,
      });
    });
  }
   
   handleInput = (event) => {
     console.log(event.target.value)
      this.setState({ employee: event.target.value});
    };

    // handleFormSubmit = (event) => {
    //   event.preventDefault();
    //   this.searchMovies(this.state.search);
    // };

    // set up functions that deal with the changing of state,
    // so that when they type a user, that employees gets filtered to only include names of that user

  render() {
    return (
      //out the table head
      // <Navbar />
      <div className="container-fluid">
        <Layout/>
        <Jumbotron/>
        <Navbar handleInput ={this.handleInput}/>
        <table className="table table-dark">
          <thead>
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
        <Footer/>
      </div>
    );
          }
        }

export default App;
