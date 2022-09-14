import React from 'react'
import './productCard.css'

export default function ProductCard(p) {
  return (
    <div className='card-container'>
      <h3 className='product-title'>{p.title}</h3>
      <img src={p.img} className='img-product'></img>
      <p>${p.price}</p>
      <button className='product-button'>COMPRAR</button>
    </div>
  )
}
