import { useState } from 'react'
import reactLogo from "../../assets/react.svg"
import viteLogo from '/vite.svg'
import './App.css'
import Checkout from '../App/Checkout/Checkout.jsx'

function App() {
  return (
    <>
    <h1>FoodApp</h1>
      <div id="app">        
        
        <Checkout />
      </div> 
    </>
  )
}

export default App
