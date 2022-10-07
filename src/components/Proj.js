import "./ProjCard.css";
import ProjCard from "./ProjCard";
import ProjCardData from "./ProjCardData";
import React from 'react'

const Proj = () => {
    return (
        <div className="container">
            <h1 className="card-heading">Games On GooglePlay</h1>
            <div className="card-container">
                {ProjCardData.map((value, index) => {
                    return (
                        <ProjCard
                            key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            viewlink={value.viewlink}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Proj