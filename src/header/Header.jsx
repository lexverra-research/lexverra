import React, { useEffect, useState } from 'react'
import './Header.css'
import '../App.css'
import { Menu, X } from 'lucide-react';
const Header = ({setModal}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <div className={`header ${scrolled ? "scroll" : ""} head`}>
      <div className='logo'><a href="#hero"><img src="../assets/lexvera-logo.png" alt="lexvera" /></a></div>
<div  className={`${isOpen ? 'menu-slide active' : 'menu-slide'} menu`}>
  <ul>
    <li onClick={toggleMenu}><a href="#hero" >Home</a></li>
    <li onClick={toggleMenu}><a href="#service" >Service</a></li>
    <li onClick={toggleMenu}><a href="#about" >About</a></li>
    <li onClick={toggleMenu}><a href="#expertise" >Expertise</a></li>
    <li onClick={toggleMenu}><a href='#contact'>Contact</a></li>
  </ul>
</div>

      <div>
        <button onClick={setModal}>
          Book a Consaltant
        </button>
        {isOpen?<X className='menu-icon' onClick={toggleMenu} />:<Menu className='menu-icon'  onClick={toggleMenu}/>}
      </div>
    </div>
  )
}

export default Header