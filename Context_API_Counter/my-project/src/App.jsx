import { useContext } from 'react'
import {CounterContext} from './components/Context'
import './App.css'
import Counter from './components/Counter';

function App() {
  const counterState = useContext(CounterContext);
  console.log("Context", counterState);

  return (
    <>
      <h1>The Count = {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </>
  )
}

export default App
