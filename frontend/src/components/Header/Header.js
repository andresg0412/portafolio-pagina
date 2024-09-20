import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);
        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            })
        }
    }, [])


    return (
        <>
            <div className="nav">
                <ul>
                    <li className={activeSection === "profile" ? "active" : ""}>
                        <a href="#profile">Perfil</a>
                    </li>
                    <li className={activeSection === "experience" ? "active" : ""}>
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li className={activeSection === "projects" ? "active" : ""}>
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li className={activeSection === "aboutme" ? "active" : ""}>
                        <a href="#aboutme">Sobre mi</a>
                    </li>
                </ul>
            </div>
        </>
    )
};

export default Header