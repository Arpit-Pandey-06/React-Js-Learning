import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx';


function App() {
  let usernames=["Jordan","One8","Nike"]
  return (
    <>
    <h1 className='bg-blue-200 text-black rounded-2xl p-1 mb-4' >Tailwind Test</h1>
    {usernames.map((name,index)=>(
      <Card key={index} username={name}/>
    ))}
    </>
  )
}

export default App
