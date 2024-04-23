import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const forward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const backward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className="testimonials container">
            <img
                src={next_icon}
                alt="next_icon"
                className="next-btn"
                onClick={forward}
            />
            <img
                src={back_icon}
                alt="back_icon"
                className="back-btn"
                onClick={backward}
            />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="user_1" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Perspiciatis assumenda eius,
                                sequi, repellendus hic incidunt quo quaerat,
                                iusto ex voluptas temporibus voluptate est!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="user_1" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Perspiciatis assumenda eius,
                                sequi, repellendus hic incidunt quo quaerat,
                                iusto ex voluptas temporibus voluptate est!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="user_1" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Perspiciatis assumenda eius,
                                sequi, repellendus hic incidunt quo quaerat,
                                iusto ex voluptas temporibus voluptate est!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="user_1" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Perspiciatis assumenda eius,
                                sequi, repellendus hic incidunt quo quaerat,
                                iusto ex voluptas temporibus voluptate est!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
