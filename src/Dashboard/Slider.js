import React from "react";
import './Slider.css'
const img1 = "https://www.bartan.com/gallery/banner_01124810Smart_Steamer_final_banner_mobile.jpg";
const img2 = "https://i.pinimg.com/736x/3b/5e/18/3b5e1853127852816843020c86159dc7.jpg";
const img3 = "https://m.media-amazon.com/images/I/61vYb6pqUOL._AC_UF894,1000_QL80_DpWeblab_.jpg";
function Slider() {
    return (
        <div className=" container">
            <div className="row-md">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100 " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img3} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            
        </div>
    )
}
export default Slider