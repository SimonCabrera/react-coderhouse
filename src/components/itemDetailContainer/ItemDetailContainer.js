import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Counter from "../clickCounter/Counter";
import { GetProductById } from "../productList/ProductList"

function ItemDetailContainer(){
  let [data, setData] = useState({});
  
  const {id} = useParams();

  useEffect(() =>{
    GetProductById(id).then((importData) => setData(importData));
  },[id]);
function handleAddToCart(clickCount){
    alert(`agregaste al carrito! ${clickCount}`);
    
  }
  
  return (
    <div>
      <img src={data.img}></img>
      <h1>{data.title}</h1>
      <h1>$ {data.price}</h1>
      <h2>{data.detail}</h2>
      <Counter product={data.stock} onAddToCart={handleAddToCart} />
    </div>

  )}

  export default ItemDetailContainer;