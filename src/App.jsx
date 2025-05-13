import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import ProductDetailPage from "./components/ProductDetailPage.jsx"
import ProductPage from "./components/ProductPage.jsx"
import Header from  "./components/Header.jsx"
import { ThemeProvider } from './context/DarkContext.jsx';
function App() {
  return (
    <>
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
