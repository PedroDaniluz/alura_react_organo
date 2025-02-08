import { useState } from "react";
import "./TextField.css";

export default function TextField(props) {

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    );
}