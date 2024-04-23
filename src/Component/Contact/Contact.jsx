import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
    return (
        <div className="contact container">
            <div className="contact-col">
                <h3>
                    send a message <img src={msg_icon} alt="msg_icon" />
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptate excepturi magnam, suscipit adipisci voluptates eum
                    sequi vitae atque ipsa deleniti.
                </p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="mail" />
                        contact@gmailc.om
                    </li>
                    <li>
                        <img src={phone_icon} alt="mail" />
                        +213387629
                    </li>
                    <li>
                        <img src={location_icon} alt="mail" />
                        Lorem ipsum dolor sit amet consectetur.
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form action="">
                    <label>Your name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                    <label>Your Phone Number</label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Your Phone Number"
                        required
                    />
                    <label>write you message</label>
                    <textarea
                        placeholder="enter your message"
                        name="message"
                        cols="30"
                        rows="10"></textarea>

                    <button type="submit" className="btn dark-btn">
                        Send{" "}
                        <img
                            src={white_arrow}
                            className="white-arrow"
                            alt="white arrow"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
