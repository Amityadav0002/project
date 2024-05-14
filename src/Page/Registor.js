import React from "react";
import {Link} from'react-router-dom';
function Registor(){
    return (
        <div className="container ">
            <div className="row justify-content-md-center">
                <div className="col-md-4 bg-light shadow">
                    <p className="h3 text-center">Registration page</p>
                    <hr />
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="number" className="form-label">Mobile No.</label>
                        <input type="text" className="form-control" id="number" aria-describedby="number" />
                    </div>
                    <div className="mb-3">
                        <div className="form-label">Gender</div>
                        <select className="form-select" aria-label="select">
                            <option selected>Choose....</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="create" className="form-label">Create new password</label>
                        <input type="password" className="form-control" id="create" />
                    </div>
                    <div className="mb-3">
                        <label for="create" className="form-label">Re-Enter password</label>
                        <input type="password" className="form-control" id="create" />
                    </div>
                    <div className="mb-3">
                        <input type="button" className="btn btn-success mr-3" value="submit" />
                        If you have already account?<Link to='/'>LogIn</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registor

    
