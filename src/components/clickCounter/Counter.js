import React from "react";
import "./counter.css";
import { useState } from "react";
import Button from "../button/Button";

export default function Counter( {stock, onAddToCart}) {
  const [clickCount, setClickCount] = useState(1);

  function handleClickPlus() {
    if (clickCount >= stock) {
      alert("solo hay " + stock + " en stock");
      return;
    }
    setClickCount(clickCount + 1);
  }

  function handleClickLess() {
    if (clickCount <= 1) {
      alert("debe seleccionar minimo un producto");
      return;
    }
    setClickCount(clickCount - 1);
  }

  return (
    <div className="main-container">
      <div className="first-container">
        <Button onClick={handleClickPlus} className="plus-bottom" text="+" color='white' />
        <div className="count-container">{clickCount}</div>
        <Button onClick={handleClickLess} className="less-bottom" text="-" color='white'/>
      </div>
      <Button onClick={() => onAddToCart(clickCount)} text="agregar al carrito" color='white'/>
    </div>
  );
}
