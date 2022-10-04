import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../productList/ProductList"

function ItemDetailContainer(){
  let [data, setData] = useState({});
  const {id} = useParams();

  useEffect(() =>{
    getSingleItem(id).then((importData) => setData(importData));
  },[]);

  return (
    <div>
      <img src={data.img}></img>
      <h1>{data.title}</h1>
      <h1>$ {data.price}</h1>
      <h2>{data.detail}</h2>
    </div>

  )}

  export default ItemDetailContainer;