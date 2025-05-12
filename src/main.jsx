import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./components/App/App.jsx"
import ProductDetailPage from "./components/ProductDetailPage.jsx"
import ProductPage from "./components/ProductPage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/products" element={<ProductPage />} /> 
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
