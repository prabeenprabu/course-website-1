import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav className={` container ${sticky ? " dark-nav" : ""}`}>
            <img src={logo} alt="logo" className="logo" />
            <ul>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={700}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="program"
                        smooth={true}
                        offset={-250}
                        duration={700}>
                        Program
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={-100} duration={700}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        to="campus"
                        smooth={true}
                        offset={-210}
                        duration={700}>
                        Campus
                    </Link>
                </li>
                <li>
                    <Link
                        to="testimonials"
                        smooth={true}
                        offset={-250}
                        duration={700}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-250}
                        duration={700}>
                        <button className="btn">Contact Us</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
