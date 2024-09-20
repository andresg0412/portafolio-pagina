import React from "react";
import './Experience.css';
import ExperienceItem from "./ExperienceItem";
import { MdOutlineWorkOutline } from "react-icons/md";


const Experience = () => {
    return (
        <>
            <div className="containExperience">
                <h1><span style={{ marginRight: "6px" }}><MdOutlineWorkOutline size={28} /></span>Experiencia Laboral</h1>
                <div className="experiencesList">
                    <ExperienceItem
                        title="Ingeniero Programador de Aplicaciones"
                        company="DiX - Emtelco"
                        date="2022 - 2023"
                        description="
                            Creación de soluciones digitales utilizando React.js, Vue.js, y Tailwind para el fontend, y Django Rest Framework o NodeJS para el backend.
                            Diseño y desarrollo de APIs RESTful, asegurando una integración eficiente y escalable entre el frontend y el backend.
                        "
                    />
                    <ExperienceItem
                        title="DesarrolladorFull Stack"
                        company="Smartvelt"
                        date="2021"
                        description="
                            Creación de soluciones digitales utilizando React.js, Vue.js para el fontend, y NodeJS para el backend creando soluciones escalables y de alta calidad.
                            
                        "
                    />
                    <ExperienceItem
                        title="Desarrollador Web Frontend"
                        company="Social Boild"
                        date="2020 - 2021"
                        description="
                            Diseño y desarrollo de sitios web personalizados para clientes utilizando tecnologías como HTML, CSS, Boostrap, JavaScript, React.js, Tailwind, garantizando interfaces responsivas y una experiencia del usuario fluida."
                    />
                </div>
            </div>
        </>
    )
};

export default Experience