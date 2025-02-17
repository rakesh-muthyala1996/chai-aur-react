import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1 
    if(counter === 20){
      return counter
    }else{
      setCounter(counter+1)

    }
    
  }
  
  const removeValue = () => {
    if(counter === 0){
      return counter
    }else{
      setCounter(counter-1)

    }
    
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick = {addValue}>Add Value</button>
      <br/>
      <button onClick= {removeValue}>Remove Value </button>
    </>
  )
}

export default App
