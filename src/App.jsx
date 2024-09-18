import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
   // [constant,function]<--array
  const addValue = () => {

   setCounter(counter+1);
   if(counter>=25){
     alert("Counter can not be greater than 20")
     setCounter(20);
   }
  }

   const removeValue = () => {

    setCounter(counter-1);
    if(counter<=0){
      alert("Counter can not be less than 0")
      setCounter(0);
    }
   }
    
  
  return (
    <>
      <h1>COUNTER</h1>
      <h2>Start Value : {counter} </h2>

      <button onClick={addValue}>Add Value</button> <br /><br/>
      <button onClick={removeValue}> Remove Value </button>
      <p>NOTE: It is a Basic Counter for the puspose of practice.</p>
    </>
  )
}

export default App
