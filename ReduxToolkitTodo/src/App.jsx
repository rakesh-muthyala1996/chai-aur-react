import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className= "text-5xl font-serif">Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App