import React from "react";
import API from "./utils/API";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import EmployeeCardList from "./components/EmployeeCardList";
import Footer from "./components/Footer";
import EmployeeCard from "./components/EmployeeCard";




class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
  };

  render() {
    console.log(this.state);
    return <h1>Employees go here</h1>;
  }
}

export default App;
