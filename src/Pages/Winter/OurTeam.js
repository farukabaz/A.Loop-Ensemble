import React from 'react'
import './OurTeam.css'
import CardItem from '../../components/CardItem'
import Navbar from './Navbar'
import Footer from '../../components/Footer'

function OurTeam() {
    return (
        <>
            <Navbar/>
            <div className='cards'>
                <h1>Klub vode</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                            src ='images/BelmaTrajkov.jpg'
                            text='Belma Trajkov jedna od licenciranih trenerica kluba i nacionalni sudija za umjetnicko klizanje'
                            label='Trenerica'
                            />
                            <CardItem
                            src='images/AmilaSabić.jpg'
                            text='Amila Šabić jedna od licenciranih trenerica'
                            label='Trenerica'
                            />
                            <CardItem
                            src='images/img-2.jpg'
                            text='Elma Krasny jedna od licenciranih trenerica'
                            label='Trenerica'
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className='cards'> 
                <h1>Fotograf i tehnicka podrška</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                        <CardItem
                            src='images/DenijelTrajkov.jpg'
                            text='Denijel Trajkov'
                            label='Fotograf'
                        />
                        <CardItem
                            src='images/FarukAbaz.jpg'
                            text='Faruk Abaz'
                            label='IT Podrška'
                        />
                    </ul>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default OurTeam


