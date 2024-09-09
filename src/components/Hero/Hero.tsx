import React from "react";
import './Hero.css'
import Header from "../Header/Header";

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                {/* the-best */}
                <div className="the-best">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* Hero heading */}
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
                            In here we will help you to shape and build your ideal body and live up your live to fullest
                        </span>
                    </div>
                </div>
            </div>
            <div className="right-h">right side</div>
        </div>
    )
}

export default Hero