import React from 'react'

function navbar() {
    return (
       <div className= "">
        <nav className="navbar sticky-top navbar navbar-light bg-light">
            <a className="navbar-brand fs-1" href="#">Employee Directory</a>
            <p className= "text-start">Search for a specific Employee or by Name or Category.</p>
          <form className="d-flex">
              <input className="form-control mr-sm-2" type="search"placeholder="search Employee" aria-label="Search"/>
              <button className="btn btn-light my-sm-0" type="submit">Search</button>
          </form>

        </nav>  
        </div>

    )
}

export default navbar; 
