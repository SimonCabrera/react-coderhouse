import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../button/Button";
import Counter from "../clickCounter/Counter";
import { GetProductById } from "../productList/ProductList";
import { Link } from "react-router-dom";
import { cartCtx } from "../../context/cartContext";



function ItemDetailContainer() {
  let [data, setData] = useState({});

  const { id } = useParams();

  let [estadoCart, setEstadoCart] = useState(false);

  useEffect(() => {
    GetProductById(id).then((importData) => setData(importData));
  }, [id]);

  const { addItem } = useContext(cartCtx);

  function handleAddToCart(quantity) {

    addItem(data, quantity)

    setEstadoCart(true)
  }

  return (
    <div>
      <img src={data.img}></img>
      <h1>{data.title}</h1>
      <h1>$ {data.price}</h1>
      <h2>{data.detail}</h2>

      {/* RENDERING CONDICIONAL  */}
      {estadoCart === false ? <Counter stock={data.stock} onAddToCart={handleAddToCart} /> : <Link to='/cart'><Button text='finalizar compra' /></Link>}
    </div>
  );
}

export default ItemDetailContainer;
