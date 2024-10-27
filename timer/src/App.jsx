import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import { Todo } from './Todo';

function App() {
  const [time,setTime]=useState("");
  return (
    <>
      <Clock  time={time} setTime={setTime}/>
      <Todo />
    </>
  )
}

export default App
