import React from "react";
import api from "utils/api2"; 
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import EmployeeCardList from "./components/EmployeeCardList";
import Footer from "./components/Footer";
import EmployeeCard from "./components/EmployeeCard";


class App extends React.Component {
  // state = {
  //   employees: [],
  // };

  // componentDidMount() {
  //   this.getEmployees();
  // }

  // getEmployees = async () => {
  //   const { data } = await API.getUsers();
  //   this.setState({ employees: data.results });
  // };

  render() {
    console.log(this.state);
    return (
      <div>
        < EmployeeCardList /> 
      </div>
    )
  }
}

export default App;
