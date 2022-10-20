import React, { useContext } from 'react';
import { cartCtx } from '../../context/cartContext';
import './cart.css'

function Cart() {

  const { getTotalItemsInCart } = useContext(cartCtx);

  return(
    <div>
    <h1>welcome to cart</h1>
    <h2>cantidad de productos:{getTotalItemsInCart()} </h2>
    </div>
  )
  
}

export default Cart