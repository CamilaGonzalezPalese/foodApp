import { useState } from 'react'
import reactLogo from "../../assets/react.svg"
import viteLogo from '/vite.svg'
import './App.css'
import FoodList from '../../components/FoodList/FoodList.jsx';
import Checkout from '../../components/Checkout/Checkout.jsx'

function App() {
  return (
    <>
      <div className="App">
      <header className="header">
        <h1 className="title">Food app</h1>
      </header>
      <main className="main-content">
        <FoodList />
        <Checkout />
      </main>
      </div>
    </>
  );
}

export default App