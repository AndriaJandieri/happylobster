import "./Navbar.css";
import LobsterLogo from "../assets/LobsterIconWhite.png"
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    const closeMenu = () => setClick(false);


    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
                <img className="logo" src={LobsterLogo} alt=""></img>

            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li >
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>Home</Link>
                </li>

                <li>
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Projects</Link>
                </li>

                <li>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size={40} style={{ color: "#fff5f2" }} /> : <FaBars size={40} style={{ color: "#fff5f2" }} />}
            </div>
        </div>

    )
}

export default Navbar