import React from 'react'
import './counter.css'
import {useState} from 'react'



export default function Counter() {

  const[clickCount, setClickCount] = useState(1)  
  
  function handleClickPlus(){
  setClickCount(clickCount+1)
  
  }
   
  function handleClickLess(){
    setClickCount(clickCount-1)
   }
  if(clickCount>15){
    alert('solo hay 15 en stock')
    setClickCount(15)
  } else if(clickCount<1){
    alert('debe seleccionar minimo un producto')
    setClickCount(1)
  }


  return (
    <div className='first-container'>
    
    <button onClick={handleClickPlus} className='plus-bottom'>mas</button>
    <div className='count-container'>{clickCount}</div>
    <button onClick={handleClickLess} className='less-bottom'>menos</button>
    
    </div> 
  ) 
}
