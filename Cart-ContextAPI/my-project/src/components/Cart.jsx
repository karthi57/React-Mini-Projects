import React from 'react'
import { useCart } from '../context/cart'

function cart() {
  const cart = useCart();
  const total = cart.items.reduce((a,b) =>  a +Number( b.price), 0)
  return (
    <div>
        <h1>CART</h1>
        <h2>TOTAl Bill : ${total}</h2>
        
    </div>
  )
}

export default cart