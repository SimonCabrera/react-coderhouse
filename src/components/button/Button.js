import React from "react";

import "./button.css";

/* Hook de useState */

export default function Button(p) {
  function handleClick(){
    p.onClick();
  }
   
  return (
    <button
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
