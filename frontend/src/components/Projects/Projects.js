import React from "react";
import './Projects.css';
import Projectitem from "./ProjectItem";
import { IoIosApps } from "react-icons/io";
import ImgInventarioProject from "../../assets/img/gestion_inventario.png";
import ImgPortalEmpleoProject from "../../assets/img/portal_empleo.png";


const Projects = () => {
    return (
        <>
            <div className="containProjects">
                <h1><span style={{ marginRight: "6px" }}><IoIosApps size={28} /></span>Proyectos</h1>
                <div className="projectsList">
                    <Projectitem
                        title="Portal de Empleo"
                        description="Aplicación web para la gestión de empleos, publicación, administración, postulación de aspirantes. Permisos por roles, autenticación, diseño responsivo."
                        technology="React, Node, Django"
                        skills="Redux, Node, Express"
                        img={ImgPortalEmpleoProject}
                        link="https://github.com/andresg0412/React-frontend-portal-empleos"
                    />
                    <Projectitem
                        title="Gestión de Inventario"
                        description="Aplicación web para la gestión de inventario, cuenta con autenticación, administración, roles por usuario, CRUD. Permisos por roles, autenticación, diseño responsivo."
                        img={ImgInventarioProject}
                        technology="React, Node"
                        skills="React, Redux, Node, Express, MongoDB"
                        link="https://github.com/andresg0412/React-frontend-gestion-inventario"
                    />
                </div>
            </div>
        </>
    )
};

export default Projects