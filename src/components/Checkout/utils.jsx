import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App/App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

//Esta funcion la va a usar el food-item para agregar una unidad a la linea de checkout correspondiente
export function addToCheckout(item) {
  checkoutFoods.push(item);
  renderApp();
}

export function renderApp() {
  root.render(<App />);
}

export let checkoutFoods = [
    
  ];
  
//Esta funcion va a ser utilizada por el checkout mismo para reducir la cantidad en 1
export function removeFromCheckout() {
  checkoutFoods.pop(item);
  renderApp();
}