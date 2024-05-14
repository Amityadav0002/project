import React from 'react'
import Navbar from './Navbar'
import Myhome from './Myhome'
import Slider from './Slider'
import Services from './Services'

function Mylanding() {
    return (
        <div className='container-fluid-md'>
            <div className='row-md'>
                <div className='col-md-12 border fixed-top shadow'>
                    <Navbar />
                </div>
            </div>
            <div className='row mt-3 text-center'>
                <div className='col-md-12 mt-5 bg-danger'>
                    <Myhome></Myhome>

                </div>
            </div>
            <div className='row  text-center'>
                <div className='col-md-12  bg-light'>
                    <Slider></Slider>

                </div>
            </div>
            <div className='row  text-center'>
                <div className='col-md-12  bg-light'>
                    <Services></Services>

                </div>
            </div>
        </div>
    )
}

export default Mylanding