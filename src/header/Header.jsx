import React, { useEffect, useState } from 'react'
import './Header.css'
import '../App.css'
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <div className={`header ${scrolled ? "scroll" : ""}`}>
      <div className='logo'><a href="#hero">LEXVERRA</a></div>
      <div><ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul></div>
      <div>
        <button>
          <a href="#contact">Book a Consaltant</a>
        </button>
      </div>
    </div>
  )
}

export default Header