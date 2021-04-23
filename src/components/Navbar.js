import React from "react";

function Navbar(props) {
const searchEmployee= (event)=>{
  
}

  return (
    <nav className ="navbar navbar-light bg-light justify content-center">
    <form className="form-inline">
      <input className= "form-control mr-sm-2" 
      type="search"
      aria-label= "search"
      onKeyUp= {searchEmployee}/>
      </form>
      </nav>
  )
}

export default Navbar;
