import React from "react";
import { useState } from "react";
import "./button.css";

/* Hook de useState */

export default function Button(p) {
  const [color, setColor] = useState("grey");

  /* setColor= seter. para modificar la variable anterior (color) se debe hacer mediante el seter SIEMPRE */
  /*let [colortoggle, setColortoggle] = useState(true)*/
  /* const color = "lightblue" */

  function handleClick() {
    
    p.onClick();
    /*alert('Clickeado!!')*/
    setColor(p.color)
    /* setColortoggle(!colortoggle) */
  }

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={handleClick}
      type="button"
      className="btn">
      {p.text}
    </button>
  );
}
{
  /* siempre que se tenga un evento de click la funcion se guarda sin ejecutar (sin :() )} */
}
