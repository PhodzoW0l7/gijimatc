import React from 'react';
import './Sponsors.css';

// Import your images
import logo1 from '../../assets/qcto.png';
import logo2 from '../../assets/sasseta.png';
import logo3 from '../../assets/naryseclogo.png';
import logo4 from '../../assets/nkangalalogo.png';
import logo5 from '../../assets/uiflogo.png';
import logo6 from '../../assets/saps.png';
import logo7 from '../../assets/CAA.png';
import logo8 from '../../assets/psira.png';

const Sponsors = () => {
  return (
    <div className='sponsors'>
     
      <div className="curved">
        <h1>Our Partners Include: </h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ba9653" fillOpacity="1" d="M0,64L48,53.3C96,43,192,21,288,53.3C384,85,480,171,576,176C672,181,768,107,864,74.7C960,43,1056,53,1152,85.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <g className="logos">
            <image href={logo1} x="120" y="60" width="150" height="150" />
            <image href={logo2} x="280" y="60" width="150" height="150" />
            <image href={logo3} x="440" y="60" width="150" height="150" />
            <image href={logo4} x="600" y="60" width="150" height="150" />
            <image href={logo5} x="740" y="60" width="150" height="150" />
            <image href={logo6} x="900" y="60" width="100" height="100" />
            <image href={logo7} x="1040" y="60" width="150" height="150" />
            <image href={logo8} x="1200" y="60" width="150" height="150" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Sponsors;
