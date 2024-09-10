import React from 'react';
import './TrainingFacilities.css';

import accommodationImg from '../../assets/rooms.png';
import cafeteriaImg from '../../assets/cafeteria.jpg';
import tuckshopImg from '../../assets/cafeteria.jpg';
import laundryImg from '../../assets/laundry.png';
import trainingRoomsImg from '../../assets/picture1.jpg';
import fireRoomImg from '../../assets/fireroom.png';
import hallsImg from '../../assets/halls.jpg';
import shootingRangeImg from '../../assets/trainingsimulator.jpg';
import tacticalTrainingImg from '../../assets/Program3.jfif';
import driverTestingImg from '../../assets/drivertraining.jpg';
import controlRoomImg from '../../assets/control room.jpg';
import computerStudioImg from '../../assets/computer.jpg';
import wellnessImg from '../../assets/Responsetraining.jpg';
import socialSupportImg from '../../assets/socialsupport.jpg';
import clinicImg from '../../assets/clinicvisit.jpeg';
import sportImg from '../../assets/sport.jpg';

const TrainingFacilities = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="facilities-hero">
        <div className="hero-content">
          <h1>Our Training Facilities</h1>
          <p>State-of-the-art facilities designed to offer the best learning experience.</p>
        </div>
      </section>

      {/* Hospitality Section */}
      <section className="facility-section">
        <h2>Hospitality at Gijima Training Academy</h2>

        {/* Accommodation */}
        <div className="facility-block">
          <h3>Accommodation</h3>
          <img src={accommodationImg} alt="Accommodation at Gijima" className="section-image" />
          <p>Accommodation is available for up to 650 individuals at any given time. Accommodation ranges from large dormitories accommodating 100 individuals per room to stand-alone units that accommodate 16 individuals per room.</p>
        </div>

        {/* Cafeteria */}
        <div className="facility-block">
          <h3>Cafeteria</h3>
          <img src={cafeteriaImg} alt="Gijima cafeteria" className="section-image" />
          <p>The Gijima Training Academy Cafeteria has been serving and preparing hearty, healthy meals for large groups of students for years. Seasonal, fresh vegetables are prepared and grown by the Gijima Demo Farm situated adjacent to the Academy.</p>
        </div>

        {/* Tuck Shop */}
        <div className="facility-block">
          <h3>Tuck Shop and Fast Food</h3>
          <img src={tuckshopImg} alt="Tuck shop and fast food" className="section-image" />
          <p>As part of the Bidvest Protea Coin Enterprise and Supplier Development initiatives, a tuck shop and take away business is situated on the premises. Learners can buy essentials, tasty nibbles, and take away food.</p>
        </div>

        {/* Laundry */}
        <div className="facility-block">
          <h3>Laundry</h3>
          <img src={laundryImg} alt="Laundry services" className="section-image" />
          <p>The laundry business provides an essential service at the Gijima Training Academy, ensuring all learners have access to clean clothing during their stay.</p>
        </div>
      </section>

      {/* Formal Training Rooms */}
      <section className="facility-section">
        <h2>Formal Training Rooms</h2>
        <div className="facility-block">
          <h3>Standard Training Rooms</h3>
          <img src={trainingRoomsImg} alt="Standard training rooms" className="section-image" />
          <p>Sixteen dedicated classrooms are available at the Academy, all with access to modern electronic training equipment and air conditioners.</p>
        </div>

        <div className="facility-block">
          <h3>Fire Room</h3>
          <img src={fireRoomImg} alt="Fire Room with braai facility" className="section-image" />
          <p>The Fire Room, situated on the upper deck of the Academy, has a fantastic view of the picturesque farming environment, with its own braai facility, kitchen, and ablutions.</p>
        </div>

        <div className="facility-block">
          <h3>Halls</h3>
          <img src={hallsImg} alt="Training halls" className="section-image" />
          <p>Gijima has two halls with air-conditioning and top-end electronic training infrastructure that can accommodate between 80 and 100 people.</p>
        </div>
      </section>

      {/* Practical Physical Training Infrastructure */}
      <section className="facility-section">
        <h2>Practical Physical Training Infrastructure</h2>
        <div className="facility-block">
          <h3>Shooting Range and Simulator</h3>
          <img src={shootingRangeImg} alt="Shooting range and simulator" className="section-image" />
          <p>The Gijima Training Academy is renowned for conducting high-quality and practical firearm training with a fully accredited indoor shooting range and a shooting simulator.</p>
        </div>

        <div className="facility-block">
          <h3>Tactical Training Facility and Obstacle Course</h3>
          <img src={tacticalTrainingImg} alt="Tactical training facility and obstacle course" className="section-image" />
          <p>The tactical training facility and obstacle course is where participants are trained on practical security skills with realistic simulation and drills.</p>
        </div>
      </section>

      {/* K53 Driver Testing and Off-road Track */}
      <section className="facility-section">
        <div className="facility-block">
          <h3>K53 Driver Testing and Off-road Track</h3>
          <img src={driverTestingImg} alt="K53 driver testing and off-road track" className="section-image" />
          <p>Gijima’s track allows for integrated tactical and vehicle maneuvers training, providing a holistic training experience for learners.</p>
        </div>

        {/* Control Room */}
        <div className="facility-block">
          <h3>Control Room</h3>
          <img src={controlRoomImg} alt="Control room" className="section-image" />
          <p>The Gijima Training Academy Control Room is equipped with the latest technology and is part of the Company’s disaster recovery strategy.</p>
        </div>

        {/* Computer Studio */}
        <div className="facility-block">
          <h3>Computer Studio</h3>
          <img src={computerStudioImg} alt="Computer studio" className="section-image" />
          <p>The computer studio seats 25 students and offers a range of computer training courses, programs, and assessments.</p>
        </div>
      </section>

      {/* Wellness, Health, and Entertainment */}
      <section className="facility-section">
        <h2>Wellness, Health, and Entertainment</h2>
        <div className="facility-block">
          <h3>Social Support</h3>
          <img src={socialSupportImg} alt="Social support services" className="section-image" />
          <p>A qualified social worker provides regular support to learners. In severe cases, external psycho-social support is available.</p>
        </div>

        <div className="facility-block">
          <h3>Onsite Clinic Visits</h3>
          <img src={clinicImg} alt="Onsite clinic visits" className="section-image" />
          <p>Weekly onsite clinic visits offer medical support services to learners.</p>
        </div>

        <div className="facility-block">
          <h3>Sport</h3>
          <img src={sportImg} alt="Sport facilities" className="section-image" />
          <p>Sport plays a significant role at the Academy, with learners having access to various sporting facilities, including soccer and cricket fields, a gym, and netball courts.</p>
        </div>
      </section>
    </div>
  );
}

export default TrainingFacilities;
