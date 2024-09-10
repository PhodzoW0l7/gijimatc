import React from 'react';
import './CoursesConducted.css'; // Assuming you're adding styles in a separate CSS file
import Title from '../../components/Title/Title';
import blockImage1 from '../../assets/wall of programs.jpeg'; // Replace with actual image paths
import blockImage2 from '../../assets/medalparade.jfif';
import blockImage3 from '../../assets/securitygrad.jpeg';
import blockImage4 from '../../assets/individual Awards.jpeg';
import blockImage5 from '../../assets/block3.jfif';
import blockImage6 from '../../assets/block2.jfif';
import blockImage7 from '../../assets/block1.jfif';
import blockImage8 from '../../assets/NAT01017.jpg';
import blockImage9 from '../../assets/NAT00419.jpg';
import blockImage10 from '../../assets/NAT00303.jpg';
import video1 from '../../assets/gijima1.mp4'
import video2 from '../../assets/gijima2.mp4'
import video3 from '../../assets/gijima3.mp4'

const CoursesConducted = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="hero-content">
          <h1>Courses We Have Conducted</h1>
          <p>Discover the impact our training programs have had on past participants.</p>
        </div>
      </section>

      {/* First Section */}
      <section className="courses-details">
        <Title title='Courses Overview'/>
        <p className="detail-text">
          Gijima Training Academy and broader Gijima facility is host to a range of physical displays that depict the rich history, culture, symbols and heritage of Bidvest Protea Coin.
        </p>

        {/* 4 Blocks after the first paragraph */}
        <div className="blocks-grid">
          <div className="block">
            <img src={blockImage1} alt="Block 1" />
            <p>Learners Pathway</p>
          </div>
          <div className="block">
            <img src={blockImage2} alt="Block 2" />
            <p>Medal Parade</p>
          </div>
          <div className="block">
            <img src={blockImage3} alt="Block 3" />
            <p>Individual Awards</p>
          </div>
          <div className="block">
            <img src={blockImage4} alt="Block 4" />
            <p>Graduation Ceremony </p>
          </div>
        </div>

        <p className="detail-text">
          The Company is steeped in traditions such as honouring those that go beyond the call of duty in combatting crime. This is embodied in the Annual Medal Parade which takes place at the Academy annually.
        </p>
        <p className="detail-text">
          Gijima Training Academy has its own traditions such as celebrating significant group and individual achievements. This is done by way of pass out parades and graduation ceremonies in the case of management development programmes.
        </p>
        <p className="detail-text">
          A core activity and highlight of pass out parades is the placing of the learnership group plaque on the Learner Pathway. The placing of the plaque on the Learner Pathway symbolizes the completion of theoretical training and handing over of the students to operations. Plaques are only placed on the wall on completion of the theoretical training in respect of significant learnership programmes.
        </p>

        {/* 3 Blocks after the fourth paragraph */}
        <div className="blocks-grid">
          <div className="block">
            <img src={blockImage5} alt="Block 5" />
          </div>
          <div className="block">
            <img src={blockImage6} alt="Block 6" />
          </div>
          <div className="block">
            <img src={blockImage7} alt="Block 7" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="impact-section">
        <p className="impact-text">
          Over a long period in time, the Academy has made a significant impact on reducing youth unemployment in disadvantaged communities from all over the country.
        </p>
        <p className="impact-text">
          Similarly, it has positively impacted on the skills, knowledge, ability, and behavior of thousands of employees of Bidvest Protea Coin. In association with Wits Business School, Gijima Training Academy has for many consecutive years hosted the Bidvest Protea Coin Management Development (MDP) and Management Advancement Programmes (MAP).
        </p>
        <p className="impact-text">
          To annually host the future leaders of the organization is a source of significant pride for the Academy. This year’s intake consisted of 15 participants in the MDP and 15 participants in the MAP programme.
        </p>
        <p className="impact-text">
          While the focus of the Gijima Training Academy is to ensure that Bidvest Protea Coin achieves its strategic objectives and to ensure that we provide that critical differentiating factor, numerous clients have made use of Gijima Training Academy to train or host their employees.
        </p>

        {/* 3 Blocks after the eighth paragraph */}
        <div className="blocks-grid">
          <div className="block">
            <img src={blockImage8} alt="Block 8" />
          </div>
          <div className="block">
            <img src={blockImage9} alt="Block 9" />
          </div>
          <div className="block">
            <img src={blockImage10} alt="Block 10" />
          </div>
        </div>
      </section>
      <section>
       {/*Video section*/}
       <div className="video-player">
        <video src={video1} muted controls></video>
        <video src={video2} muted controls></video>
        <video src={video3} muted controls></video>
        </div>
        </section>
    </div>
  );
}

export default CoursesConducted;
