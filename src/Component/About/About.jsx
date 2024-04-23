import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="about_img" className="about_img" />
                <img src={play_icon} alt="play_icon" className="play_icon" />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Lorem ipsum dolor sit.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, nesciunt sunt et illum velit libero dicta
                    consequuntur fugiat tempora totam. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Quidem, consequuntur?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, nesciunt sunt et illum velit libero dicta
                    consequuntur fugiat tempora totam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, nesciunt sunt et illum velit libero dicta
                    consequuntur fugiat tempora totam.
                </p>
            </div>
        </div>
    );
};

export default About;
