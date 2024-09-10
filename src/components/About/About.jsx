import React from 'react'
import './About.css'
import about_img from '../../assets/gijimap.png'
import shield_icon from '../../assets/shield icon.png'
import Title from '../Title/Title'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={shield_icon} alt="" className='shield-icon'/>

        </div>
      <div className="about-right">
      <Title title ='At Gijima Training Academy'/>
        <p>Skills development is a strategic imperative at Bidvest Protea Coin. It enables, amongst other things, superior service delivery to clients, creates synergy between individual performance, behaviour, company objectives and client needs. 
It similarly enhances employee performance and satisfaction which results in employee retention and other positive results. 
Skills development is a core component in Bidvest Protea Coin's practical approach towards making a positive, sustainable impact on the communities and the environment in which we operate. Our unemployed learnership programmes has had a notable impact on reducing unemployment amongst the youth, especially in rural and disadvantaged communities
<br />
The Gijima Training Academy is the leading training facility of its kind within the private security sector in South Africa.  
The facility is testament to Bidvest Protea Coin’s commitment to skills development. 
The Gijima Training Academy is part of the broader multipurpose Gijima facility which reflects the rich history of Bidvest Protea Coin and provides services such as client entertainment, hospitality and accommodation, conferencing, team building, sport and other events.
</p>
      </div>

    </div>
  )
}

export default About
