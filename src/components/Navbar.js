import React from "react";

function Navbar(props) {

  return (
    <nav className ="navbar sticky-top navbar-light bg-light justify content-center">
      <div className= "container-fluid">
       <span className ="navbar-brand fs-1">
        Employee Directory
      </span>
    <form className="form-inline">
      <input 
      onChange= {props.handleInput}
      value= {props.value}
      className= "form-control" 
      // type="Search"
      aria-label= "Search"
      />
      </form>
      </div>
      </nav>

  )
  }
export default Navbar;
