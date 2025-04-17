import Header from "../Header/Header";
import "./Hero.css";
import HeroImage from "../../assets/fitnessHero.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const figuresData = [
  { start: 100, end: 140, label: "expert coaches" },
  { start: 800, end: 978, label: "members joined" },
  { start: 0, end: 50, label: "fitness programs" },
];
const Hero = () => {
  return (
    <div className="hero" id="Home">
      <div className="hero-content">
        <Header />
        {/* The best */}
        <div className="the-best">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{
              type: "spring",
              duration: 4,
            }}
          />
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
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* Figueres */}
        <div className="figures">
          {figuresData.map(({ start, end, label }, index) => (
            <div key={index}>
              <span>
                <CountUp start={start} end={end} prefix="+" duration={3} />
              </span>
              <span>{label}</span>
            </div>
          ))}
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
  );
};

export default Hero;
