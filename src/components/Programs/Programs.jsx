import React from 'react'
import './Programs.css'
import Program_2 from '../../assets/Program2.jfif'
import Program_3 from '../../assets/Program3.jfif'
import Program_4 from '../../assets/program44.jpg'
import prog_icon from '../../assets/icons8-process-100.png'
import prog_icon2 from '../../assets/icons8-target-100.png'
import prog_icon3 from '../../assets/servicedelivery.png'


const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={Program_2} alt="" />
        <div className="caption">
        <img src={prog_icon3} alt="" />
        <p>company objectives and client needs</p>
        </div>
      </div>

      <div className="program">
        <img src={Program_3} alt="" />
        <div className="caption">
        <img src={prog_icon} alt="" />
        <p>creates synergy between individual performance</p>
        </div>
      </div>

      <div className="program">
        <img src={Program_4} alt="" />
        <div className="caption">
        <img src={prog_icon2} alt="" />
        <p>behaviour</p>
        </div>
      </div>

    </div>
    
  )
}

export default Programs
