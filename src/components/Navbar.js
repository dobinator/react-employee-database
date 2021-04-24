import React from "react";

function Navbar(props) {

  return (
    <>
    <nav className ="navbar sticky-top navbar-light bg-light justify content-center">
      <div className ="container-fluid">
       <span className ="navbar-brand fs-1">
        Employee Directory
      </span>
    <form className="form-inline">
      <input 
      className= "form-control mr-sm-2" 
      type="Search"
      aria-label= "Search"
      onChange= {props.handleInput}
      />
      <button
      className= "btn btn-primary"
      type= "button"
      >Search
      </button>

      </form>
      </div>
      </nav>
      </>
  )
}

export default Navbar;
