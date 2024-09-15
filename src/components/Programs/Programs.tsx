import React from 'react'
import {programsData} from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'
import './Programs.css'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      {/* Header */}
      <div className='programs-header'>
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join now</span>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs