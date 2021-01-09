import React from 'react'
import './Instructions.css'

import Navbar from './Navbar'
import Footer from '../../components/Footer'

function Instructions() {
    return (
        <>
        <Navbar/>

        <div className='instructions-container'>

            <div className='instructions-heading'>
                <h1>Kodeks oblacenja</h1>
                <p>Ne nosite široku odjeću!</p>
                <p>Pravilna odjeća za klizanje pomaže umjetničkim klizačima da bolje kližu.</p>
            </div>

            <div className='instructions-links'>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <a>Odjeca za klizače treba da prijanja uz tijelo i da omogućava slobodno kretanje.</a>
                    </div>
                    <div className='instructions-links-items'>
                        <a>Kao prvi sloj nosite termo donje rublje, preko možete obući termo tajice i rolku, a kao završni sloj kratku jaknu od flisa ili prsluk i postavljenu trenerku.</a>
                    </div>
                </div>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <img className='img'
                        src='/images/oprema1.jpg'/>
                    </div>
                </div>
            </div>

            <div className='instructions-links'>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <img className='img'
                        src='/images/oprema2.jpg'/>
                    </div>
                </div>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <a>Namjensko odijelo za klizanje možete kupiti kasnije.</a>
                    </div>
                    <div className='instructions-links-items'>
                        <a>Najvažnije je da odjeća prijanja uz tijelo i da vam dopušta slobodno kretanje.</a>
                    </div>
                </div>
            </div>

            <div className='instructions-links'>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <a>Rukavice su obavezne na treningu, kao i kapa ili termalna traka za glavu naročito za početnike.</a>
                    </div>
                    <div className='instructions-links-items'>
                        <a>Idealne za prve satove umjetničkog klizanja su vodonepropusne rukavice.</a>
                    </div>
                    <div className='instructions-links-items'>
                        <a>Šal nije dozvoljen na treninzima i zato je dobro obući rolku.</a>
                    </div>
                </div>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <img className='img'
                        src='/images/oprema3.jpg'/>
                    </div>
                </div>
            </div>

            <div className='instructions-links'>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <img className='img-4'
                        src='/images/oprema4.jpg'/>
                    </div>
                </div>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <a>Kosa treba da je sklonjena sa lica.</a>
                    </div>
                    <div className='instructions-links-items'>
                        <a>Kosu pokupite u rep, punđu ili  pletenice.</a>
                    </div>
                </div>
            </div>

            <div className='instructions-links'>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <a>S obzirom da se klizalište ne grije odjeća treba biti topla i slojevita.</a>
                    </div>
                    <div className='instructions-links-items'>
                        <a>Preporučujemo nošenje jaknice od flisa i preko zimske jakne koju, nakon zagrijavanja, možete skinuti.</a>
                    </div>
                </div>
                <div className='instructions-links-wraper'>
                    <div className='instructions-links-items'>
                        <img className='img'
                        src='/images/oprema5.jpg'/>
                    </div>
                </div>
            </div>

        </div>

        <Footer/>
        </>
    )
}

export default Instructions
