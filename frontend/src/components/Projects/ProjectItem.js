import React, { useState, useEffect } from "react";
import './Projects.css';
import ButtonComponent from "../Common/button/ButtonComponent";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiDjango } from "react-icons/si";



const ProjectItem = (props) => {
    const [react, setReact] = useState(false);
    const [vue, setVue] = useState(false);
    const [node, setNode] = useState(false);
    const [fastapi, setFastapi] = useState(false);
    const [django, setDjango] = useState(false);

    

    useEffect(() => {
        const tecnologias = props.technology.split(", ");

        if (tecnologias.includes("React")) {
            setReact(true);
        }
        if (tecnologias.includes("Vue")) {
            setVue(true);
        }
        if (tecnologias.includes("Node")) {
            setNode(true);
        }
        if (tecnologias.includes("FastAPI")) {
            setFastapi(true);
        }
        if (tecnologias.includes("Django")) {
            setDjango(true);
        }
    }, [props.technology]);


    return (
        <>
            <div className="projectItem">
                <div className="projectImg">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className="projectInfo">
                    <h2>{props.title}</h2>
                    <div className="projectTechnologies">
                        {react && <p className="tecnologias react"><span><FaReact /></span>React</p>}

                        <div>{vue && <p className="tecnologias vue"><span><FaVuejs /></span>Vue</p>}</div>
                        <div>{node && <p className="tecnologias node"><span><FaNodeJs /></span>Node</p>}</div>
                        <div>{fastapi && <p className="tecnologias fastapi"><span><SiFastapi /></span>FastAPI</p>}</div>
                        <div>{django && <p className="tecnologias django"><span><SiDjango /></span>Django</p>}</div>
                    </div>
                    <p>{props.description}</p>
                    <ButtonComponent
                        title="Ver proyecto"
                        url={props.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary small"
                        type="button"
                        icon={<FaGithub size={18} />}
                    />
                </div>
            </div>
        </>
    )
};

export default ProjectItem