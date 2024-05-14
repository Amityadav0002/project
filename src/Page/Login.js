import React from "react";
 import { Link } from 'react-router-dom';

function Login() {
    return (
        <div class="container">
            <div class="row justify-content-md-center mt-5">
                <div class="col-4 bg-light shadow">
                    <h1 className="text-center">Login Here</h1>
                    <label for="Username" className="form-label">Username</label>
                    <input type="text" className="form-control" />
                    <label for="Username" className="form-label">Password</label>
                    <input type="password" className="form-control" />
                    <Link  className='btn btn-success' to="landing">Login</Link> 
                    <Link to='registration' className='ms-5'>New User Registor</Link> 
                </div>
            </div>
        </div>


    )
}
export default Login
