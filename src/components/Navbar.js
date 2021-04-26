import React from "react";

function Navbar(props) {

  return (
    <div className ="navbar sticky-top navbar-light bg-light justify content-center">
      <p className = "font-weight-bold">High Byte</p>
       <p>Employee Directory</p>
       <button 
       className= "btn btn-secondary"
       type="submit"
       onClick={props.handleSortbyName}
       >Name</button>
    <form className="form-inline">
      <input 
      onChange= {props.handleInput}
      value= {props.value}
      className= "form-control" 
      type="text"
      placeholder= "Search Employee" />
      </form>
      </div>
  

  )
  }
export default Navbar;
