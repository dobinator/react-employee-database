import React from 'react'

function Navbar() {
    return (
    
        <nav className="navbar sticky-top navbar navbar-light bg-light">
            <a className="navbar-brand fs-1" href="#">Employee Directory</a>
            <p className= "text-start">Search for a specific Employee or by Name or Category.</p>
            {/* <button onClick={} className= ""></button>
            <button onClick= {} className= ""></button> */}
          <form className="d-flex">
              <input className="form-control mr-sm-2" 
              type="search"
              placeholder="search Employee" 
              aria-label="Search"/>  
          </form>
        </nav>  

    )
}

export default Navbar; 
