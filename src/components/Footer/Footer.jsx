import React from 'react';
import './Footer.css';
import logo from '../../assets/logo site.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <img src={logo} alt="Logo" />
        <p>The Gijima Training Academy is the skills development institution of Bidvest Protea Coin | 2024</p>
        <p></p>
        <div className="icons">
          <a href="#"><box-icon type='logo' name='facebook'></box-icon></a>
          <a href="#"><box-icon name='linkedin' type='logo'></box-icon></a>
          <a href="#"><box-icon name='youtube' type='logo'></box-icon></a>
          <a href="#"><box-icon name='whatsapp' type='logo'></box-icon></a>
        </div>
      </div>

      <div className="footer-content">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Training</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Learning</a></li>
          <li><a href="#">Platforms</a></li>
        </ul>
      </div>

      <div className="footer-content">
        <h4>Movement</h4>
        <ul>
          <li><a href="#">Training</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Learning</a></li>
          <li><a href="#">Platforms</a></li>
        </ul>
      </div>

      <div className="footer-content">
        <h4>Help</h4>
        <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Learning</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
