import React from "react";
import "./Aboutme.css";
import { ImProfile } from "react-icons/im";
import ImgAboutme from "../../assets/img/programming-portafolio.jpeg"


const Aboutme = () => {
    return (
        <>
            <div className="containAboutme">
                <h1><span style={{ marginRight: "6px", color: "#facc15" }}><ImProfile size={22} /></span>Sobre mí</h1>
                <div className="aboutme">
                    <div className="aboutmeContent">
                        <p>Soy un desarrollador full stack apasionado por la tecnología y por <span className="text-span">crear soluciones que realmente marquen la diferencia.</span> Disfruto colaborando en equipos diversos, escuchando activamente y construyendo experiencias de usuario memorables.</p>
                        <p>Valoro el aprendizaje continuo y me adapto rápidamente a nuevos desafíos, siempre buscando crecer tanto profesional como personalmente. Me motiva entender y resolver problemas con una actitud positiva y proactiva, y estoy <span className="text-span">emocionado por las oportunidades futuras para seguir aprendiendo</span> y contribuyendo.</p>
                    </div>
                    <div className="aboutmeImg">
                        <img src={ImgAboutme} width={"100%"} alt="profile" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Aboutme