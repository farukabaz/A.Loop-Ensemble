import React from 'react'
import '../../App.css'

import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Footer from '../../components/Footer'

import GallerySlider from './GallerySlider'
import {GallerySliderData} from './GallerySliderData'
import IceSkating from './IceSkating'

function Winter() {  
    return (
        <>
            <Navbar/> 
            <HeroSection/>
            <IceSkating/>
            <GallerySlider slides={GallerySliderData}/>
            <Footer/>
        </>
    )
}

export default Winter 
