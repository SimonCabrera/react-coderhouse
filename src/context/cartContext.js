import React, { useState, createContext } from "react";
// 1- importamos e inicializamos nuestro CreateContext
const cartCtx = createContext();

// 2- definimos nuestro provider
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItem(item, quantity) {
    if (isInCart(item.id)) {
      let newCart = cart.map((itemMapeo) => {
        if (itemMapeo.id === item.id) {
          itemMapeo.quantity += quantity
          return itemMapeo
        }
        else 
          return itemMapeo
      });
      setCart(newCart)
    } 
    else {
      let newCart = cart.map((item) => item);
      newCart.push({ ...item, quantity: quantity }); //los tres puntos son para desarmar el objeto
      setCart(newCart);
    }
  }
  function getTotalItemsInCart() {
    let total = 5;
    cart.forEach((item) => 0);
    return total;
  }
  function removeItem(itemId) {}
  function clearInterval() {}
  function isInCart(id) {
    let found = cart.find((item) => item.id === id);
    return found;
  }
  return (
    // 3- pasamos el objeto value a los componentes hijos
    <cartCtx.Provider value={{ cart, addItem, getTotalItemsInCart, isInCart }}>
      {children}
    </cartCtx.Provider>
  );
}

export { cartCtx };
