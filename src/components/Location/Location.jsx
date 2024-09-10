import React from 'react';
import './Location.css';
import Title from '../Title/Title';

const Location = () => {
  return (
    <div className="location-container">
      <Title title ='Gijimas Location'/>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.300384024687!2d28.265848175235732!3d-25.561671277478172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfdd3c6dce21bb%3A0x9affb4d30b1f3c0f!2sGijima%20Training%20Academy%20Bidvest%20Protea%20Coin!5e0!3m2!1sen!2sza!4v1725008023267!5m2!1sen!2sza"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Gijima Training Academy Location"
      ></iframe>
    </div>
  );
};

export default Location;
