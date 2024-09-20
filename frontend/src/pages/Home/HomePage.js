import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Skills from "../../components/Skills/Skills";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import Experience from "../../components/Experience/Experience";
import Projects from "../../components/Projects/Projects";
import Aboutme from "../../components/Aboutme/Aboutme";
import { CSSTransition } from "react-transition-group";

const HomePage = () => {
    const [show, setShow] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newOpacity = Math.max(1 - scrollPosition / 450, 0); // Calcula nueva opacidad basada en la posición de scroll
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll); // Agrega el evento de scroll

        return () => {
            window.removeEventListener("scroll", handleScroll); // Elimina el evento de scroll al desmontar
        };
    }, []);

    return (
        <>
            <div className="screen">
                <Header />
                <section id="profile">
                    <CSSTransition
                        in={show} // Controla si el componente se muestra o no
                        timeout={500} // Duración de la animación de entrada
                        classNames="slide" // Clases CSS de la animación
                        appear // Activa la animación al montar
                        unmountOnExit
                    >
                        <div className="animated-box">
                            <Profile />
                        </div>

                    </CSSTransition>
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="aboutme">
                    <Aboutme />
                </section>
            </div>
        </>
    )
};

export default HomePage;