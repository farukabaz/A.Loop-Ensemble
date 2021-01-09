import React from 'react'
import '../../App.css'
import './Home.css'
import {Link} from 'react-router-dom' 
import {Button} from '../../components/Button'

function Home() {
    return (
        <div className='home-hero-container'>
             
            <h1>A.Loop Ensemble</h1>
            <p>Koje vas više zanima?</p>
            
            <div className='hero-btns'>

                <Link className='links' to='/summer'>
                    <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                        Ljeto
                    </Button>
                </Link>

                <Link className='links' to='/winter'>
                    <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                        Zima                    
                    </Button>
                </Link>
            </div>
        </div>
    ) 
}

export default Home
