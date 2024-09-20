import React from "react";
import './Experience.css';

const ExperienceItem = (props) => {
    return (
        <>
            <div className="experienceItem">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <div className="item-left">
                        <h2 className="titleExperienceItem">{props.title}</h2>
                        <h3 className="companyExperienceItem">{props.company}</h3>
                        <h4 className="dateExperienceItem">{props.date}</h4>
                    </div>
                    <div className="item-right">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ExperienceItem