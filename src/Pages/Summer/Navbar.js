import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img 
            className='logo'
            src='/images/logo.jpg'
            />
            A.Loop Ensemble
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            Menu
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/winter' className='nav-links' onClick={closeMobileMenu}>
                O nama
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/instructions' className='nav-links' onClick={closeMobileMenu}>
                Oprema
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/ourteam' className='nav-links' onClick={closeMobileMenu}>
                Naš tim
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li> 
            <li className='nav-summer'>
              <Link to='/winter' className='nav-links' onClick={closeMobileMenu}>
                ZIMA
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
