import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../button/Button";
import Counter from "../clickCounter/Counter";
import { GetProductById } from "../productList/firestore/firestore";
import { Link } from "react-router-dom";
import { cartCtx } from "../../context/cartContext";
import { DotSpinner } from '@uiball/loaders'
import './itemDetailContainer.css'


function ItemDetailContainer() {
  let [data, setData] = useState({});

  const [error, setError] = useState(false);
  const [isLoading, SetIsLoading] = useState(true);

  const { id } = useParams();


  
  let [estadoCart, setEstadoCart] = useState(false);

  useEffect(() => {
    GetProductById(id)
    .then((importData) => setData(importData))
    .catch ((errormsg) => {setError(errormsg.message)})
    .finally(() => SetIsLoading(false))
  }, [id]);

  const { addItem } = useContext(cartCtx);

  function handleAddToCart(quantity) {

    addItem(data, quantity)

    setEstadoCart(true)
  }
  if (isLoading) {
    return <> 
    { error? (
    <div>
      <h3 style = {{ color: "#aa0033"}}>Error, obteniendo los datos</h3>
      <p>{error}</p>
    </div>) :( <div className="loader"><DotSpinner size={40} speed={0.9} color="black" /></div>)

    }
    </>;
  }

  return (
    <div>
      <img src={data.img}></img>
      <h1>{data.title}</h1>
      <h1>$ {data.price}</h1>
      <h2>{data.detail}</h2>

      {/* RENDERING CONDICIONAL  */}
      {estadoCart === false ? <Counter stock={data.stock} onAddToCart={handleAddToCart} /> : <Link to='/cart'><Button text='finalizar compra'/></Link>}
    </div>
  );
}

export default ItemDetailContainer;
