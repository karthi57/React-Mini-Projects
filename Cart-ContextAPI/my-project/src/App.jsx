
import './App.css'
import Items from './components/Items'
import Cart from './components/Cart'


function App() {
  

  return (
    <>
      <Items name="MacBook" price="100000"/>
      <Items name="Pendrive" price="5000"/>
      <Items name="Headphone" price="10000"/>
      <Cart/>
    </>
  )
}

export default App
