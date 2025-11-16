import React, { useEffect, useState } from 'react'
import './Header.css'
import '../App.css'
import logo from '../assets/lexvera-logo1.png'
import { Menu, X } from 'lucide-react';
const Header = ({setModal}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const [showDropdown1, setShowDropdown1] = useState(false);
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
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
      <div className='logo'><a href="#hero"><img src={logo} alt="lexvera" /></a></div>
<div  className={`${isOpen ? 'menu-slide active' : 'menu-slide'} menu`}>
  <ul children={scrolled?'ul-scroll':''}>
    <li onClick={toggleMenu}><a href="/" >Home</a></li>

      
    <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} >
  <span className="nav-link">Services</span>
  {showDropdown && (
    <ul className="dropdown-menu">
      <li><a href="/service/patent">Patent Protection & Strategy</a></li>
      <li><a href="/service/copyright">Copyright Protection & Management</a></li>
      <li><a href="/service/trademark">Trademark Registration & Enforcement</a></li>
      <li><a href="/service/research">IP Research & Analysis</a></li>
      <li><a href="/service/innovation">Innovation Strategy & R&D Alignment</a></li>
    </ul>
  )}
</li>
    <li onClick={toggleMenu}><a href="/about" >About</a></li>
    <li onMouseEnter={toggleDropdown1} onMouseLeave={toggleDropdown1} >
  <span className="nav-link">Industry Expertise</span>
  {showDropdown1 && (
    <ul className="dropdown-menu">
      <li><a href="/#">Technology & Software</a></li>
      <li><a href="/#">Entertainment & Media</a></li>
      <li><a href="/#">Life Sciences & Healthcare</a></li>
      <li><a href="/#">Education & Research</a></li>
      <li><a href="/#">Manufacturing & Engineering</a></li>
      <li><a href="/#">Consumer Goods & Retail</a></li>
    </ul>
  )}
</li>
    <li onClick={toggleMenu}><a href='/contact'>Contact</a></li>
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