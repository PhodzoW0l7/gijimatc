import React from 'react'
import './Pictures.css'
import Picture1 from '../../assets/picture1.jpg'
import Picture2 from '../../assets/picture2.jpg'
import Picture3 from '../../assets/picture3.jpg'
import Picture4 from '../../assets/drivertraining.jpg'
import Picture5 from '../../assets/Trainingcourse.jpg'
import Picture6 from '../../assets/Responsetraining.jpg'
import Picture7 from '../../assets/gijimasport.jpg'
import Picture8 from '../../assets/Demofarm.jpg'

const Pictures = () => {
  return (
    <div>
      {/* First row of cards */}
      <div className='wrapper'>
        <div className='card'>
          <img src={Picture1} alt='Training 1' />
          <div className='info'>
            <h1>Firearm Training</h1>
            <p>We offer comprehensive firearm training programs designed to ensure safe, effective, and responsible firearm use.</p>
          </div>
        </div>

        <div className='card'>
          <img src={Picture2} alt='Training 2' />
          <div className='info'>
            <h1>Security Officer Training</h1>
            <p>Our training programs equip security professionals with the skills and knowledge needed for effective and reliable protection services.</p>
          </div>
        </div>

        <div className='card'>
          <img src={Picture3} alt='Training 3' />
          <div className='info'>
            <h1>Drone Pilot Training</h1>
            <p>Our outsourced Drone Pilot Training courses provide hands-on experience and expert instruction for mastering drone operations and maximizing aerial capabilities.</p>
          </div>
        </div>

        <div className='card'>
          <img src={Picture4} alt='Training 4' />
          <div className='info'>
            <h1>Driver Training</h1>
            <p>Our Driver Training programs offer expert instruction to enhance driving skills, safety awareness, and vehicle handling for all levels of experience</p>
          </div>
        </div>
      </div>

      {/* Second row of cards */}
      <div className='wrapper'>
        <div className='card'>
          <img src={Picture5} alt='Training 1' />
          <div className='info'>
            <h1>Training Course</h1>
            <p>Our Training Courses are designed to provide specialized knowledge and practical skills across various fields to ensure professional growth and development.</p>
          </div>
        </div>

        <div className='card'>
          <img src={Picture6} alt='Training 2' />
          <div className='info'>
            <h1>First Aid</h1>
              <p>Our First Aid training courses prepare individuals to respond effectively in emergency situations, providing essential skills to handle injuries and medical crises with confidence.</p>
          </div>
        </div>

        <div className='card'>
          <img src={Picture7} alt='Training 3' />
          <div className='info'>
            <h1>Sports Facility</h1>
            <p>Our sports facility offers top-notch amenities and equipment to support athletes and enthusiasts in achieving their fitness and competitive goals</p>
          </div>
        </div>

        <div className='card'>
          <img src={Picture8} alt='Training 4' />
          <div className='info'>
            <h1>Demo Farm</h1>
            <p>Our demo farm showcases cutting-edge indoor farming techniques using hydroponic systems to demonstrate sustainable and efficient agricultural practices.</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pictures
