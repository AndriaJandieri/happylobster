import "./Footer.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
    const handleClickFB = () => {
        window.open("https://www.facebook.com/happylobstergames/");
    };
    const handleClickGP = () => {
        window.open("https://play.google.com/store/apps/dev?id=6135426106596760197&hl=en");
    };
    const handleClickLNK = () => {
        window.open("https://www.linkedin.com/company/happy-lobster-games/");
    };
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-contact-info">
                    <div>
                        <p className="footer-header">Contact Info:</p>
                    </div>
                    <div className="location">
                        <FaHome size={20} style={{ color: "#c10023", marginRight: "2rem" }} />
                        <div>
                            <p>
                                Tbilisi, &nbsp; Georgia.
                            </p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "#c10023", marginRight: "2rem" }} />
                        <div>
                            <p>
                                +995 555 213 142
                            </p>
                        </div>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: "#c10023", marginRight: "2rem" }} />
                        <div>
                            <p>
                                happylobstergames@gmail.com
                            </p>
                        </div>

                    </div>
                </div>
                <div className="footer-about">
                    <div>
                        <p className="footer-header">About Studio:</p>
                    </div>
                    <h4>About the studio</h4>
                    <p>At the moment we are mostly focused on hyper-casual game development. </p>
                    <div className="social">
                        <FaFacebook className="soc" onClick={handleClickFB} size={30} style={{ color: "#c10023", marginRight: "3rem" }} />
                        <FaLinkedin className="soc" onClick={handleClickLNK} size={30} style={{ color: "#c10023", marginRight: "3rem" }} />
                        <FaGooglePlay className="soc" onClick={handleClickGP} size={30} style={{ color: "#c10023", marginRight: "3rem" }} />
                    </div>
                </div>
                <div className="footer-map">
                    <div class="mapouter">
                        <div className="gmap_canvas">
                            <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tbilisi&amp;t=&amp;z=2&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="TbilisOnMap">
                            </iframe>
                            <a href="https://mcpenation.com/">MCPE Nation</a>
                        </div></div>
                </div>
            </div>
        </div>

    )
}

export default Footer