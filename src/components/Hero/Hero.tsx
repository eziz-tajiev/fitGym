import React from "react";
import Header from '../Header/Header'
import './Hero.css'
import HeroImage from '../../assets/fitnessHero.png'
const Hero = () => {
  return(
    <div className="hero">
      <div className="hero-content">
        <Header />
        {/* The best */}
        <div className="the-best">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
            <div>
              <span className="stroke-text">Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
            <div>
              <span>
                In here we will help you to shape and build
                your ideal body and live up your life to fullest
              </span>
            </div>
        </div>
       {/* Figueres */}
       <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
       </div>

       {/* Hero Buttons */}
       <div className="hero-buttons">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
       </div>
      </div>
      <div className="right-section">
        <div className="circle">
        <img className="hero-image" src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero

