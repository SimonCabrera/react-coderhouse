import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../button/Button";
import Counter from "../clickCounter/Counter";
import { GetProductById } from "../productList/ProductList";

function ItemDetailContainer() {
  let [data, setData] = useState({});

  const { id } = useParams();

  let [estadoCart, setEstadoCart] = useState(false);

  useEffect(() => {
    GetProductById(id).then((importData) => setData(importData));
  }, [id]);

  function handleAddToCart(clickCount) {
    alert(`agregaste al carrito! ${clickCount}`);
    setEstadoCart(true)
  }

  return (
    <div>
      <img src={data.img}></img>
      <h1>{data.title}</h1>
      <h1>$ {data.price}</h1>
      <h2>{data.detail}</h2>
      {estadoCart === false ? 
        <Counter stock={data.stock} onAddToCart={handleAddToCart} /> : <button>finalizar compra</button>}
    </div>
  );
}

export default ItemDetailContainer;
