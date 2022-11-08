import React, { useContext } from 'react';
import { cartCtx } from '../../context/cartContext';
import './cart.css'

function Cart() {
  const context = useContext(cartCtx)
  const {cart} = context;
  
  let carritoVacio = false;


  if (carritoVacio) { 
    return <h3>Aun no hay elementos en el carrito</h3>
  } 
  else{
  return(
    <div>
      {cart.map((item) => (
        <div key='{i}'>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <img src={item.img}></img>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  )
  
}
}
export default Cart