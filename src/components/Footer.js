import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {GoLocation} from 'react-icons/go'
import {FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa'
import ContactForm from '../components/ContactForm'

function Footer() {
  return (
    <div className='footer-container'>

      <div className='footer-heading'>
        Pridružite nam se u ovoj avanturi 
      </div>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <p>TERMINI</p>
            <a>Utorak</a> 
            <a>21:15 - 22:15</a>
            <a>Četvrtak</a>
            <a>21:15 - 22:15</a>
            <a>Subota</a>
            <a>14:30 - 15:30</a>
          </div>
          <div class='footer-link-items'>
            <p>LOKACIJA</p>
            <a>Ice Rink HK Vukovi, Sarajevo 71000</a>
            <a
            href='https://www.google.com/maps/place/Ice+Rink+HK+Vukovi/@43.8697206,18.4087533,17.25z/data=!4m5!3m4!1s0x4758c944b1ba7abd:0xdb90ec761d845a0a!8m2!3d43.8698867!4d18.409011'
            className='location-icon'>
              <GoLocation/>
            </a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <p>MEDIA</p>
            <a>Facebook</a>
            <a 
            href='https://www.facebook.com/LoopEnsemble/?ref=page_internal'
            className='media-icons'>
              <FaFacebookF/>
            </a>
            <a >Instagram</a>
            <a
              href='https://www.instagram.com/loop_ensemble/'
              className='media-icons'>
              <FaInstagram/>
            </a>
            <a >YouTube</a>
            <a
              href='https://www.youtube.com/'
              className='media-icons'>
              <FaYoutube/>
            </a>
          </div>
          <div class='footer-link-items'>
            <p>KONTAKT</p>
            <a>Broj telefona:</a>
            <a>061 700 982</a>
            <a>Ili nam pošaljite mail</a>
            <ContactForm/>
          </div>
        </div>
      </div>

      <Link to='./' className='footer-logo'>
        A.Loop Ansamble
      </Link>
    
    </div>
  );
}

export default Footer;
