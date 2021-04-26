import React from "react";

function Navbar(props) {

  return (
    <div className ="navbar sticky-top navbar-dark bg-dark justify content-center">
      <p className="navbar-brand text-white">High Byte</p>
       <p className="text-white">Employee Directory</p>
  
    <form className="form-inline">
      <input 
      onChange= {props.handleInput}
      value= {props.value}
      className= "form-control mr-sm-2" 
      type="Search"
      placeholder= "Search Employee"
       aria-label="Search"/>
     <button 
     className="btn btn-outline-secondary my-2 my-sm-0"
      type="submit">Search</button>
      </form>
      </div>
  

  )
  }
export default Navbar;
