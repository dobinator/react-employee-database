import React from "react";

function Navbar(props) {

  return (
    <div className ="navbar sticky-top navbar-light bg-light justify content-center">
      <div className= "container-fluid">
       <h1>Employee Directory</h1>
       <button onClick={handleSortbyName}></button>
    <form className="form-inline">
      <input 
      onChange= {props.handleInput}
      value= {props.value}
      className= "form-control" 
      type="text"
     placeholder= "Search Employee" />
      </form>
      </div>
      </div>

  )
  }
export default Navbar;
