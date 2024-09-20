import React from "react";
import './Skills.css';
import { MdOutlineLogoDev } from "react-icons/md";

const Skills = () => {
    const skills = [
        { name: "JavaScript", percentage: 90 },
        { name: "React", percentage: 90 },
        { name: "Next", percentage: 85 },
        { name: "Vue", percentage: 85 },
        { name: "HTML5", percentage: 90 },
        { name: "CSS3", percentage: 95 },
        { name: "Responsive Design", percentage: 90 },
        { name: "Tailwind", percentage: 80 },
        { name: "API RESTful, GraphQL", percentage: 80 },
        { name: "Jest, React Testing Library", percentage: 75 },
        { name: "CI/CD", percentage: 65 },
    ];
    const skills2 = [
        { name: "NodeJS", percentage: 90 },
        { name: "Express", percentage: 85 },
        { name: "NestJS", percentage: 75 },
        { name: "Python", percentage: 85 },
        { name: "Django Rest Framework", percentage: 75 },
        { name: "FastAPI", percentage: 90 },
        { name: "Docker", percentage: 90 },
        { name: "Git", percentage: 90 },
        { name: "SQL y NoSQL", percentage: 80 },
        { name: "AWS", percentage: 70 },
        { name: "GCP", percentage: 60 },
    ];
    return (
        <>
            <div className="skills">
                <h1><span style={{ marginRight: "6px", color: "#facc15" }}><MdOutlineLogoDev size={28} /></span>Habilidades</h1>
                <div className="skills-container">
                    <div className="container-list">
                        <ul className="skills-list">
                            {skills && skills.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <span className="skill-name">{skill.name}</span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
                                    </div>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="container-list">
                        <ul className="skills-list">
                            {skills2 && skills2.map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <span className="skill-name">{skill.name}</span>
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: `${skill.percentage}%` }}></div>
                                    </div>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;