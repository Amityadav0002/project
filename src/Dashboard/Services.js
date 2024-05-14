import React from "react";
import './Services.css'
const img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jlCxjblPOWVwP57ph1a6EN0a1sFI---YPLvALTrYKyK3dz-oY-L2fc90nLEA9Ke9_Eg&usqp=CAU"
function Services() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div class="card" >
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card" >
                        <img src={img} class="card-img-top img" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card" >
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card" >
                        <img src={img} class="card-img-top h-3" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services