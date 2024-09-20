import React from "react";
import './ButtonComponent.css'
const ButtonComponent = (props) => {
    return (
        <>
            <a href={props.url} target={props.target} rel={props.rel} type={props.type} className={props.className}>
                <span>{props.icon}</span>{props.title}
                </a>
        </>
    )
};              

export default ButtonComponent