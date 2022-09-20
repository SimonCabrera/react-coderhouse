import React from 'react'
import './productCard.css'
import Button from '../button/Button'

export default function ProductCard(p) {
  
  return (
    <div className='card-container'>
      <h3 className='product-title'>{p.title}</h3>
      <img src={p.img} className='img-product'></img>
      <p>${p.price}</p>
      <Button text='Comprar'>
         ver mas 
         {/*
         todo lo que va dentro de la etiqueta del componente pasa como prop de tipo children 
         se llama: {props.children}
         o declarandolo entre parentesis {children}
         */ }
      </Button>
    </div>
  )
}
