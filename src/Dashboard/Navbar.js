import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className=" navbar navbar-expand-sm bg-success navbar-dark">
            <div className="container">
            <h1><a href="#" className="navbar-brand">Code</a></h1>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="mynav">
            <ul className="navbar-nav  ml-auto">
                <li className="nav-item"><a className="nav-link active"href="#">home</a></li>
                <li className="nav-item"><a className="nav-link"href="#">about</a></li>
                <li className="nav-item"><a className="nav-link"href="#">service</a></li>
                <li className="nav-item"><a className="nav-link"href="#">gallery</a></li>
                <li className="nav-item"><a className="nav-link"href="#">contact</a></li>
            </ul>
            </div>
            </div>
            <div class="col-md-2 mr-auto px-3">
                <a href="/">Logout</a>
            {/* <Link  className='btn btn-success' to="landing">Login</Link> */}
            </div>
        </nav>
        
    )
}
export default Navbar