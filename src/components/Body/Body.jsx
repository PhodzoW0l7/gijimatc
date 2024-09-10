import React from 'react';
import './Body.css';
import facility from '../../assets/whole facility.jpg';

const Body = () => {
  return (
    <section>
      <div className='about-us'>
        <h1>Gijima Facilities</h1>
        <div className='wrapper'>
          <div className='content'>
            <br />
            <p>Gijima organically evolved into the physical and symbolic home of Bidvest Protea Coin’s sustainability, social and community development efforts. The facility boasts amongst other things; a sewage treatment plant, the Gijima Demo Farm with various hydroponic systems and mushroom growing room, Gijima Sport facilities, the Youth and Community Development Studio, uniform recycling area, large scale solar system.</p>
          </div>
          <div className='image-section'>
            <img src={facility} alt="Gijima Facility" />
          </div>
        </div>
      </div>
      <div className='about-us2'>
        <h1>Programmes</h1>
        <div className='wrapper'>
          <div className='content2'>
            <br />
            <p>Gijima Training Academy is situated just north of Pretoria in a quiet rural setting conducive for learning. The main Academy is supported by regional training centers around South Africa. The Academy is highly experienced in conducting large scale skills development projects, enabled by accommodation for around 650 students at any given point in time, supported by infrastructure and resources that allow for holistic leading-edge security and related training. For almost the entire year, delegates on training programmes sleep at Gijima Training Academy. This requires full-time supervision and support functions which includes training instructors on site, food preparation services, learner wellness support, regular onsite clinic visits and so forth. Focus is mainly on providing skills development interventions for Bidvest Protea Coin employees and unemployed individuals on learnership and other similar programmes, but we also provide and host training programmes for selected institutional clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
