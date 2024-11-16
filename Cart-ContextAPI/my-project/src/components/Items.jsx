import React from 'react'
import { useCart } from '../context/cart'


function Items({name, price}) {
  const cart = useCart();
  console.log(cart);
  
  return (
    <div>
        <h2>Item Name : {name}</h2>
        <h2>Price : {price}</h2>
        <button onClick={() => cart.setItems([...cart.items, {name : name, price : price} ]) }>Add to Cart</button>
    </div>
  )
}

export default Items