import React from "react";
import api from "utils/api2"; 
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import EmployeeTableList from "./components/EmployeeTableList";
import Footer from "./components/Footer";
import EmployeeTable from "./components/EmployeeTable";


class App extends React.Component {

  render() {
    console.log(this.state);
    return (
      <div>
        < EmployeeTableList /> 
      </div>
    )
  }
}








export default App;
