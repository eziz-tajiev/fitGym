import React from "react";
import Header from '../Header/Header'
import './Hero.css'
const Hero = () => {
  return(
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* The best */}
        <div className="the-best">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span>Shape </span>
            <span>Your</span>
            <div>
              <span></span>
            </div>
          </div>
        </div>
        
      </div>
      <div className="right-h">right side</div>
    </div>
  )
}

export default Hero

