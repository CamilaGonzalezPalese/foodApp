import React, { Component } from 'react';
import './FoodApp.css';
import Checkout from '../../components/Checkout/Checkout.jsx'
import FoodList from '../../components/FoodList/FoodList.jsx';

function FoodApp() {
    return (
      <div className="food-app">
        <header className="header">
          <h1 className="title">Food app</h1>
        </header>
        <main className="main-content">
            <FoodList />
            <Checkout />
        </main>
      </div>
    );
}

export default FoodApp;
