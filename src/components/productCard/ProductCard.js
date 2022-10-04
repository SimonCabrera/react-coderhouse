import React from 'react'
import './productCard.css'
import Button from '../button/Button'
import Counter from '../clickCounter/Counter'
import {Link} from "react-router-dom"


export default function ProductCard(p) {
const urlDetalle = `/detail/${p.id}${p.title}`  
  return (
    <div className='card-container'>
      <h3 className='product-title'>{p.title}</h3>
      <img src={p.img} className='img-product'></img>
      <p>${p.price}</p>
      <Link to={urlDetalle}><p>ver mas</p></Link>
      <Button text='Agregar al carrito'>
          
         {/*
         todo lo que va dentro de la etiqueta del componente pasa como prop de tipo children 
         se llama: {props.children}
         o declarandolo entre parentesis {children}
         */ }
      </Button>
      <Counter stock={p.stock} />
    </div>
  )
}
