import React from 'react'
import './Hero.css'
import right_arrow from '../../assets/right arrow.png'

const Hero = () => {
  return (
    <div className='hero  container'>
        <div className="hero-text">
            <h1>The Gijima Training Academy is the skills development institution of Bidvest Protea Coin</h1>
            <p>Bidvest Protea Coin is a leading provider of integrated intelligence driven risk management services. 
            Skills Development is a strategic imperative at Bidvest Protea Coin. 
            </p>
            <button 
  className="btn" 
  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
>
  Explore More <img src={right_arrow} alt="" />
</button>
        </div>
    </div>
  )
}

export default Hero
