import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =   useState(1)
  // useState gives us two value first is variable second is function

  const addValue = ()=>{
    setCounter(counter+1)
  }
  const delValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <br />
    <button onClick={delValue}>remove value</button>
    </>
  )
}

export default App
