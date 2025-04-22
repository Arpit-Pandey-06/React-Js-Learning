import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(1)
    

  // let counter = 15;
  const CounterValue=()=>{
     counter=counter+1;
     if(counter<=20){
      console.log("clicked",counter);
      setCounter(counter)
     }
     else{
      counter=20;
      // setCounter(counter)
      alert("value should not be exceed 20")
     }
    
  }
  const deleteCount=()=>{
    counter=counter-1;
    if(counter<0){
      alert("Value not be negative")
      counter=0;
    }
    else{
    console.log("clicked decrease",counter);
    setCounter(counter)
    }
  }

  return (
    <>
      <h1>Howes Doing</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={CounterValue}>Add Value</button>
      <br />
      <button onClick={deleteCount}>Remove value</button>
    </>
  )
}

export default App
