import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import logo from '../../assets/logo site.png';
import menu_icon from '../../assets/bars.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 80 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu,setMobileMenu ] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) :setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      {/* Wrap the logo in a Link to navigate to the home page */}
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to="/" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="/training-courses"smooth={true} offset={-260} duration={500}>Training Courses</Link></li>
        <li><Link to="/courses-conducted"smooth={true} offset={0} duration={500}>Courses Conducted</Link></li>
        <li><Link to="/training-facilities"smooth={true} offset={0} duration={500}>Training Facilities</Link></li>
        <li><button className="btn"><Link to="/contact-us"smooth={true} offset={0} duration={500}>Contact Us</Link></button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
