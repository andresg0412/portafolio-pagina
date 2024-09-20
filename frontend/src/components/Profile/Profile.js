import React from "react";
import ButtonComponent from "../Common/button/ButtonComponent";
import ButtonDownload from "../Common/button/ButtonDownload";
import fotoperfilweb from "../../assets/img/fotoperfilweb.png";
import cvpdf from "../../assets/img/Hv-German-Andres-Gamboa-dev.pdf";
import "./Profile.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ReactTyped as Typed } from 'react-typed';


const Profile = () => {
    return (
        <>
            <div className="containProfile">
                <div className="profileImage">
                    <img src={fotoperfilweb} width={"100px"} alt="Andres Gamboa" />
                    <div className="disponible"><a href="https://www.linkedin.com/in/german-andres-gamboa-portilla-a293b91a2" target="_blank" rel="noreferrer">Disponible para trabajar</a></div>
                </div>

                <div className="title-description"><h1>Hola! Soy <Typed
                    strings={['Andres Gamboa', 'Desarrollador Full Stack']}
                    typeSpeed={30} // Velocidad del tipeo
                    backSpeed={30} // Velocidad de borrado
                    loop // Hace que la animación sea infinita
                />

                </h1></div>

                <div>
                    <p className="text-description">
                        Desarrollador Full Stack con +3 años de experiencia. Experiencia con <span className="text-span"> React | Vue | NodeJS | Express | SQL | Python | APIREST. </span>
                        Apasionado por transformar ideas en soluciones digitales eficientes.
                    </p>
                </div>

                <div className="profileButtons">
                    <ButtonComponent
                        title="Contactame"
                        url="https://wa.me/573185215524"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        type="button"
                        icon={<MdEmail size={15} />}
                    />
                    <ButtonComponent
                        title="Linkedin"
                        url="https://www.linkedin.com/in/german-andres-gamboa-portilla-a293b91a2"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                        type="button"
                        icon={<FaLinkedin size={15} />}
                    />
                    <ButtonDownload 
                        title="Descargar CV"
                        url={cvpdf}
                        download="Hv-German-Andres-Gamboa-dev.pdf"
                        className="btn btn-primary"
                        icon={<FaLinkedin size={15} />}
                    />
                </div>
            </div>
        </>
    )
};

export default Profile