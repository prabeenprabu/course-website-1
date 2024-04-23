import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis dicta ipsam molestias ratione iusto nobis unde
                    asperiores porro.
                </p>
                <button className="btn">
                    Explore more <img src={dark_arrow} alt="dark" />
                </button>
            </div>
        </div>
    );
};

export default Hero;
