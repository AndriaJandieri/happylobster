import "./HeroImg.css";
import React from 'react'
import { Link } from "react-scroll";

const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
            </div>
            <div className="content">
                <h1>Welcome</h1>
                <p>We are three developers and making games, because we are happy lobsters.</p>
                <div>
                    <Link to="contact" spy={true} smooth={true} offset={600} duration={500} className="btn"> Get In Touch</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg