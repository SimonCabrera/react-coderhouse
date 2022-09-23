import React from 'react'
import './counter.css'
import {useState} from 'react'



export default function Counter(p) {

  const[clickCount, setClickCount] = useState(1)  
  
  function handleClickPlus(){
    if(clickCount>= p.stock){
      alert('solo hay ' + (p.stock) + ' en stock')
    return
  }
  setClickCount(clickCount+1)}
   
  function handleClickLess(){
    if(clickCount<=1){
      alert('debe seleccionar minimo un producto')
      return
   }setClickCount(clickCount-1)}
  


  return (
    <div className='first-container'>
    
    <button onClick={handleClickPlus} className='plus-bottom'>+</button>
    <div className='count-container'>{clickCount}</div>
    <button onClick={handleClickLess} className='less-bottom'>-</button>
    
    </div> 
  ) 
}
