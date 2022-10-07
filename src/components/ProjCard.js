import "./ProjCard.css";
import React from 'react'
import { FaGooglePlay } from "react-icons/fa";

const ProjCard = (props) => {
    return (
        < div className="project-card" >
            <h2 className="project-title">{props.title}</h2>
            <img src={props.imgsrc} alt="" />

            <div className="project-details">
                <p></p>
                <div className="card-btns">
                    <a
                        href={props.viewlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn">
                        <FaGooglePlay className="gplay-icon"
                            size={30} style={{ color: "#faf7ff", marginRight: "3rem" }} />
                        GOOGLE PLAY
                    </a>
                </div>
            </div>
        </div >
    )
}

export default ProjCard