import React from 'react'
import './Pay.css'

import Navbar from './Navbar'
import Footer from '../../components/Footer'

function Pay() {
    return (
        <>
        <Navbar/>

        <div className='pay-container'>

            <div className='pay-heading'>
                <h1>Plaćanje</h1>
                <p>Plaćanje se vrši preko računa </p>
                <p>xxxx-xxxx-xxxx-xxxx</p>
            </div>

            <div className='sponsor-heading'>
                <h1>Sponzorisanje i donacije</h1>
                <p>Imamo opciju donacije i sponzorisanja </p>
                <p>Isto se uplaćuje na raćun</p>
                <p>xxxx-xxxx-xxxx-xxxx</p>
            </div>

        </div>

        <Footer/>
        </>
    )
}

export default Pay
