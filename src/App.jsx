import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
   // [constant,function]<--array
  const addValue = () => {

   setCounter(counter+1);
   if(counter>=30){
     alert("NoNo!! Counter can not exceed 30")
     setCounter(20);
   }
  }

   const removeValue = () => {

    setCounter(counter-1);
    if(counter<=0){
      alert("Sorry!! Counter can not be less than 0")
      setCounter(0);
    }
   }
    
  
  return (
    <>
      <h1>CoustomCounter</h1>
      <h2>Default Value : {counter} </h2>

      <button onClick={addValue}>Add Value</button> <br /><br/>
      <button onClick={removeValue}> Remove Value </button>
      <p>NOTE: This is a Basic Counter Design for the purpose of practice.</p>
    </>
  )
}

export default App
