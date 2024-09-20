import React from "react";
import './ButtonComponent.css'
const ButtonDownload = (props) => {
    return (
        <>
            <a href={props.url} className={props.className} download={props.download}>
                <span>{props.icon}</span>{props.title}
                </a>
        </>
    )
};              

export default ButtonDownload