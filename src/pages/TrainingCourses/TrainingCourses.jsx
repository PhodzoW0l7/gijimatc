import React from 'react';
import './TrainingCourses.css'; // Assuming you're adding styles in a separate CSS file
import Title from '../../components/Title/Title';
import image1 from '../../assets/courses2.jpg'; // Replace with actual image path
import image2 from '../../assets/about.jpg'; // Replace with actual image path
import logo1 from '../../assets/qcto.png'; // Replace with actual logo paths
import logo2 from '../../assets/sasseta.png'; // Replace with actual logo paths
import logo3 from '../../assets/naryseclogo.png'; // Replace with actual logo paths
import logo4 from '../../assets/nkangalalogo.png'; // Replace with actual logo paths
import logo5 from '../../assets/uiflogo.png'; // Replace with actual logo paths
import logo6 from '../../assets/CAA.png'; // Replace with actual logo paths
import logo7 from '../../assets/psira.png'; // Replace with actual logo paths
import logo8 from '../../assets/saps.png'; // Replace with actual logo paths

const TrainingCourses = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="training-hero">
        <div className="hero-content">
          <h1>Explore Our Training Courses</h1>
          <p>Learn new skills and advance your career with our comprehensive courses.</p>
        </div>
      </section>

      {/* Title Section */}
      <section>
        <Title title='Our Courses'/>
      </section>

      {/* Images Section */}
      <section className="image-gallery">
        <div className="image-wrapper">
          <img src={image1} alt="Course Image 1" className="course-image" />
          <img src={image2} alt="Course Image 2" className="course-image" />
        </div>
      </section>

      {/* Second Section */}
      <section className="training-details">
        <p>
          Staying up to date and ahead of the curve in skills development is a critical success factor. This statement is particularly true within the rapidly evolving Private Security Sector. Bidvest Protea Coin through the Gijima Training Academy was one of the first organizations to obtain accreditation from the QCTO as a Skills Development Provider (SDP) to conduct new Occupational Certificates and as an Assessment Centre (AC) / Trade Test Centre (TTC). While accreditation is critical, the approach of the Gijima Training Academy is focusing on holistic outcomes that can be applied and will make a real difference in the workplace. As such our focus is on real, practical, quality training and not on tick box outcomes. Accredited training is augmented by practical, workplace-focused, real interventions. In addition to the QCTO accreditation, Bidvest Protea Coin / Gijima Training Academy has the following accreditations.
        </p>
      </section>

      {/* SVG Section */}
      <section className="svg-section">
        <h2>Gijima Training Academy Accreditations: </h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <g className="logos">
            <image href={logo1} x="280" y="0" width="150" height="150" />
            <image href={logo2} x="460" y="0" width="150" height="150" />
            <image href={logo6} x="600" y="0" width="100" height="100" />
            <image href={logo7} x="780" y="0" width="150" height="150" />
            <image href={logo8} x="960" y="0" width="150" height="150" />
          </g>
        </svg>
      </section>
    </div>
  );
}

export default TrainingCourses;
